import {
  BASE_PATH,
  ERROR_MESSAGE,
  MEHTHOD_NAME,
  STATUS,
} from "../utils/constants";

// API call
const handleData = (data) => {
  if (data.status !== STATUS.successStatus) {
    throw Error(ERROR_MESSAGE.statusError);
  } else {
    return data.message;
  }
};
export const getApiCall = async (getUrl) => {
  try {
    const response = await fetch(BASE_PATH + getUrl, {
      method: MEHTHOD_NAME.GET,
    });
    if (!response.ok) {
      throw new Error(ERROR_MESSAGE.responseError + ` ${response.status}`);
    }
    const data = await response.json();
    return handleData(data);
  } catch (error) {
    alert(error);
  }
};
