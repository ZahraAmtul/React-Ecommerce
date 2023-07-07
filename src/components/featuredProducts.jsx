import React from 'react'
import {Products} from './products'
const featuredProducts = () => {
  return <>
  <div className="row">
    {Products.slice(2,4).map(product => (
       <div key={product.id}>
        <div className="col mb-5">
        <div className="card">
            <img src={product.image} alt="" className='img-fluid' />
            <div className="card-details">
                <span>{product.brand}</span>
                <h2>{product.title}</h2>
                <div className="card-bottom">
                <p>{product.price}</p>
                <p>{product.sale}</p>
                </div>
                
            </div>
        </div>
        </div>
       </div>
    ))}
  </div>
  </>
}

export default featuredProducts