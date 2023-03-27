import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotal } from './features/cart/cartSlice';
function App() {
  const {cartItems}=useSelector((state)=>state.cart)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(calculateTotal())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems])
  return (
    <div className="App">
      <Navbar/>
      <CartContainer/>
    </div>
  );
}

export default App;
