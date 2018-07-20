import React, { Component } from 'react';

 import './App.css';
import { Row, Col, Grid} from 'react-bootstrap';


class HeaderMenuComponent extends Component {

  render() {
    return (
      <div>
        <div className="header-info-bar" >
          <Grid>
            <Row className="show-grid">
              <Col md={6}>
                
                 <p> Choose from more than 1 lakh + Style and exclusive brands</p>
                
              </Col>
              <Col md={6}>
                <div id="top-header-bar">
                  <ul className="list-inline pull-right" >
                    <li className="top-header-list" >
                      <a>All Stores</a>
                    </li>
                    <li className="top-header-list" >
                      <a>Contact Us</a>
                    </li>
                    <li className=" track-order" >
                      <a>Track Order</a>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
  );
  }
}

export default HeaderMenuComponent;
