export const initialState ={
    basket: [],
    user: null,
};

export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case "SET_USER":
            return{
                ...state,
                user: action.user
            }
        case 'ADD_TO_BASKET':
            // Logic for adding item to basket
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case 'REMOVE_FROM_BASKET':
            // REMOVE FROM BASKET

            // Cloned the basket
            let newBasket = [...state.basket];

            // check to see if product exist
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if (index >= 0) {
                // item exist in basket, remove it...
                newBasket.splice(index, 1);
            } else {
                console.warn(
                'Cant remove product (id: ${action.id}) as its not in basket'
                );
            }

            return {...state, basket: newBasket};
            break;
        default:
            return state;
    }
}

export default reducer;