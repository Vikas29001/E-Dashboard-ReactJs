

export const Add =(item)=>{

    return{
        type: "ADD_TO_CART",
        payload: item
    }
}


export const Del =(id)=>{
    return{
        type: "DEL_TO_CART",
        payload: id
    }
}


export const Remove =(id)=>{
    return{
        type: "REMOVE_TO_CART",
        payload: id
    }
}