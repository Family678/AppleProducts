import React, { Component } from 'react'
import ProductContainer from './appleContainer'
import SearchBar from './search'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
        dynamicProducts: [],
        searchString:"This is from App.js",
        cart: [],
    }
  }

  updateSearchString(searchStringAsAnInput){
    this.setState({
        searchString: searchStringAsAnInput}
    // ,()=>{
    //   if(searchStringAsAnInput != ""){
    //       let newfilteredItems=this.state.dynamicProducts.filter((eachProduct)=>{
    //       return eachProduct.appleName.indexOf(searchStringAsAnInput)>-1
    //       })
    //   this.setState({filteredItems:newfilteredItems})
    //   }else{
    //       this.setState({
    //         filteredItems: this.state.dynamicProducts
    //       })
    //     }
    //   })
    // filteredList(event){
    //   let updatedList: this.state.dynamicProducts.filter(eachProduct){
    //     return eachProduct.toLowerCase().search(
    //       event.target.value.toLowerCase())!== -1
    //   })
    //   this.setState({filteredItems: updatedList});

    //   }

    // }
    // // 
 )}

  handleAddToCart(newProduct){
    let newCart = [...this.state.cart,newProduct]
    this.setState({
      cart: newCart
    })
  }
  handleToRemove(newProduct){
    let newCart = [...this.state.cart,newProduct] 
    let editCart = newCart.filter(del => del !== newCart[newCart.length-1])
    this.setState({
    cart: editCart
    })
  }
    
  render(){
    return(
      <div className='App'>
          <SearchBar 
          searchString={this.state.searchString} 
          cart={this.state.cart} 
          thisIsFunctionAsProp_updateSearchString={(searchStringInput)=>this.updateSearchString(searchStringInput)}/>
          <ProductContainer 
          cart={this.state.cart} 
          products = {this.state.dynamicProducts} 
          handleAddToCartInProductContainer = {(product)=>this.handleAddToCart(product)}
          handleToRemoveFromProductContainer = {(product)=>this.handleToRemove(product)}/>
      </div>
    );
  }

  componentDidMount (){
    let self = this
    fetch('https://api.myjson.com/bins/13ml0u')
    .then(function(response){
        console.log("This is the Data from the API", response)
        return response.json()
    })
    .then(function(jsonResponse){
      self.setState({
        dynamicProducts: jsonResponse
      })
        console.log("This is the JSON response", jsonResponse)
    })
    .catch(function(error){
        console.log(error)
    })

  }
}

export default App

