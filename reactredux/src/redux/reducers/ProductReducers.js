import {ActionTypes} from "../constatnts/action-types";
const initialState=
{
    products:[],
}

export const productReducer=(state=initialState,{type,payload})=>
{
     switch(type)
     {
        case ActionTypes.SET_PRODUCT:
            return {...state,products:payload};
        default:
            return state;
     }
}

export const selectedProductReducer=(state={},{type,payload})=>
{
    switch(type)
     {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state,...payload};
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;
     }
}
