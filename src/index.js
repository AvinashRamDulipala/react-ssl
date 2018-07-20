import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavbarHeader from './Navbar_Header';
import Header from './Header';
// import Product from './Product';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Header />, document.getElementById('root'));
ReactDOM.render(<NavbarHeader />, document.getElementById('navbar'));


registerServiceWorker();
