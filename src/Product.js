import React, { Component } from 'react';
import './App.css';
import {  Col} from 'react-bootstrap';

export default class Product extends Component {
   constructor(props) {
          super(props);
          this.state = {
         };
}
   
render(){
 const imgURL =this.props.product.images[1].url;
const price= this.props.product.price.formattedValue.split('.00');

return(
  
 
                 
                   
                        <Col md={3}>
                           <div style={{minHeight: '350px', backgroundColor: '#fff', border: '1px solid #dcdcdc', marginBottom: '10px'}}>
                              
                                 <div align="center">
                                  <div className="wishlist-pos" >
                                    <i className=" heart-color"></i>
                                  </div>
                                    <img alt="products" src={imgURL}  /><hr/>
                                    <h4 style={{color: '#666', fontSize: '14px',fontFamily: 'PTSans-Bold'}}>{this.props.product.brandName}</h4>
                                    <div style={{fontSize: '13px'}}>{this.props.product.name}</div>
                                    <h4 style={{color: '#666', fontSize: '14px', fontWeight: 'bold'}}>{price}</h4>
                                 </div>
                             
                           </div>
                        </Col>
                       
                    
                 
               
);
}
}