import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MenuList from './MenuList';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
    const cart = useSelector((store)=>store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () =>{
        dispatch(clearCart());
    }
  return (
    <div className='text-center'>
    <div className='font-bold text-2xl'>Cart</div>
    <button className='font-bold bg-black text-white p-2 m-auto rounded-lg'
    onClick={handleClearCart}>
        Clear Cart
        </button>
    <div className='w-6/12 m-auto'> <MenuList items = {cart}/> </div>
    </div>
  )
}

export default Cart