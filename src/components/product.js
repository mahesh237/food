import React from 'react'
import pepsi from '../assets/pepsi.jpeg'
const Product = (props) => {
    const { product, onAdd } = props;
  return (
    <div>
    <img className="small" src={product.image}alt={product.name} />
    <h3>{product.name}</h3>
    <div>RS {product.price}</div>
    <div>
      <button onClick={() => onAdd(product)}>+</button>
      <button onClick={() => onAdd(product)}>-</button>
    </div>
  </div>
  )
}

export default Product