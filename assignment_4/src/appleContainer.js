import React from 'react'
import Product from './productDetails'

const ProductContainer = (props) =>{
    return(
      <div className="products">
            {
              props.products.map(function(eachProduct){
                  return <Product
                                handleAddToCartInProduct={(product)=>props.handleAddToCartInProductContainer(product)}
                                handleToRemoveFromProduct={(product)=>props.handleToRemoveFromProductContainer(product)}
                                key={eachProduct.id}
                                AppleName={eachProduct.AppleName}
                                ApplePrice={eachProduct.ApplePrice}
                                AppleImage={eachProduct.AppleImage}
                                productId={eachProduct.id}
                                isAddedToCart={props.cart.indexOf(eachProduct.id) >= 0}
                                />
              })
            }
      </div>
    )
}

export default ProductContainer