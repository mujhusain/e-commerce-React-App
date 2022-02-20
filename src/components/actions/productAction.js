import { ActionTypes } from "../actiontypes/actionTypes"

export const setProducts=(products) =>{

    return {
        type:ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const slectedProduct=(product) =>{

    return {
        type:ActionTypes.SELECTED_PRODUCT,
        payload: product
    }
}

export const removeOldProduct=() =>{

    return {
        type:ActionTypes.REMOVE_OLD_PRODUCT,
    }
}