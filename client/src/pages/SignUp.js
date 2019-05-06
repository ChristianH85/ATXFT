import React from 'react';
import Axios from 'axios';
import{Row,Col} from 'react-materialize'

class SignUp extends React.Component{
    state={
        username:"",
        password:"",
    }
    handleSignUp=(event)=>{
        event.preventDefault();
        Axios.post("/login",{
            username:this.state.username,
            password:this.state.password
        }).then( response=>{
            console.log(response)
        })
        console.log("sign me up")
    }
    handleChange = (e) => {
        let name=e.target.name
        this.setState({
          [name]: e.target.value
        })
      }
    render(){
        return(
            <div className="row" id="truckPage">
                <div className="col s10 m6 offset-s1 offset-m3">

                    <form className="login">
                    <a href="/auth/google">Sign In with Google</a>
                            <h5 id="login-label">Email:</h5>
                            <br/>
                            <input name="username"  validate="true" onChange={this.handleChange} value={this.state.username}></input>
                            <br/>
                            <h5 id="login-label">Password:</h5>
                            <br/>
                            <input name="password" type="password" validate="true" onChange={this.handleChange} value={this.state.password}></input>
                            <br/>
                            <button className="btnSignup"  onClick={this.handleSignUp}>Sign Up</button>
                            <br/>
                            <button href= "/TruckLogin" className="signup-link">Dont have a Login? Sign Up Now!</button>
                            <br/>
                            <button  className="truck-link"><a href= "/Login" >Regular Login</a></button>
                    </form>
                </div>
            </div>
        )
    }
}
export default SignUp