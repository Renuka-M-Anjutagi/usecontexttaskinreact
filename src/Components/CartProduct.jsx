import React, { useContext } from 'react'
import { CartContext } from '../Features/ContextProvider';
const CartProduct = ({product}) => {

    const {cart, dispatch } = useContext(CartContext);
    const Increase = (id) => {

       
        const Index = cart.findIndex(p => p.id === id)
        if(cart[Index].quantity < 10)
        {
            dispatch({type: "Increase", id})
        }
    };
    const Decrease = (id) => {

        const Index1 = cart.findIndex(p => p.id === id)
        if(cart[Index1].quantity > 1)
        {
            dispatch({type: "Decrease", id})
        }

    };

    const Remove = (id) => {

        const Index2 = cart.findIndex(p => p.id === id)
        if(cart[Index2].quantity > 1)
        {
            dispatch({type: "Remove", id})
        }

    };
  return (
    <div className='d-flex  mb-5'>
        <img className="w-25 h-25" src={product.thumbnail} alt="Card image cap"></img>
        <div className='detail ms-4 w-20 '>
            <h4> {product.title }</h4>
            <p>{ product.description}</p>
            
        </div>
        <div className='d-flex justify-content-between w-50'>
       
            <div className='buttons'>

                <button className='rounded-circle px-2' onClick={() => Decrease(product.id)}><b> - </b></button>
                <button className='rounded'> { product.quantity}</button>
                <button className='rounded-circle px-2' onClick={() => Increase(product.id)}><b>  +  </b></button>

            </div>
             <h4> ${product.price }</h4>
            <button className='btn btn-sm' onClick={() => Remove(product.id)}>Remove</button>
        </div>

    </div>
  )
}

export default CartProduct