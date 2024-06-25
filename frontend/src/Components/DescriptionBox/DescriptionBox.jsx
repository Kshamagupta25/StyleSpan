import React from 'react'
import './DescriptionBox.css'

 const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
    <div className='descriptionbox-navigator'>
        <div className='descriptionbox-nav-box'>Description</div>
        <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
    </div>
    <div className='descriptionbox-description'>
        <p>An Ecommerce websites serve as online platforms for buying and selling goods/services, enabling businesses to showcase 
        offerings and consumers to shop conveniently from computers or mobile devices. Features include product listings, secure payment gateways,
         and order management. They're vital in the digital economy, facilitating global commerce and offering consumers an accessible alternative to
          traditional shopping methods.</p>
          <p>
            An Ecommerce websites typically include features such as product listings with descriptions and images, shopping carts, secure payment gateways
             for transactions, and order management systems. They may also offer additional functionalities like user reviews, personalized recommendations, 
             and customer support channels.
         </p>
    </div>
    </div>
  )
}

export default DescriptionBox;