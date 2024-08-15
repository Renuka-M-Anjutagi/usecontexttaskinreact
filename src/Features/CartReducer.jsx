
 export const totalItem = (cart) => {
    return cart.reduce((sum, product) => sum + product.quantity , 0)
}


export const totalPrice = (cart) => {
    return cart.reduce((total, product) => total + product.quantity* product.price , 0)
}

const CartReducer = (state, action ) => {
    switch(action.type){
        case "Add" : 
        return [...state , action.product];

        case "Remove":

        return state.filter(p => p.id !== action.id)
       
        case "Increase":
            const Index1 = state.findIndex(p => p.id === action.id)
            state[Index1].quantity += 1
            return [...state]
        case "Decrease":

        const Index2 = state.findIndex(p => p.id === action.id)
            state[Index2].quantity -= 1
            return [...state]

        default:
            state
    }
}

export default CartReducer