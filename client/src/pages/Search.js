import React from 'react'
import axios from 'axios'
class Search extends React.Component{
    state={
        searchName:"",
        searchTag:"",
        results:[]
    }
    handleSubmit=()=>{
        // this needs work\\
        console.log("hit")
        let name =this.state.searchName
        let tag = this.state.searchTag

       console.log(tag)
        if( name.length>0 && tag.length ===0){
            axios.get(`/api/truck/${name}`).then(res => {
                if(res){
                  console.log(res.data)
                  }
                  else{console.log("nothing")}
              })
              .catch(err => console.log(err))
            console.log("name")
        }
        else if(name.length===0 && tag.length >0){
            axios.get("/api/profile").then(res => {
                if(res.data){
                  console.log(res.data)
                  }
              })
              .catch(err => console.log(err))
            console.log("tag")
        }
        else if(name.length>0 && tag.length >0){
            axios.get("/api/profile").then(res => {
                if(res.data){
                  console.log(res.data)
                  }
              })
              .catch(err => console.log(err))
            
            console.log("both")
        }
        else if(name.length===0 && tag.length===0){
            axios.get("/api/profile").then(res => {
                if(res.data){
                    let result = res.data;
                    this.setState({
                        results: result
                    });
                  console.log(res.data)
                  }
                  else{console.log("nothing")}
              })
              .catch(err => console.log(err))
            console.log("none")
        }
        
    }
    handleChange = (e) => {
        let name =e.target.name
        this.setState({
            
          [name]: e.target.value
        })
      }
    render(){
        return(
            <div className="App">
            <div className="row">
                <div className="col s12 m8 l6 offset-m2 offset-l3">
                <form className="form">
                <h3>Search:</h3>
                    <h5 id="login-label">Name</h5>
                    
                    <input name="searchName" onChange={this.handleChange} value={this.state.searchName} id ="input"></input>
                    <br/>
                    <h5 id="login-label">Type</h5>
                    
                    <input name="searchTag" onChange={this.handleChange} value={this.state.searchTag} id ="input"></input>
                    <br/>
                    <br/>
                    <button  type= "button" onClick={this.handleSubmit} className="truck-link">Search</button>
                    <br/>
                    <div className="spacer"></div>
                    
                </form>
                </div>
            </div>
               
                
            </div>
        )
    }
}
export default Search