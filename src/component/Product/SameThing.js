import React from 'react';
import './SameThing.css';

const Product = (props) => {
    return (<div>
        {console.log('item.productImageURL is ', props.item.productImageURL)}
        {console.log('item is ', props.item)}
        <div>Product</div>
        <div ><img className ='image_box' src = {props.item.productImageURL}/></div>
        <div>{props.item.productName}</div>
        <div>{props.item.productPrice}</div>
    </div>)
    
}

export default Product;