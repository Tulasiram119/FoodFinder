
import { Component } from 'react';
import UserClass from './UserClass';
class About extends Component{
  constructor(props){
    super(props)
    this.state = {
      user:""
    }
  }
  
  async componentDidMount(){
   
      const name = await fetch("https://api.github.com/users/akshaymarch7");
      const json = await name.json();
      this.setState({
        user:json
      })
    
  }
  componentDidUpdate(prevProps){
    
  }
  componentWillUnmount(){
    
  }
  render(){
    const {name,public_repos,avatar_url} = this.state.user;
    
    return (
      <div className='about'>
        <h1>This About Page</h1>
        
        <h2>Hello from About Page</h2>
        <UserClass name = {name} numberOfRepos ={public_repos } img = {avatar_url}/>
      </div>
    )
  }
}
export default About;
