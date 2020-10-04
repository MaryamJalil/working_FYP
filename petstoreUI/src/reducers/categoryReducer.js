import {GET_CATEGORY_SUCCESS, GET_CATEGORY_FAIL,    DELETE_CATEGORY_SUCCESS,
    DELETE_CATEGORY_FAILURE, } from '../actions/types';


const initialState = {
    category_list: [],
    categories: [],
    loading: false,
    error: null,
    success: null
}

export default (state=initialState, action) => { 
    const { type, payload } = action;
 
    switch (type) {
        case GET_CATEGORY_SUCCESS:
            return {
             ...state,   
             category_list:payload
            }
        case GET_CATEGORY_FAIL:
            return{
                ...state,
            }
            case DELETE_CATEGORY_SUCCESS:
                return {
                    ...state,
                    categories: state.categories.filter(
                        cat => cat._id !== action.payload._id
                    ),
                    error: null,
                    success: action.payload.successMessage
                };
            case DELETE_CATEGORY_FAILURE:
                return {
                    ...state,
                    error: action.payload.error,
                    success: null
                };
        default:
            return state;
    }
}