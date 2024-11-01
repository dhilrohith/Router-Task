import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import NavBar from './components/NavBar';

const App = () => {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products")
      if (!response.ok) {
        throw new Error("Fetch Product is Failed");
      }
      const data = await response.json();
      data.map((item)=>({...item, productQuantity:0, productPrice:0}))
      setProducts(data); 
    } catch (error) {
      console.log("Error:", error)
    }
  }

  // Function for Add To Cart 
  const addToCart=(product)=>{
    if(cart.includes(product)){
      return alert("Product is already added. Please move to Cart to increase Quantity")
    }
    
    else{
      product.productQuantity=+1;
      product.productPrice=+product.price;
      setCart([...cart,product]);
      console.log(cart);
    }
  }

  // Function for Add Quantity

  const addQuantity = (product)=>{
    const updatedCart = cart.map((item)=>{
      if(item.id === product.id){
        item.productQuantity += 1;
        item.productPrice = item.productQuantity*item.price;
      }

      return item;
    });
    setCart(updatedCart)
  }

  // Decrease Product
  const decreaseQuantity = (product)=>{
    const updatedCart = cart.map((item)=>{
      if(item.id === product.id && item.productQuantity > 1){
        item.productQuantity -= 1;
        item.productPrice = item.productQuantity * item.price;
      }
      return item;
    });
    setCart(updatedCart)
  }

  //  Remove Product
  const removeProduct = (product)=>{
        setCart(cart.filter((item)=>item.id!==product.id));
  }

  // Total
  const calculateTotal = () => {
    const total = cart.reduce((total, item) => total + item.productPrice, 0);
    const discountedTotal = total * 0.9; // Apply 10% discount
    return discountedTotal.toFixed(2);
}

  return (
    <div className="">
      <BrowserRouter>
        <NavBar cart={cart} count={cart.length}/>
        <Routes>
          <Route path='/' element={<Product products={products} addToCart={addToCart}/>} />
          <Route path='/cart' element={<Cart cart={cart} setCart={setCart} addQuantity={addQuantity} decreaseQuantity={decreaseQuantity}
          removeProduct={removeProduct} calculateTotal={calculateTotal()} count={cart.length}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;