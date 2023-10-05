import { useState } from "react";

const User = (props) =>{

    const{name,Location} = props;
    const[count] = useState(0);
    const[count2] = useState(2);
    return(
        <div className="user">
        <h3>Name : {name}</h3>
        <h4>Location : {Location}</h4>
        <h3>Count:{count}</h3>
        <h4>Count2 :{count2}</h4>
        <h3>Software Engineer</h3>
        </div>
    )
}

export default User;