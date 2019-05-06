import React, {Component} from 'react'
import foodtruckicon from '../images/foodtruckicon.jpg'
import burger from "./burger.png"
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Search from '../pages/Search';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
class NavBar extends Component{
    state = {
        left:false
    }

    toggleDrawer = (side, open) => () => {
        console.log(side)
        this.setState({
          [side]: open,
        });
      };
    render(){
        // const buttonListUser=[
        //     {
        //         name: Search,
        //         href: "/Search"
        //     }
        // ]
        const sideList = (
            <div>
                <List id="list">
                    <ListItem ><a href="/Search">Search</a></ListItem>
                    <ListItem><a href="/TruckPage">TruckPage</a></ListItem>
                    <ListItem ><a href="/TruckHome">TruckHome</a></ListItem>
                    <ListItem ><a href="/Signup">SignUp</a></ListItem>
                    <ListItem><a href="/Login">Login</a></ListItem>
                   
                </List>
            </div>
        )
        return(
            <div id="title"className="row">

            <div className="col s2 m1 l1"><button ><img onClick={this.toggleDrawer('left', true)}id= "burger-icon"src={burger}></img></button></div>
                <SwipeableDrawer
                    open={this.state.left}
                    onClose={this.toggleDrawer('left', false)}
                    onOpen={this.toggleDrawer('left', true)}
                    >
                    {sideList}
                </SwipeableDrawer>
                <div className="col s2 m1 l1">
                    <a href= "TruckLogin"><img id= "truck-icon" src={foodtruckicon}></img></a>
                </div>
                <div id="logo" className="col s7 m9">
                ATX Food Trucks
                </div>
                
            </div>
        )
    }
}
export default NavBar