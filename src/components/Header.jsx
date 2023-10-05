import { useContext, useState } from "react";
import {LOGO} from "../utils/constants"; 
import { Link } from "react-router-dom";
import UserContext from "./UserContext";
import { useSelector } from "react-redux";

const Header = () =>{

    const [btnName,setBtnName] = useState("Login");
    const {loggedInUser} = useContext(UserContext);

    const cartItems = useSelector((store)=>store.cart.items.length);

    
return (
    <div className = "header">
        <img className = "logo" src = {LOGO}></img>
        <ul className = "links">
            <li>  <Link to = "/"> Home  </Link>    </li>
            <li>  <Link to = "/about"> About  </Link>    </li>  
            <li>  <Link to = "/contact"> Contact  </Link>    </li>
            <li>  <Link to = "/cart"> 🛒({cartItems}) </Link>    </li>

            <button className="btnName" 
            onClick={()=>{btnName==="Login"?setBtnName("Logout"):setBtnName("Login")}}>
            {btnName}
            </button>
            
            <li>{loggedInUser}</li>

        </ul>
    </div>
);
};


export default Header;