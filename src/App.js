import React, { Component } from 'react';
import './App.css';
class Card extends Component {
  render() {
    return (
      <div className="flip-container">
    <div className="flipper">
   <div className="front">
     <img src='https://www.valuecoders.com/blog/wp-content/uploads/2016/09/Angular-vs-React.png' alt="text" />
   </div>
   <div className="back">
    <img src='https://image.slidesharecdn.com/slideshare-170228095239/95/angular-2-vs-react-what-to-chose-in-2017-6-638.jpg?cb=1488275683' alt="text"/>
   </div>
    </div>
    <div className="flipper-1">
   <div className="front-1">
     <img src='http://blog.thinkwik.com/wp-content/uploads/2017/07/new.png' alt="text/image"/>
   </div>
   <div className="back-1">
    <img src='https://static.thinkmobiles.com/uploads/2017/02/angular-react-1.jpg' alt="text/image"/>
   </div>
    </div>
      </div>
    );
  }
}
export default Card



