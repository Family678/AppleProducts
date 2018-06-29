import React from 'react'
import PropTypes from 'prop-types'

class Apple extends React.Component {

  render(){
    return(
    <div className="Apple">
      <div className="Apple-image">
          <img src={this.props.AppleImage}/>
      </div>
      <div className="overlay">
          <h3 className="Apple-name">{this.props.AppleName}</h3>
          <p className="AppleDescription">{this.props.AppleDescription}</p>
      </div>
    </div>
    )
  }
}

Apple.propTypes = {
  AppleName: PropTypes.string.isRequired,
  AppleImage:PropTypes.string,
  AppleDescription:PropTypes.string
}

Apple.defaultProps = {
  AppleImage:"http://4.bp.blogspot.com/_CHG2GRbeET8/SS3f-tcSNiI/AAAAAAAAJEk/qVdRYu1MLMs/s320/missing-715826.gif",
  AppleDescription: 'No message.'
}

export default Apple