import {ActionTypes} from '../constatnts/action-types'

export const setProducts=(products)=>
{
    return{
    type:ActionTypes.SET_PRODUCT,
    payload:products
    }
}

export const selectedProduct=(product)=>
{
    return{
    type:ActionTypes.SELECTED_PRODUCT,
    payload:product
    }
}

export const removeSelectdProduct=()=>
{
    return{
    type:ActionTypes.REMOE_SELECTED_PRODUCT,
    payload:product
    }
}