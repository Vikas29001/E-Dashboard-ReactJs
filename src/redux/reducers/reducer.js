const initial_state = {
  carts: []
}

const cartreducer = (state = initial_state, action) => {

  if (action.type === "ADD_TO_CART") {

    let itemIndex = state.carts.findIndex((item) => item.id === action.payload.id)

    if (itemIndex >= 0) {

      state.carts[itemIndex].qnty += 1
    }
    let tem = { ...action.payload, qnty: 1 }
    return {
      ...state, carts: [...state.carts, tem]
    }


  }
  // return {
  //   ...state,carts:[...state.carts, action.payload]
  // }

  else if (action.type === "DEL_TO_CART") {
    const data = state.carts.filter((e) => e.id !== action.payload)
    return {
      ...state, carts: data
    }
  }

  else if (action.type === "REMOVE_TO_CART") {


    let itemIndex_dec = state.carts.findIndex((item) => item.id === action.payload.id)

    if (state.carts[itemIndex_dec].qnty >= 1) {
      let delete_item = state.carts[itemIndex_dec].qnty -= 1
      return {
        ...state,
        carts: [...state.carts]
      }
    }
    
    else if (state.carts[itemIndex_dec].qnty === 1) {
      const data = state.carts.filter((e) => e.id !== action.payload.id)
      return {
        ...state, carts: data
      }
    }

  }

  else {
    return state;
  }

}

export default cartreducer;