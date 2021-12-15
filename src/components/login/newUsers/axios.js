import { create } from "axios";

const API = create({ baseURL: "http://localhost:3001" });

const refreshAccessToken = async () => {
  const { data } = await API.post("authors/refreshToken", {
    actualResfreshToken: localStorage.getItem("REFRESH_TOKEN"),
  });

  localStorage.setItem("TOKEN", data.accessToken);
  localStorage.setItem("REFRESH_TOKEN", data.refreshToken);

  return data;
};

API.interceptors.request.use(async (config) => {
  const accessToken = localStorage.getItem("TOKEN");

  config.headers = {
    Authorization: accessToken ? `Bearer ${accessToken}` : null,
    "Content-Type": "application/json",
  };
});

API.interceptors.response.use(
  //By default we are forwarding the response as-is
  (response) => response,
  //But here we define the error handler
  async function (error) {
    // The configuration for the request that just failed:
    const failedRequest = error.config;

    if (
      // If unauthorized let's try to refresh the tokens...
      error.response.status === 401 &&
      // but won't retry if the failed request was already attempting to refresh the tokens
      failedRequest.url !== "/authors/refreshToken"
    ) {
      await refreshAccessToken();

      const retryRequest = API(failedRequest);
      return retryRequest;
    } else {
      return Promise.reject(error);
    }
  }
);

export default API
