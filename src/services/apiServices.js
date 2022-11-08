import {
  BASE_PATH,
  errorMessage,
  methodName,
  status,
} from "../utils/constants";

// API call

const handleData = (data) => {
  if (data.status !== status.successStatus) {
    throw Error(errorMessage.statusError);
  } else {
    return data.message;
  }
};
export const getApiCall = async (getUrl) => {
  try {
    const response = await fetch(BASE_PATH + getUrl, {
      method: methodName.GET,
    });
    if (!response.ok) {
      throw new Error(errorMessage.responseError + ` ${response.status}`);
    }
    const data = await response.json();
    return handleData(data);
  } catch (error) {
    alert(error);
  }
};
