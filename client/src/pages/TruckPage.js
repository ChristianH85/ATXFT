import React from 'react'
import fakedb from './../fakedb.js'
class TruckPage extends React.Component{
    componentDidMount(){
        console.log(fakedb)
    }

    render(){
        return(
            <div className="truckPage">
            <div className="row">
            <div className="col s12 m8 l6 offset-m2 offset-l3">
            <div className="spacer"></div>
            <div className="card">
                <h1 id="truckTitle">{fakedb[0].truck}</h1>
                <div><img src={fakedb[0].img} alt="https://bloximages.newyork1.vip.townnews.com/newsadvance.com/content/tncms/assets/v3/editorial/3/4a/34ad2dfc-17a1-598e-b497-49bf4ca5bc93/573d8695903e7.image.jpg?resize=587%2C395"/></div>
                <h3 className="menuTitle">Menu</h3>
                {fakedb[0].menuItems.map(item=>{return(
                    <div className="menuItem">
                        {/* <img /> */}
                        <h4>{item.name}</h4>
                        <p>{item.description}<h6><b>{item.price}</b></h6></p>
                    </div>
                    )
                })}
                <div className="spacer"></div>
                </div>
            </div>
            </div>
            </div>
           
        )
    }
}
export default TruckPage