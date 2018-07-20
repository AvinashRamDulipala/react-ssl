import React, { Component } from 'react';
import Product from './Product';
import Layout from './Layout';
import Footer from './Footer';
import './App.css';
import { Row, Col, Grid, FormGroup,InputGroup,Navbar,NavItem,Nav } from 'react-bootstrap';
import {  Link } from 'react-router-dom';

// import BottomScrollListener  from 'react-bottom-scroll-listener';



class NavbarHeader extends Component 
{
  constructor(props)
   {
            super(props);
            this.state = {
              searchText : '',
             productData : [],
             searchData : [],
             FilterData : [],
              products : [],
              SubCategoryData:[],
              productDetailsData:true,
              clearData: false,
               navdata: [],
              isHide:false,
              isHovered:false,
              isTop:'',
              isChecked: true,
              glph:false,
    };
        this.inputChange = this.inputChange.bind(this);
        this.searchSubmit = this.searchSubmit.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
        this.hideBar = this.hideBar.bind(this);
        this.toggleChange = this.toggleChange.bind(this);
        this.handleHover = this.handleHover.bind(this);
       
}  
 handleHover(){
  
    this.setState({
        isHovered: !this.state.isHovered
    });
  }

inputChange(e) {
this.setState({searchText : e.target.value});

}

  hideBar(){
       let {isHide} = this.state
       window.pageYOffset >= 1?
       !isHide && this.setState({isHide:true,isTop:'0'})
       :
       isHide && this.setState({isHide:false,isTop:''})

       this.prev = window.scrollY;
    }
    componentDidMount(){
 this.getNav();
    this.interval = setInterval(() => {
      this.getNav();
    }, 5000);

        window.addEventListener('scroll',this.hideBar);

    }
    getNav() {
    fetch("https://www.shoppersstop.com/services/v1/ssl/homepage/shopByCategory")
      .then(function (response) {
 return response.json();
  }).then(function (result) {
    console.log(result);
    
  this.setState({
  navdata : result  });
   }.bind(this))
       // console.log("hello"+this.state.navdata);
  }
    componentWillUnmount(){
       clearInterval(this.interval);
         window.removeEventListener('scroll',this.hideBar);
    }
   
    toggleChange(){
    this.setState({
      isChecked: !this.state.isChecked,
    });
  }
  
searchSubmit(e) {
this.setState({clearData  : true});
 fetch('https://test4.shopper-stop.in/services/v2_1/ssl/products/search?query='+this.state.searchText)
 .then(function (response) {
 return response.json();
  }).then(function (result) {
    console.log(result);
    
  this.setState({
  searchData : result.products ,CategoryData : result.facets,sortDetails : result.sorts,searchTextData : result.freeTextSearch,paginationData : result.pagination });
   }.bind(this))
  // console.log("arrowBack"+this.state.SubCategoryData);
}

onKeyPress(e){

if(e.which === 13) {

this.searchSubmit();

}
}
 render() {
      var productData = [];

for(var product in this.state.searchData)
   {
      if (this.state.searchData.hasOwnProperty(product))
      {
       
            productData.push(

<Product product={this.state.searchData[product]} key={this.state.searchData[product].code+ Math.random()}></Product>);

      }
  }



if(this.state.clearData) {
   this.state.productData=[];
  
}
this.state.productData = this.state.productData.concat(productData);
// console.log(this.state.clearData);
const styles = {
    classTop: {
        top: this.state.isTop
    }

    };
    const navbar = {
    classShow: {
        isHide:this.state.isHide?"hide":"",
        isHovered : this.state.isHovered ? "hide" : ""
    }
    
    };
 let classHide=this.state.isHide?"":"hide";

 const { classTop } = styles;
 const { classShow } = navbar;
 // const btnClass = this.state.isHovered ? "hide" : "";

    return (
      
<div>
  <div className="navHeader" style={classTop}>
      <Grid>
        <Row className="show-grid">
          <Col md={3}>
            <div className="logo">
              <img alt="Shopperstop logo"  src={'/Images/logo.png'} style={{marginTop:'10px'}} className="logo-shopersstop" height="50px;"/>
            </div>
          </Col>
          <Col md={5}>
         <div className=""  onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
          <div className={"shopbyCat "+classHide } >
            <span>Shop By</span>
            <p>Category</p>
         
          </div>
          </div>
            <div id="search-products">
              <FormGroup>
                <InputGroup>
                  <div className="input-group search search-wrap">
                    <div style={{display:'none'}} className="autosuggestions_hidden"></div>
                    <input type="text" value={this.state.searchtext}  onKeyPress={this.onKeyPress}  name="searchtext" 
                             onChange={this.inputChange}  className="form-control js-site-search-input ui-autocomplete-input" 
                            placeholder="Search Products & Brands"  />
                    <input type="submit" value="" onClick={this.searchSubmit}  />
                  </div>
                </InputGroup>
              </FormGroup>
            </div>
          </Col>
          <Col md={4}>
            <div className="user-container user-icons">
              <ul>
                <li className="hidden-xs hidden-sm">
                  <a className="wishlist">Wishlist</a>
                  <span className="count wish-count" style={{display: 'none'}}></span>
                </li>
                <li className="yCmsComponent miniCart bag-container">
                  <a href="/cart" className="minicart bags bag bag-container" >My Bag</a>
                  <span className=" count bag-count" style={{display: 'none'}}></span>
                </li>
                <li className="hidden-xs hidden-sm">
                  <a  href="" className="user"><img alt="" src="https://prodstatic.shoppersstop.com/_ui/responsive/common/assets/images/user.png" /></a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Grid>
      <Navbar className={classShow}>
        <Nav>

         {this.state.navdata ? this.state.navdata.map((nav,i) =>
          <NavItem key={i} links={nav.linkComponentData.linkUrl}>
           {nav.linkComponentData.linkText}
          </NavItem>
          
           ):''
        }
        </Nav>
  </Navbar>
    </div>
    
  <Layout  searchText={this.state.searchTextData}    checked={this.state.isChecked} glph={this.state.glph} CategoryData={this.state.CategoryData}   productData={this.state.productData} totalProducts={this.state.paginationData} sortDetails={this.state.sortDetails}  scrollSubmit={this.scrollSubmit} />
    <div className="loader" style={{display: 'none'}}>
  <img src="https://www.shoppersstop.com/_ui/responsive/common/assets/images/sslLoader.gif" />
  </div>
<Footer/>
</div>
  );
  }
}

export default NavbarHeader;
