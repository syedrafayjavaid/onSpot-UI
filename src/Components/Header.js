import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link , Redirect} from "react-router-dom";
import { useEffect } from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);

   this.state = {

      login: false
      
    }
    
    this.logout = this.logout.bind(this);
  
  }
componentDidMount() {
    if (localStorage.getItem('login')) {
      
       this.setState({login:false})
     
      }
      else{
        this.setState({login:true})
      }
  }

logout(){
    localStorage.setItem("login",'');
    localStorage.clear();
    localStorage.setItem('login', JSON.stringify({
      login:false,
      store:null
   
  }))
    this.setState({login: true});
  }



 



  render() {
    console.warn(this.state.login);
    return (
      <div>
        <header className="header-section" style={{height:"70px"}}>

      

          <div className="container" >

        



      
          
          
        
            <ul className="main-menu-left site-menu-style"> 
            <li>
           
            <Link to="/"><h style={{textTransform:"capitalize",fontFamily:"Cambria",fontSize:"16px",fontWeight:"bold"}}>OnSpot</h></Link>
            </li>  
              <li style={{marginLeft:"215px"}}>
                <Link to="/"><strong>Home</strong></Link>
              </li>
              
              <li style={{marginLeft:"40px"}}>
                <Link to="/image-search"><strong>Search by Image</strong></Link>
              </li>

              <li style={{marginLeft:"40px"}}>
                <Link to="/profile"><strong>Profile</strong></Link>
              </li>


             
             
              <li  style={{marginLeft:"20px"}}>
              
            
              <Link onClick={this.logout} to="/login">{localStorage.getItem('logHome')==='true'?<strong>LOGOUT</strong>:<strong>LOGIN</strong>}</Link>
              
           
            
            </li>
            </ul>
       
             
             
              
              <li>
             
              </li>
            
               {/* { this.state.login?
              
              <li>
              <Link  to="/login" className='log-in'><strong>Login</strong></Link>
              </li> 
              :
              <li>
                {console.log("the local store was set to #####////////////////////",localStorage.getItem('logHome'))}
              <Link onClick={this.logout} to="/login">{localStorage.getItem('logHome')==='true'?"LOGOUT":"LOGIN"}</Link>
              </li>
           
            } */}
            
          
            
          </div>
        
        </header>
      </div>
    );
  }
 
}
export default Header;
