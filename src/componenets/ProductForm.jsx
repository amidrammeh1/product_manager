import React, {useState} from "react"
import axios from "axios";

const ProductForm = () => {
const [title, setTitle] = useState("")
const [price, setPrice] = useState("")
const [description, setDescription] = useState("")

const handleSubmit = (e) => {
  e.preventDefault()
  axios.post('http://localhost:8000/api/product', {
    title, price, description
  })
}



  return (
    <div>
      <form onSubmit={handleSubmit}>
       <h1>Submit a Product</h1> 
       <div>
         <label htmlFor="title">Title</label>
         <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
       </div>

       <div>
         <label htmlFor="price">Price</label>
         <input type="number" value={price} onChange={(e) => setPrice(e.target.value)}/>
       </div>

       <div>
         <label htmlFor="description">Description</label>
         <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
       </div>
      <input type="submit"/>
      </form>
    </div>
  )
}

export default ProductForm;