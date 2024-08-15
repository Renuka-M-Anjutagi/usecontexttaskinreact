import React,{ useContext} from 'react'
import { CartContext } from '../Features/ContextProvider';
import CartProduct from '../Components/CartProduct';

import { totalItem } from '../Features/CartReducer';
import { totalPrice } from '../Features/CartReducer';

const Cart = () => {

    const {cart} = useContext(CartContext);
  return (
    
        <div className='container border mt-3 d-flex justify-content-center'>
             <div className='row bg-light'>
             <div className='col-12 p-5 w-100'>

                    {cart.map(p => (
                        <CartProduct product = {p} />
                    ))}
             </div>
             <div className='d-flex justify-content-end'>

                        <div className='bg-light'>
                            <h5> Total Items : { totalItem(cart)} </h5>
                            <h5> Total Price : ${ totalPrice(cart)} </h5>
                        <button className='btn btn-sm'> Checkout </button>
                        </div>
             </div>
             </div>
        </div>
)
}

export default Cart