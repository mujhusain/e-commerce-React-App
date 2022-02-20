import { ActionTypes } from "../actiontypes/actionTypes";
// slectedProduct
const initialState ={
    products:[]
}

export const productReducer=(state=initialState, {type, payload})=>{

    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products:payload};
    
        default:
            return state;
    }
}
const detailInitial={}
export const selectedProdReducer=(state=detailInitial, {type, payload})=>{

    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, ...payload};
            //this case to remove the last details object before set new detail object
        case ActionTypes.REMOVE_OLD_PRODUCT:
            return {};
    
        default:
            return state;
    }
}