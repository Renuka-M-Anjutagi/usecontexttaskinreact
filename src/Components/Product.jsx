import React, { useContext } from 'react'
import { CartContext } from '../Features/ContextProvider'


const Product = ({product}) => {
    const {dispatch} = useContext(CartContext);
    return (
        <div className="col">
            <div className="card h-100">
                <img class="card-img-top h-55" src={product.image} alt="Card image cap"></img>
                <div className="card-body">
                    <h4 className="card-title">{product.title}</h4>
                    <h5 className='card-price'>$ {product.price} </h5>

                    <p className="card-text">{product.description}</p>
                    <button onClick={() => dispatch({type:"Add", product: product})} className="btn btn-primary">Add To Cart </button>
                </div>
            </div>

        </div>
    )
}

export default Product