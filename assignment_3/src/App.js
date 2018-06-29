import React, { Component } from 'react'
import AppleContainer from './appleContainer'
import './App.css'
import SearchBar from './search'

const URL = 'https://api.myjson.com/bins/8j08m'
class App extends React.Component{
  constructor(){
    super()
    this.state = {
        dynamicProducts: [],
    }
  }
  render(){
    return(
      <div className='App'>
          <h4>AppleProducts</h4>
          <SearchBar />
          <AppleContainer products={this.state.dynamicProducts}/>
      </div>
    );
  }

componentDidMount(){
    let self=this;
    fetch(URL)
    .then(function(response){
      console.log("This is the Data from the API", response)
      return response.json()
    })
    .then(function(jsonresponse){
      self.setState({
        dynamicProducts:jsonresponse
      })
    })
    .catch(function(error){
      console.log(error)
    }) 
  }
}
export default App