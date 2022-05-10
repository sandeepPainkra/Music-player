import axios from "axios";
const CLIENT_ID = "a99c6355a84d4e2f822419cb3b702bb4";
const authEndPoint = "https://accounts.spotify.com/authorize?";
const redirectUri = "http://localhost:3000";

const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndPoint = `${authEndPoint}client_id=${CLIENT_ID}&redirect_uri=${redirectUri}&scopes=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

const apiClient = axios.create({
  baseURL: "https://api.spotify.com/v1",
});
export const setClientToken = (token) => {
  apiClient.interceptors.request.use(async function (config) {
    config.headers.Authorization = "Bearer " + token;
    return config;
  });
};

export default apiClient;
