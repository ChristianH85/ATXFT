import React,{Component} from 'react'
import Axios from 'axios';

class TruckLogin extends Component{
    gAuth=()=>{
        Axios.get('/auth/google')
    }
    render(){
        
        return(
            
            <div className="truckLogin">
            <div className="row">
                <div className="col s12 m8 l6 offset-m2 offset-l3">
                <form className="login">
                    <h5 id="login-label">Username:</h5>
                    <br/>
                    <input></input>
                    <br/>
                    <h5 id="login-label">Password:</h5>
                    <br/>
                    <input></input>
                    <br/>
                    <br/>
                    <button href= "/SignUp" className="signup-link">Dont have a Login? Sign Up Now!</button>
                    <br/>
                    <button type='button'onClick={this.gAuth}>Sign In with Google</button>
                    <button  className="truck-link"><a href= "/Login" >Regular Login</a></button>
                </form>
                </div>
                </div>
            </div>
        )
    }
}
export default TruckLogin