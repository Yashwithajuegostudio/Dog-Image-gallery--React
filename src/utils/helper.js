import { getApiCall } from "../services/apiServices";
import { BreedImageList, breedList, INITIAL_INDEX_VALUE } from "./constants";

// set Breed Image data
export const setBreedImageData = async (breedNameData, setImageList) => {
  try {
    const breedImageListData = await getApiCall(
      BreedImageList.replace(`breed/`, `breed/${breedNameData}/`)
    );
    if (breedImageListData) {
      const breedImageArray = Object.values(breedImageListData).filter(
        (value) => value.length > INITIAL_INDEX_VALUE
      );
      setImageList(breedImageArray);
    }
  } catch (error) {
    alert(error);
  }
};

// set dropdown Dog Name List data
export const setDropdownData = async (setDropDownList) => {
  try {
    const breedNameListData = await getApiCall(breedList);
    if (breedNameListData) {
      const breedNameList = Object.keys(breedNameListData).filter(
        (key) => key.length > INITIAL_INDEX_VALUE
      );
      setDropDownList(breedNameList);
    }
  } catch (error) {
    alert(error);
  }
};
