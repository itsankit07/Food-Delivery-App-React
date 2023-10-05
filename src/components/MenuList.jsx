import React from 'react'
import { CARD_IMG } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../utils/cartSlice';

const MenuList = ({items}) => {

  const dispatch = useDispatch();
  const cart = useSelector((store)=>store.cart.items);


  const handleCart = (item) =>{
    dispatch(addItem(item)) //it will go in action.payload
  }


  return (
    <div>
       {
        items.map((item)=>{
            return <div key = {item.card.info.id} className='bg-white my-3 py-2 border-b-2 border-black-100 text-left'>
               
               <div className='flex justify-between'>
                
                <div className='flex flex-col w-9/12'>
                <span className='my-2'>{item.card.info.name}</span>
                <span> ₹ {item.card.info.price/100 || item.card.info.defaultPrice/100}</span>
                <p className='text-xs my-2' >{item.card.info.description}</p>
                </div>

                <div className='w-3/12 p-2'>
                    <img className=" h-28 w-25 m-auto" src={CARD_IMG+item.card.info.imageId} />
                    <button className='p-2 text-white rounded-xl -mt-6 ml-14 absolute shadow-lg bg-amber-600 hover:bg-amber-700 active:bg-amber-700 focus:outline-none focus:ring '
                    onClick={()=>handleCart(item)}>
                      Add+</button> 
                </div>

               </div>
               </div>
        })   
       }
    </div>
  )
}

export default MenuList