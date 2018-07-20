import React, { Component } from 'react';
import './App.css';

import { Navbar, NavbarBrand,MenuItem,Nav,NavDropdown, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';


class App extends Component {
  
  render() {
    return (
     
      <div className="main-bar-class">
          <div className="left-main-bar">
              <i className="fa fa-list" aria-hidden="true"></i>
              <i className="fa fa-search" aria-hidden="true" onClick={this.searchMethod}></i>
          </div>
          <div className="center-main-bar">
            <img alt="Not Available" src={'/Images/logo.png'} className="logo-shopersstop" height="37px;"/>
          </div>

          <div className="right-main-bar">
            <i className="fa fa-lock" aria-hidden="true"></i>
          </div>
 
        </div>


    );
  }
}

export default App;
