import React, { Component } from 'react';
import './App.css';
// import { Scrollbars } from 'react-custom-scrollbars';
import { If, Then } from 'react-if-elseif-else-render';
// import {Collapse} from 'react-collapse';
// import {  Link } from 'react-router-dom';
// import {Col ,Row} from 'react-bootstrap';
// import BottomScrollListener  from 'react-bottom-scroll-listener';
import { Breadcrumb,BreadcrumbItem, Row, Col, Grid,PanelGroup,Panel } from 'react-bootstrap';
import { Collapse, Button, CardBody, Card } from 'reactstrap';



export default class Layout extends Component {
   constructor(props) {
          super(props);
          this.state = {
            loading: true,
            CategoryData:[],
            SubCategoryData:[],
            SubCategoryDetails:[],
            sortDetails:[],
            isChecked: true,
            pageNumber :0,
            isActive: false,
             searchString: '',
           items: [],
         };
          this.scrollSubmit = this.scrollSubmit.bind(this);
         
          this.handleClick = this.handleClick.bind(this);
          this.toggleChange = this.toggleChange.bind(this);
          this.searchInput = this.searchInput.bind(this);

         
         
}

handleClick() {
    if(this.state.isActive){
      this.setState({isActive: false})
    }else{
      this.setState({isActive: true})
    }
  }
  
