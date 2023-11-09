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
            
            <div className="p-4 m-4 bg-blue-300 w-1/3 rounded-xl">
                <img src={img} alt="profile pic" className=" w-72 rounded-full"  />
                <h2 className="py-2 px-14">name: {name}</h2>
                <h3 className="py-2 px-8">total number of public repos : {numberOfRepos}</h3>
                                
            </div>
        )
    }
}
export default UserClass;