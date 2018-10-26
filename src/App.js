import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './component/Dashboard/SameThing.js';
import Form from './component/Form/SameThing.js';
import Header from './component/Header/SameThing.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInputProductName: '',
      userInputProductPrice: '',
      userInputProductImageURL: '',
      products: [{
        id:1,
        productName: 'Shirt',
        productImageURL:'https://wallpapercave.com/wp/S8Slsve.jpg',
        productPrice: 10.50
      },
      {
        id:2,
        productName: 'pants',
        productImageURL: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiI1rms9qTeAhUBY6wKHXeoAAoQjRx6BAgBEAU&url=http%3A%2F%2Fwww.tokkoro.com%2F403965-superhero-free-background-wallpaper.html&psig=AOvVaw0T1OU9ZaDnkPlh4fNbDxy8&ust=1540671285766611',
        productPrice: 20.25
      },
      {
      id:3,
      productName: 'shoes',
      productImageURL: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiB2aO19qTeAhVBR6wKHZAFBfwQjRx6BAgBEAU&url=https%3A%2F%2Fwallpapercave.com%2Ffree-superhero-wallpapers&psig=AOvVaw0T1OU9ZaDnkPlh4fNbDxy8&ust=1540671285766611',
      productPrice: 15.77
      }]
    }
    this.updateUserInputProductImageURL = this.updateUserInputProductImageURL.bind(this);
  }

  resetInputBoxes = () => {
    this.setState({
      userInputProductName: '',
      userInputProductPrice: '',
      userInputProductImageURL: ''
    })
  }

  updateUserInputProductName = val => {
    this.setState({
      userInputProductName:val
    })
  }

  updateUserInputProductImageURL = val =>  {
    this.setState({
      userInputProductImageURL:val
    })
  }

  updateUserInputProductPrice = val => {
    this.setState({
      userInputProductPrice: val
    })
  }



  render() {
    return (
      <div className="App">
        <Dashboard myProducts = {this.state.products}></Dashboard>
        <Form></Form>
        <Header></Header>
        <input value = {this.state.updateUserInputProductImageURL} ref = "inputImage" onChange = {e=>this.updateUserInputProductImageURL(e.target.value)}/>
        <input value = {this.state.updateUserInputProductName} ref = "inputName" onChange = {e=>this.updateUserInputProductName(e.target.value)}/>
        <input value = {this.state.updateUserInputProductPrice} ref = "inputPrice" onChange = {e=>this.updateUserInputProductPrice(e.target.value)}/>
        <button>Add to Inventory</button>
        <button>Cancel</button>
      </div>
    );
  }
}

export default App;
