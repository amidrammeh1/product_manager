import './App.css';
import ProductForm from './componenets/ProductForm';
import ProductList from './componenets/ProductList'
import {Link, Router} from '@reach/router'

function App() {
  return (
    <div className="App">
      <div>
      <Link to="/">Home</Link>
      <Link to="/new">Add a new product</Link>
      <Link to="/products">Products</Link>
    </div> 
    
    <Router>
        <ProductForm path="/new"/>
        <ProductList path="/"/>
    </Router>
  </div> 
  )
}

export default App;
