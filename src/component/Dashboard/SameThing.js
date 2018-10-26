import React, { Component } from 'react';
import Product from '../Product/SameThing.js';

class DashBoard extends Component {
    displayProducts(myProducts) {
        return ( 
            myProducts.map((element,index,arr)=>{
                return (
                <Product item = {element}></Product>
                )
            })
        )
    }

    render(){
        return(<div>
            <div>DashBoard</div>
            {this.displayProducts(this.props.myProducts)}
            </div>
            );
    }
}
export default DashBoard;