import {GET_CATEGORY_SUCCESS, GET_CATEGORY_FAIL } from '../actions/types';


const initialState = {
    category_list: []
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
            // case DELETE_CATEGORY:
            // return{
            //     ...state,
            // }
        default:
            return state;
    }
}