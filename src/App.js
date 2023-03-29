import { useEffect } from 'react';
import './App.css';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import { useDispatch, useSelector } from 'react-redux';

import { calculateTotal, getCartItems } from './features/cart/cartSlice';

function App() {
  const {cartItems, isLoading}=useSelector((state)=>state.cart)
  const {isOpen}=useSelector((state)=>state.modal)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(calculateTotal())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems])
  useEffect(()=>{
    dispatch(getCartItems())
  })

  if(isLoading){
    return <div className='loading'>
      <h1>Loading...</h1>
    </div>
  }
  return (
    <div className="App">
      {isOpen && <Modal/>}
      <Navbar/>
      <CartContainer/>
    </div>
  );
}

export default App;
