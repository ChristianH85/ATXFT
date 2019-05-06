import React,{Component} from 'react'

class Login extends Component{
    render(){
        return(
            <div className="row" id="truckPage">
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
                        <button className="signup-link"><a href= "/SignUp">Dont have a Login? Sign Up Now!</a></button>
                        <br/>
                        <button className="truck-link"><a href= "/Login" >Truck Login</a></button>
                    </form>
                </div>
            </div>
        )
    }
}
export default Login