import { useState,useEffect } from "react";
import { menu_api } from "./constants";

const useRestaurantMenu = (resId) => {

    const[resInfo,setResInfo] = useState(null);
    
    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async () =>{
        const menu_data = await fetch(menu_api+resId);
        const menu_json = await menu_data.json();
        setResInfo(menu_json);
    }

  return resInfo
}

export default useRestaurantMenu