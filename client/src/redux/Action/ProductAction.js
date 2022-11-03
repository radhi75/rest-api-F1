import axios from "axios";
import { GET_PRODUCTS } from "../ActionTypes/ProductType";

export const get_product = () => async (dispatch) => {
  try {
    const res = await axios.get("/res/getproduct");
    console.log(res.data);
    dispatch({ type: GET_PRODUCTS, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
export const add_product = (data) => async (dispatch) => {
  try {
    await axios.post("/res/addproduct", data);
    dispatch(get_product());
  } catch (error) {
    console.log(error);
  }
};
export const delete_product = (id) => async (dispatch) => {
  try {
    await axios.delete(`/res/delproduct/${id}`);
    dispatch(get_product());
  } catch (error) {
    console.log(error);
  }
};
export const edit_product = (id, data) => async (dispatch) => {
  try {
    await axios.put(`/res/editproduct/${id}`, data);
    dispatch(get_product());
  } catch (error) {
    console.log(error);
  }
};
