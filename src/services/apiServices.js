import { basePath, errorMessage, methodName } from "../utils/constants";

// API call
function getApiCall(getUrl) {
  return fetch(basePath + getUrl, {
    method: methodName.GET,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(errorMessage.responseError + ` ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => console.error(error));
}
export { getApiCall };
