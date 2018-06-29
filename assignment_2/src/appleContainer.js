import React from 'react'
import Apple from './product'

const AppleContainer = (props) =>{
  return(
    <div className="products">
          {
            props.products.map(function(eachApple){
                return <Apple 
                key={eachApple.id} 
                AppleName={eachApple.AppleName} 
                AppleDescription={eachApple.AppleDescription} 
                AppleImage={eachApple.AppleImage} />
            })
          }
    </div>
  )
}
export default AppleContainer