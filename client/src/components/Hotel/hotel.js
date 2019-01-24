import React from 'react';
import { Button } from "react-bootstrap";

import API from '../../utils/API';

export class Hotel extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hotel: [],
    }
    this.getHotel();
  }

  getHotel = event => {
    var hotels = API.castle("france").then(response => {
      // response.forEach(element => {
      //   console.log(element);
      // });
      // this.state.hotel.push(response);
      this.setState({hotel: response});
    });
    
  }

  render() {
    return(
      <div className="hotel">
        <ul>
          {
            this.state.hotel.map(function(item, index) {
              return (
                <div>
                  <p>{item.from_price}</p>
                  <h2>Restaurant: {item.restaurant.name}</h2>
                </div>
                )
            })
          }
        </ul>
      </div>
    )
  }
  

  
}