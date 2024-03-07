import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/actions';

const initialState = {
    cartItems: [],
    totalPrice: 0
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state, 
                cartItems: [...state.cartItems, action.payload],
                totalPrice: Number(state.totalPrice) + Number(Number(action.payload.price)* Number(action.payload.qty))
            };
        case REMOVE_FROM_CART:
            const updatedCartItems = state.cartItems.filter(item => item.prodid !== action.payload);
            const removedItem = state.cartItems.find(item => item.prodid === action.payload);
            return {
                ...state, 
                cartItems: updatedCartItems, 
                totalPrice: Number(Number(state.totalPrice) - (Number(removedItem.price) * Number(removedItem.qty)))
            };
        default:
            return state;
    }
};

export default cartReducer;