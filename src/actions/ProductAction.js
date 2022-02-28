import axios from "axios";
import PRODUCT from "../constants/ProductConstant";
import "./feeds.json"


export const requestUsers = (data) => async (dispatch) => {
  dispatch({
    type: USER.LOAD,
  });
  try {
    const json = await axios.get("feeds.json");
    console.log(json);
    dispatch({
      type: PRODUCT.LOAD_SUCCESS,
      productsData: json.data,
      isError: false,
    });
  } catch (e) {
    dispatch({
      type: PRODUCT.LOAD_SUCCESS,
      productsData: [],
      isError: true,
    });
  }
};