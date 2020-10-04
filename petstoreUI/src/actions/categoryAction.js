import {
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_FAIL, 
  GET_CATEGORY_SUCCESS, GET_CATEGORY_FAIL,
  DELETE_CATEGORY_SUCCESS, DELETE_CATEGORY_FAILURE
  } from './types';
  import setAuthToken from '../config/SetAuthToken';
  import {axiosInstance} from '../config/utilities'
  import {setAlert} from './alertAction'

// import { setAuthToken } from "../auth-actions/setAuthToken";
import axios from "axios";


  export const createCategory = (name, id) => async dispatch => {
   
    setAuthToken(localStorage.getItem("token"))
    const body = {name};
    try {
      const res = await axiosInstance.post(`api/category/create/${id}`, body);
      dispatch({
        type: ADD_CATEGORY_SUCCESS,
      });
       dispatch(setAlert("Category Added", 'success'));

    } catch (err) {
      const errors = err.response.data.errors;
      
      if (errors) {
        errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
      }
  
      dispatch({
        type: ADD_CATEGORY_FAIL,
      });
  
  }
}

  export const getAllCategories = () => async dispatch => {
 
    setAuthToken(localStorage.getItem("token"))
 
    try {
      const res = await axiosInstance.get(`api/categories/`);
      dispatch({
        type: GET_CATEGORY_SUCCESS,
        payload: res.data
      });
       dispatch(setAlert("Category Added", 'success'));
console.log(res)
    } catch (err) {
      const errors = err.response.data.errors;
      
      if (errors) {
        errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
      }
  
      dispatch({
        type: GET_CATEGORY_FAIL,
      });
  
  }
}
export const UpdateCategories = (name,_id,userId) => async dispatch => {
 
  setAuthToken(localStorage.getItem("token"))

  try {
    const res = await axiosInstance.put(`api/categories/${_id}/${userId}`);
    dispatch({
      type: GET_CATEGORY_SUCCESS,
      payload: res.data
    });
     dispatch(setAlert("Category Updated", 'success'));

  } catch (err) {
    const errors = err.response.data.errors;
    
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
    }

    dispatch({
      type: GET_CATEGORY_FAIL,
    });

}
}
export const DeleteCategories = (_id,userId) => async dispatch => {
 console.log("heyyyyyy")
  setAuthToken(localStorage.getItem("token"))
  if (window.confirm('Do you want to permanently delete Manager account? This can NOT be undone!')) {

  try {
    const res = await axiosInstance.delete(`api/category/${_id}`);
    dispatch({
      type: GET_CATEGORY_FAIL,
      payload: res.data
    });
     dispatch(setAlert("Category Deleted", 'success'));

  } catch (err) {
    const errors = err.response.data.errors;
    
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
    }

    dispatch({
      type: GET_CATEGORY_SUCCESS,
    });

}
}
}



export const deleteCategory = _id => (dispatch) => {
  // setAuthToken(localStorage.getItem("token"))

  console.log("cdc")
  return new Promise((resolve, reject) => {
    axios
      .delete(`api/category/${_id}`,localStorage.getItem("token") )
      .then(res => {
        let successMessage = res.data.message;

        dispatch(deleteCategorySuccess(_id, successMessage));
        resolve(res);
      })
      .catch(error => {
        dispatch(deleteCategoryFailure(error.message));
        reject(error);
      });
  });
};

const deleteCategorySuccess = (_id, successMessage) => {
  return {
    type: DELETE_CATEGORY_SUCCESS,
    payload: {
      _id,
      successMessage
    }
  };
};

const deleteCategoryFailure = error => {
  return {
    type: DELETE_CATEGORY_FAILURE,
    payload: {
      error
    }
  };
};
