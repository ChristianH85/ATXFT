import React from 'react';
import Axios from 'axios';


class TruckHome extends React.Component{
    state={
        name:"",
        location:"",
        hours:"",
        item:"",
        description:"",
        price:"",
        bgImg:"",
        // color1:"",
        // color2:"",
        // color3:"",
        btn:"red",
        menuOpen:false,
        addTruckOpen:false

    }
    componentDidMount=()=>{
        Axios.get('api/t').then(res => {
            console.log(res)
            if(res){
              console.log(res)
              }
    })
}
    openMenu=()=>{
        if(this.state.menuOpen=== false){
            this.setState({
                menuOpen:true
            })
        }else{
            this.setState({
                menuOpen:false
            })
        }
    }
    addMenuItem=()=>{
        let mItem= this.state.item
        let iDes= this.state.description
        let iPrice=this.state.price
        let refId= this.state.results
        console.log(refId)
        Axios.post(`api/item/${refId}`,{
            item:mItem,
            price:iPrice,
            description:iDes,
        }).then(res => {
            if(res.data){
                let result = res.data.itemRef;
               
              console.log(result)
              }
              else{console.log("nothing")}
          })
          .catch(err => console.log(err))
    }
    handleClick=()=>{
        console.log(this.state.btn)
        if (this.state.btn==="red"){
            this.setState({
                btn:"blue"
            })}

            else{
                this.setState({
                    btn:"red"
                })
            
        }
    }
    addTruck=()=>{
        let tname=this.state.name
        let tloc= this.state.location
        let thours= this.state.hours
        Axios.post('/api/t',{
            truck:tname,
            location:tloc,
            hours: thours
        }).then(res => {
            console.log("res1"+res.data)
            if(res){
                let result = res.data._id;
                this.setState({
                    results: result
                });
              console.log("results"+res)
              }
              else{console.log("nothing")}
          })
          .catch(err => console.log(err))
        
    
    }
    openAddTruck=()=>{
        if(this.state.addTruckOpen=== false){
            this.setState({
                addTruckOpen:true
            })
        }else{
            this.setState({
                addTruckOpen:false
            })
        }
    }
    handleChange = (e) => {
        let name=e.target.name
        this.setState({
          [name]: e.target.value
        })
      }
    render(){
        return(
            <div style={{backgroundImage:this.state.bgImg}} className="truck">
            <div className="row">
                <div className="col s12 m8 l6 offset-m2 offset-l3">
                
                <div className="form" id="inputForm">
                    <button id ={this.state.btn}>Menu</button>
                    <button id ="btn" onClick={this.handleClick}>location</button>
                    <div className="spacer"></div>
                    <button id ="btn" onClick={this.openAddTruck}>Truck Info</button>
                    {this.state.addTruckOpen===true?
                    <div>
                        <div>
                            <label id ="inputLabel">Truck Name</label>
                            <input name ="name" onChange={this.handleChange}></input>
                        </div>
                        <div>
                            <label id ="inputLabel">Location</label>
                            <input name ="location" onChange={this.handleChange}></input>
                        </div>
                        <div>
                            <label id ="inputLabel">Hours</label>
                            <input name ="hours" onChange={this.handleChange}></input>
                        </div>
                            <button id ="btnPost" onClick={this.addTruck}>Add Truck</button>
                    </div>:
                    <div className="spacer"></div>}
                    <button id ="btn" onClick={this.openMenu}>Add Menu Item</button>
                    
                    {this.state.menuOpen===true?
                    <div >
                        <div className="spacer"></div>
                        <label  id ="inputLabel">Item</label>
                        <input name ="item"onChange={this.handleChange}></input>
                        <label  id ="inputLabel">Description</label>
                        <input name="description" onChange={this.handleChange}></input>
                        <label id ="inputLabel">Price</label>
                        <input name="price" onChange={this.handleChange}></input>
                        <button id="btnPost" onClick={this.addMenuItem}>Add Item</button>
                    </div>:<div className="spacer"/>}
                    
                    {/* <div>
                    <div className="spacer"></div>
                    <label>Truck Name</label>
                    <input name ="name" onChange={this.handleChange}></input>
                    </div>
                    <div>
                    <label>Location</label>
                    <input name ="location" onChange={this.handleChange}></input>
                    </div>
                    <div>
                    <label>Hours</label>
                    <input name ="hours" onChange={this.handleChange}></input>
                    </div>
                    <button id ="btn" onClick={this.addTruck}>Add Truck</button> */}
                </div>
                </div>
            </div>
            </div>
        )
    }
}
export default TruckHome