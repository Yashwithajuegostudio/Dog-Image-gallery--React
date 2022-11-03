import { basePath } from "../utils/constants";

function getApiCall(getUrl) {
  return fetch(basePath + getUrl, {
    method: "GET",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Request failed with the status ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => console.error(error));
}
export { getApiCall };
