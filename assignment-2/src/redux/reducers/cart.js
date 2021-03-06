const initalState = {
    cart: 0
};

const cartReducer = (state = initalState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "ADD_PRODUCT":
            return {
                ...state,
                cart: {
                    ...state.cart,
                    [action.payload.id]: {
                        data: state.cart[action.payload.id] ? {
                            id: action.payload.id,
                            img: action.payload.img,
                            name: action.payload.name,
                            qty: state.cart[action.payload.id].data.qty + action.payload.qty,
                            price: action.payload.price
                        } : action.payload, 
                    }
                }
            }
        default:
            return state;
    }
};

export default cartReducer;
