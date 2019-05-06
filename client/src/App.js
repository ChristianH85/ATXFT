import React, { Component } from 'react';
// import logo from './logo.svg';
import axios from 'axios'
import './App.css';
import {BrowserRouter as Router, Route,  } from "react-router-dom";
import NavBar from './components/NavBar';
import Login from './pages/Login';
import TruckLogin from './pages/TruckLogin';
import Search from './pages/Search';
import TruckHome from './pages/TruckHome';
import SignUp from './pages/SignUp';
import windowSize from 'react-window-size';
import TruckPage from './pages/TruckPage';


class App extends Component {
state={
  truck:"",
  img:""
}
componentDidMount(){
  console.log(this.props.windowWidth)
  axios.get('/api/profile')
  .then(res => {
    console.log(res.data)
    if(res.data){
      console.log(res.data)
      }
  })
  .catch(err => console.log(err))
}
  handleChange = (e) => {
    this.setState({
      truck: e.target.value
    })
  }
  addTruck = () => {
    let truck=this.state.truck
    console.log(truck)
    if(truck!==null){
      axios.post('/api/profile', {truck:truck})
        .then(res => {
          if(res.data){
            console.log(res.data)
          }
        })
        .catch(err => console.log(err))
    }else {
      console.log('input field required')
    }
  }
  render() {
    return (
      <div >
      <NavBar/>
      
      <Router>
      <Route path="/" exact component={Login} />
      <Route path="/Login" exact component={Login} />
      <Route path="/TruckLogin" exact component={TruckLogin} />
      <Route path="/Search" exact component={Search}/>
      <Route path ="/TruckHome" exact component={TruckHome}/>
      <Route path ="/SignUp" exact component={SignUp}/>
      <Route path = "/TruckPage" exact component ={TruckPage}/>
      
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        {/* <div className="ctrdiv">
        <input onChange= {this.handleChange}label="Username" placeholder="TRuck Name" value ={this.state.truck}></input>
        <button id="submit"type ="submit" onClick={this.addTruck}>Submit</button>
        <br/>
        </div> */}
        {/* <input label="Username"type="url" placeholder="Truck pic"></input> */}
        {/* <input type= "color"></input> */}
        </Router>
        
      </div>
    );
  }
}

export default App;
