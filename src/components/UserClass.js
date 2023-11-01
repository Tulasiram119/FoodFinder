import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    
    render(){
        const{name,numberOfRepos,img} = this.props;
        
        return(
            
            <div className="user-card">
                <h2>name: {name}</h2>
                <h3>total number of public repos : {numberOfRepos}</h3>
                <img src={img} alt="profile pic"  />                
            </div>
        )
    }
}
export default UserClass;