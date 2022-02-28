
import './App.css';
import DenseAppBar from './components/Header';
import Homepage from './components/Homepage';
import Main from './components/Main';
import Checkout from './components/Checkout'
import LoginPage from './components/LoginPage';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { useState } from 'react';

import data from '../src/data'







function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  
  return (
    
    


<BrowserRouter>
<div className="App">
      
      <DenseAppBar cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          countCartItems={cartItems.length} />
          
      
      <div className='row'>
      <Routes>
        
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/home' element={<Homepage/>}/>
     
      <Route path='/menu'  element={ <Main products={products} onAdd={onAdd}/>}/>
     
    
      <Route path='/checkout' element={<Checkout/>}/>
   
     
      </Routes>
      </div>
  </div>
     </BrowserRouter>
    
  );
}

export default App;
