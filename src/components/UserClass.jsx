import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);
    
        this.state = {
            userdetails:{
                name: "dummyname",
                login: "dummylogin"
            }
        }

        console.log(this.props.name + " constructor called")

    }

    async componentDidMount (){
        console.log( this.props.name +  " did mount");
        const data = await fetch("https://api.github.com/users/itsankit07")
        const json = await data.json();
        this.setState({
            userdetails:json,
        })
    }

    componentDidUpdate(){
        console.log("component updated");
    }

    componentWillUnmount(){
        console.log("unmounted");
    }

    render(){

        const{name,login,avatar_url} = this.state.userdetails;
        const{count} = this.state;
        console.log(name + " rendered"); 
        return(
            
            <div className="user">
            <img src={avatar_url} alt="" />
            <h3>Name : {name}</h3>
            <h4>Id : {login}</h4>
            <h3>Software Engineer</h3>
            </div>
        )
    }
}

export default UserClass;