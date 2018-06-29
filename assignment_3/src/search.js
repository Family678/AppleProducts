import React from 'react'

class SearchBar extends React.Component{
constructor(){
    super()
    this.state={val: ""}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
}
handleChange(event){
    this.setState({val: event.target.value})
    //this.thisIsFunctionAsProp_updateSearchString(event.target.value)
}
handleSubmit(){
        alert('Searched For:'+ this.state.val)
    }

render(){ 
    return(
    <div>
        <input type="text" value={this.props.val} onChange={this.handleChange} />
        <button type="Submit" onClick={this.handleSubmit}>search</button>
    </div>
  )
}
}
export default SearchBar

