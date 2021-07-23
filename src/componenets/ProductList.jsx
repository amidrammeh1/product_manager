import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from '@reach/router'


const ProductList = () => {
  const [products, setProducts]= useState([])

  useEffect(() => {
    axios
    .get('http://localhost:8000/api/products')
    .then(res => setProducts(res.data))
    .catch(error => console.log(error))
  }, [])
  return (
    <div>
      <h3>Product List</h3>
      { products.map( product => {
        return <h3 key={ product._id }><Link to = { `/product/${product._id}` }>Title: { product.title }</Link> | Price: ${ product.price } | Description: { product.description }</h3>
      })}

    </div>
  )
}

export default ProductList