  toggleChange(){
    this.setState({
      isChecked: !this.props.isChecked,
    });
  }
  searchInput(e){
    this.setState({
      searchString: e.target.value,
    })
  }
scrollSubmit(res) {
 
this.props.scrollSubmit(res)
}
   
render(){
var totalProd=[];
  if(this.props.totalProducts != undefined) {
   totalProd =this.props.totalProducts.totalResults;
  // console.log("jsakjskjas"+totalProd);
 }

 
   

        var searchString = this.state.searchString.trim().toLowerCase();
    /* if (searchString.length > 0) {
       libraries = libraries.filter(function(i) {
         return i.name.toLowerCase().match( searchString );
          console.log('tech'+libraries);
       });
     }*/

      
return(
  <div style={{backgroundColor: '#efefef',top:'120px',position:'relative'}}>            
   
   <div>
      <Grid>
         <Row className="show-grid">
         <Breadcrumb>
         <BreadcrumbItem>Home</BreadcrumbItem>
         <BreadcrumbItem>{this.props.searchText}</BreadcrumbItem>
       </Breadcrumb>
            <Col md={3} style={{marginTop: '20px',width:'21%'}}>
             {this.props.CategoryData ? this.props.CategoryData.map((CategoryData,i) =>
           <If condition={CategoryData.category ===false} key={i}>
            <Then>
          <div key={i}  index={ i }>
          <PanelGroup accordion id="accordion-example">
  <Panel>
    <Panel.Title toggle>
              <div className="filter-category-heading"    style={{fontSize: '14px'}}>
                {CategoryData.name}
                <div className="clear-filter">
                <a href="#">Clear</a> 
                <span  className="categoryLabels" ></span>
                </div>

                </div>  <div className="clearfix"></div>
                </Panel.Title>
                
                
              
                <Panel.Body collapsible className="scrollbar" >
                {CategoryData.code == 'brands' ?
                <div>
                  <div className="brand-search">
                    <input type="text" name="searchString" className="brand-filter" onChange={this.searchInput}
                      id="brand-filter" value={this.state.searchString}  placeholder="Search Brands..." />
                  </div>
                  <div className="filter-scroll search-list">
                <div className="thumb-scroll ">
                
  if (searchString.length > 0) {
       CategoryData.values = CategoryData.values.filter((i) =>
          i.name.toLowerCase().match( searchString )).map((SubCategoryDetails,index)=>
                
               
                 

              
                <div  key={index}>
                
                  <div className="ex-checkbox ">

                    <input type="checkbox"  checked={this.props.isChecked}  onClick={this.toggleChange} className="facet-checkbox " id={SubCategoryDetails.code} />

                    
                    <label className="swatch-colors" > <span className="facet-label" >
                     <span className="facet-mark" style={{
                      backgroundColor: CategoryData.code == 'swatchColors' ? SubCategoryDetails.code : '', 
                      display:  CategoryData.code == 'swatchColors' ? 'inline-block' : 'none',
                      width: '17px',height: '17px',    borderRadius: '20px' , content: "", position: 'absolute',left: 0}}></span>
                      <span className="facet-text l1-category-facet-text">
                      
                       {SubCategoryDetails.name}&nbsp;
                        <span className="facet-value-count">({SubCategoryDetails.count})</span>
                        </span>
                      </span>
                    </label>
                  </div>
                </div>
           
          
          
       )
        }
         </div>
          </div>
          </div> : 

                <div className="filter-scroll search-list">
                <div className="thumb-scroll ">

                {CategoryData.values.map((SubCategoryData,index) =>
                  

              
                <div  key={index}>
                
                  <div className="ex-checkbox ">

                    <input type="checkbox"  checked={this.props.isChecked}  onClick={this.toggleChange} className="facet-checkbox " id={SubCategoryData.code} />


                    <label className="swatch-colors" > <span className="facet-label" >
                     <span className="facet-mark" style={{
                      backgroundColor: CategoryData.code == 'swatchColors' ? SubCategoryData.code : '', 
                      display:  CategoryData.code == 'swatchColors' ? 'inline-block' : 'none',
                      width: '17px',height: '17px',    borderRadius: '20px' , content: "", position: 'absolute',left: 0}}></span>
                      <span className="facet-text l1-category-facet-text">
                      
                       {SubCategoryData.name}&nbsp;
                        <span className="facet-value-count">({SubCategoryData.count})</span>
                        </span>
                      </span>
                    </label>
                  </div>
                </div>
            
 
            
                 )
          }
         </div>
          </div>
}
         {CategoryData.name =='Price'?
            <div className="price-calc">
          <p>Enter a price range </p>
          <div >
            <span className="range-box"> <span className="rupee"><i className="fa fa-inr"></i></span>
             <input type="text" id="startRange" name="startRange" value="" size="4"/>
             </span><strong>to</strong> 
             <span className="range-box"> <span className="rupee"><i className ="fa fa-inr"></i></span> 
             <input type="text" id="endRange" name="endRange" value="" size="4"/></span>
            <button type="submit" id="priceRangeButton">REFINE SEARCH</button>
          </div>
        </div>
              : ''}
           </Panel.Body>
  </Panel>
</PanelGroup>

             
               <hr/>

               </div>
               </Then>
               </If>

                 ):""
          }

        
            </Col>
            <Col md={9}>
                <div className="plpHeader hidden-sm hidden-xs">
                <h1>{this.props.searchText}<span>({totalProd} ITEMS)</span></h1>
                 <div className="heading-filter-sec">
                  
                  <div className="user-filter-plp">
                  <div className="view-by">
                  <label>View</label>
                  <ul className="">
                  <li className="grid-view active"></li>
                 
                  <li className="list-view"></li>
                  
                 
                  </ul>
                  </div>
                  </div>
                  <div className="clearfix"></div>
                  </div>
                  <div className="sortBy  clearfix">
                    <label>Sort by : </label>
                    <ul id="sort-by-list">
                     
                      {this.props.sortDetails ? this.props.sortDetails.map((sortDetails,index) =>
          
              
                   
                       <li key={index+ Math.random()} className={sortDetails.selected ? 'active' : '' } onClick={this.handleClick}>
                       <span id="diplayElement">{sortDetails.name}</span>
                       </li>
            
          
        ):""
          }
                      
                      
                    </ul>
                  </div>
                  <hr/>
                     <Row id="product-body" className="show-grid">
                        
                                    
                               {this.props.productData} 
                               
                     </Row>
                  
               </div>
            </Col>
         </Row>
      </Grid>
   </div>
</div>
       
);
}
}