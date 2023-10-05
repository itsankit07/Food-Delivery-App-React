import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "./UserContext";


class About extends React.Component{

    constructor(props){
        super(props);
        console.log("parent constructor called")
    }

    componentDidMount(){
        console.log("parent did mount")
    }

    render(){
        console.log("parent rendered");
        return(
        <div>
            <h1>About Section</h1>
            {/* <User name = {"Ankit"} Location = {"Lucknow"}/> */}
            <UserClass name = {"First Child Class"} Location = {"Lucknow"}/>
            <UserContext.Consumer>
                {
                    (data) => <h1>{data.loggedInUser}</h1>
                }
            </UserContext.Consumer>
        </div>
        )
    }
}

export default About;