import { basePath, errorMessage, methodName } from "../utils/constants";

// API call
export const getApiCall = async (getUrl) => {
  const response = await fetch(basePath + getUrl, {
    method: methodName.GET,
  });
  if (!response.ok) {
    throw new Error(errorMessage.responseError + ` ${response.status}`);
  }
  return response.json();
};
