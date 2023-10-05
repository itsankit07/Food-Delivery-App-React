import React from 'react'
import MenuList from './MenuList';
import { useState } from 'react';

const RestaurantCategory = ({item,showItems,setShowIndex,index}) => {

    const handleClick = () =>{
        showItems?setShowIndex(null):setShowIndex(index);
    }
  return (
    <div>
        <div className='bg-white-200 m-4 p-4 cursor-pointer shadow-lg'>

            <div className='flex justify-between' onClick={handleClick}>
            <span className='font-bold text-base'>{item.title} ({item.itemCards.length})</span>
            <span id = "arrow">▼</span>
            </div>

            {showItems&&<MenuList items = {item.itemCards}/>}
        </div>
    </div>
  )
}

export default RestaurantCategory