import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Product extends Component {
  render(){
    return(
      <div className="appleProduct">
            <div className="AppleImage">
                <img src={this.props.AppleImage}/>
            </div>
            <h4 className="AppleName">{this.props.AppleName}</h4>
            <h4 className="ApplePrice">{this.props.ApplePrice}</h4>
            {
              this.props.isAddedToCart ?
              <div className="product-action">
                  <button onClick={()=>{ this.props.handleToRemoveFromProduct(this.props.productId) }}  className="delete" type="button"> Delete </button>
              </div> :
              <div className="product-action">
                  <button onClick={()=>{ this.props.handleAddToCartInProduct(this.props.productId) }}  className="added" type="button"> Add to Cart </button>
              </div>  
            }
      </div>
    )
  }
}

Product.propTypes = {
  AppleName: PropTypes.string.isRequired,
  ApplePrice: PropTypes.number,
  AppleImage:PropTypes.string,
  Id: PropTypes.number,
}

Product.defaultProps = {
    ApplePrice: 0,
    AppleImage:"http://4.bp.blogspot.com/_CHG2GRbeET8/SS3f-tcSNiI/AAAAAAAAJEk/qVdRYu1MLMs/s320/missing-715826.gif"
}

export default Product