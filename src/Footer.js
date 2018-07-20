import React, { Component } from 'react';
import './Footer.css';
// import {  Panel, Row, Col, Grid} from 'react-bootstrap';
// import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";
export default class Footer extends Component {
   constructor(props) {
          super(props);
          this.state = {
            intervalId: 0
         };
}
scrollStep() {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }
scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  }

   
render(){
 

return(
  
 
                 
                  <div className="main-footer clearfix" id="footer">
   <div className="add-new">
      <p>
         start something new
      </p>
   </div>
   <div className="ssl-services clearfix hidden-sm hidden-md hidden-lg">
      <ul>
         <li><img src="https://sslimages1.shoppersstop.com/sys-master/images/h36/hf6/10773740290078/authentic.png" className="lazyload" alt="Authentic Products" /> <span>Authentic Products</span></li>
         <li><img src="https://sslimages3.shoppersstop.com/sys-master/images/h34/hf9/10773740355614/free-delivery.png" className="lazyload" alt="Free Delivery" /> <span>Free Delivery*</span></li>
         <li><img src="https://sslimages3.shoppersstop.com/sys-master/images/h9c/hfc/10773740453918/exchange-return.png" className="lazyload" alt="Exchange Return" /> <span>Easy Exchange and Return</span></li>
         <li><img src="https://sslimages2.shoppersstop.com/sys-master/images/h9a/hff/10773740519454/express-store-pickup.png" className="lazyload" alt="Express Store Pickup" /> <span>Express Store Pickup</span></li>
      </ul>
   </div>
   <div className="payment-subscribe">
      <div className="footer-light-graysection">
         <div className="container container-responsive">
            <div className="row">
               <div className="col-md-4 col-sm-3 col-xs-12 download-app-on">
                  <strong>DOWNLOAD THE APP ON</strong>
                  <ul>
                     <li>
                        <a href="https://itunes.apple.com/in/app/shoppers-stop/id1047171444?mt=8" >
                        <img  className=" lazyloaded" alt="App Store Icon" src="https://sslimages2.shoppersstop.com/sys-master/images/ha4/hff/10773740584990/app-store-icon.png" />
                        </a>
                     </li>
                     <li>
                        <a href="https://play.google.com/store/apps/details?id=shoppersstop.shoppersstop&amp;hl=en">
                        <img  className=" lazyloaded" alt="Google Play Icon" src="https://sslimages2.shoppersstop.com/sys-master/images/hfd/hfc/10773740617758/google-play-icon.png" />
                        </a>
                     </li>
                  </ul>
               </div>
               <div className="col-md-6 col-sm-6 col-xs-12 newsletter_main">
                  <div className="newsletter_main-inner">
                     <strong>Sign up for the Shoppers Stop newsletter</strong>
                     <div className="newsletter-section">
                        <div className="newsletter-section-inner">
                           <form id="newsletterSubmitForm" className="newsletter_form" >
                              <input className="form-control-newsletter" type="text" placeholder="Email Address" id="newsletterEmail" name="email" />
                              <input type="submit" id="newLetterButton" className="sbt-button" value="SUBSCRIBE"/>
                              <div className="news-block"></div>
                              <div></div>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
               <div className=" col-md-2 col-sm-3  col-xs-12 follow-us">
                  <strong> Follow Us</strong>
                  <ul>
                     <li className="facebook-icon"><a href="https://www.facebook.com/shoppersstopindia" ></a></li>
                     <li className="twitter-icon"><a href="https://twitter.com/shoppersstop" ></a></li>
                     <li className="pinterest-icon"><a href="https://in.pinterest.com/shoppersstopin/" ></a></li>
                     <li className="google-plus-icon"><a href="https://plus.google.com/explore/shoppersstop" ></a></li>
                     <li className="instagram-icon"><a href="https://instagram.com/shoppers_stop/" ></a></li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
      <div className="cp-footer">
         <div className="container container-responsive checkout-container">
            <div className="cp-subfoot">
               <div className="content col-lg-4 col-md-4 col-sm-12 desk hidden-xs">
                  <div className="ssl-services">
                     <ul>
                        <li><img  className=" lazyloaded" alt="Authentic Products" src="https://sslimages3.shoppersstop.com/sys-master/images/h36/hf6/10773740290078/authentic.png" /> <span>Authentic Products</span></li>
                        <li><img className=" lazyloaded" alt="Free Delivery" src="https://sslimages5.shoppersstop.com/sys-master/images/h34/hf9/10773740355614/free-delivery.png"/> <span>Free Delivery*</span></li>
                        <li><img  className=" lazyloaded" alt="Exchange Return" src="https://sslimages2.shoppersstop.com/sys-master/images/h9c/hfc/10773740453918/exchange-return.png"/> <span>Easy Exchange and Return</span></li>
                        <li><img  className=" lazyloaded" alt="Express Store Pickup" src="https://sslimages4.shoppersstop.com/sys-master/images/h9a/hff/10773740519454/express-store-pickup.png"/> <span>Express Store Pickup</span></li>
                     </ul>
                  </div>
               </div>
               <div className="content col-lg-3 col-md-3 col-sm-12">
                  <div className="questions-call">
                     <h5>questions?</h5>
                     <div>
                        <div className="call"><span><a href="tel: 1-800-4196648">#1-800-4196648</a></span> (toll free) |</div>
                        <br/><a href="mailto:customercare@shoppersstop.com">customercare@shoppersstop.com</a>
                     </div>
                  </div>
               </div>
               <div className="verified-secure col-lg-5 col-md-5 col-sm-12">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                     <div className="verfied">
                        <h5>VERIFIED BY</h5>
                        <ul>
                           <li>
                              <a >
                                 <picture>
                                    <img title=""  className=" lazyloaded" alt="" src="https://sslimages4.shoppersstop.com/sys-master/root/h17/hf3/11085094715422/entrust_ssl_Logo.png" />
                                    
                                 </picture>
                              </a>
                           </li>
                           <li>
                              <a>
                                 <picture>
                                    <img title="Master Card Secure Code"  className=" lazyloaded" alt="Master Card Secure Code" src="https://sslimages2.shoppersstop.com/sys-master/images/hfa/hff/10773740552222/mcsl.png" />
                                   
                                 </picture>
                              </a>
                           </li>
                           <li>
                              <a >
                                 <picture>
                                    <img title="verified by Visa"  className=" lazyloaded" alt="verified by Visa" src="https://sslimages5.shoppersstop.com/sys-master/images/h8b/hf9/10773740388382/verified-by-visa.png" />
                                    
                                 </picture>
                              </a>
                           </li>
                           <li>
                              <a >
                                 <picture>
                                    <img title="Verified by PCI DSS"  className=" lazyloaded" alt="Verified by PCI DSS" src="https://sslimages1.shoppersstop.com/sys-master/images/hf3/hfc/10773740486686/pci-dss.png" />
                                    
                                 </picture>
                              </a>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                     <div className="pay-secure">
                        <h5>PAY SECURELY BY</h5>
                        <ul>
                           <li>
                              <picture>
                                 <img title="Visa Card" className=" lazyloaded"  alt="Visa Card" src="https://sslimages4.shoppersstop.com/sys-master/images/h56/h89/9894739771422/visa-card.png"/>
                                
                              </picture>
                           </li>
                           <li>
                              <picture>
                                 <img title="Master card" className=" lazyloaded"  alt="Master card" src="https://sslimages1.shoppersstop.com/sys-master/images/h94/h88/9894739705886/master-card.png"/>
                                 
                              </picture>
                           </li>
                           <li>
                              <picture>
                                 <img title="American express" className=" lazyloaded"  alt="American express" src="https://sslimages1.shoppersstop.com/sys-master/images/h96/h85/9894739640350/american-express.png"/>
                                 
                              </picture>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div className="foot-links">
   <div className="container container-responsive">
      <div className="row">
         <div className="col-md-12 col-lg-12 padzero">
            <div className="foot-link-wrap">
               <ul>
                  <li>
                     <div>
                        <h4>Customer</h4>
                        <ul>
                           <li className="yCmsComponent">
                              <a href="/faq" title="Help/FAQs">Help/FAQs</a>
                           </li>
                           <li className="yCmsComponent">
                              <a href="/trackorders" title="Track Order">Track Order</a>
                           </li>
                           <li className="yCmsComponent">
                              <a href="/sizeguide" title="Size Guide">Size Guide</a>
                           </li>
                           <li className="yCmsComponent">
                              <a href="/buying-guide" title="Buying Guide">Buying Guide</a>
                           </li>
                           <li className="yCmsComponent">
                              <a href="/purchase" title="How do i shop?">How do i shop?</a>
                           </li>
                           <li className="yCmsComponent">
                              <a href="/how-do-i-pay" title="How do i pay?">How do i pay?</a>
                           </li>
                           <li className="yCmsComponent">
                              <a href="/findplaces" title="Find places we deliver">Find places we deliver</a>
                           </li>
                           <li className="yCmsComponent">
                              <a href="http://stylehub.shoppersstop.com/" title="Style Hub" >Style Hub</a>
                           </li>
                        </ul>
                     </div>
                  </li>
                  <li>
                     <div>
                        <h4>Policies</h4>
                        <ul>
                           <li className="yCmsComponent">
                              <a href="/term-condition" title="Terms of use">Terms of use</a>
                           </li>
                           <li className="yCmsComponent">
                              <a href="/privacy" title="Privacy">Privacy</a>
                           </li>
                           <li className="yCmsComponent">
                              <a href="/delivery" title="Delivery Policy">Delivery Policy</a>
                           </li>
                           <li className="yCmsComponent">
                              <a href="/returns" title="Exchanges &amp; Returns">Exchanges &amp; Returns</a>
                           </li>
                        </ul>
                     </div>
                  </li>
                  <li>
                     <div>
                        <h4>Store and sites</h4>
                        <ul>
                           <li className="yCmsComponent">
                              <a href="/aboutus" title="About us">About us</a>
                           </li>
                           <li className="yCmsComponent">
                              <a href="/contact-us" title="Contact Us">Contact Us</a>
                           </li>
                           <li className="yCmsComponent">
                              <a href="http://corporate.shoppersstop.com/" title="Corporate Site" >Corporate Site</a>
                           </li>
                           <li className="yCmsComponent">
                              <a href="/store-finder" title="Store locator">Store locator</a>
                           </li>
                        </ul>
                     </div>
                  </li>
                  <li>
                     <div>
                        <h4>Delightful Programs</h4>
                        <ul>
                           <li className="yCmsComponent">
                              <a href="/instantGifting" title="Instant Gifting">Instant Gifting</a>
                           </li>
                           <li className="yCmsComponent">
                              <a href="/express-store-pickup" title="EXPRESS STORE PICK UP">EXPRESS STORE PICK UP</a>
                           </li>
                        </ul>
                     </div>
                  </li>
                  <li>
                     <div>
                        <h4>First Citizen</h4>
                        <ul>
                           <li className="yCmsComponent">
                              <a href="/first-citizen/non-member" >FIRST CITIZEN</a>
                           </li>
                           <li className="yCmsComponent">
                              <a href="https://corporate.shoppersstop.com/Brand/Firstcitizen/first-citizen.aspx" >TERMS &amp; CONDITIONS</a>
                           </li>
                        </ul>
                     </div>
                  </li>
                  <li>
                     <div>
                        <h4>Reach Us</h4>
                        <ul>
                           <li className="yCmsComponent">
                              <a href="email" >For any query please email us</a>
                           </li>
                           <li className="yCmsComponent">
                              <a href="mailto:customercare@shoppersstop.com" title="customercare@shoppersstop.com">customercare@shoppersstop.com</a>
                           </li>
                        </ul>
                     </div>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   </div>
</div>
<div className="copyrights">
   <div className="container container-responsive">
      <div className="row">
         <div className="col-md-12 col-lg-12 col-mobile">
            <p>© 2008 - 2018 SHOPPERS STOP LTD. ALL RIGHTS RESERVED.</p>
            <ul>
               <li><a href="/term-condition" target="_blank">Terms of Use</a></li>
               <li><a href="/privacy" target="_blank">Cookie &amp; Privacy Policy</a></li>
            </ul>
         </div>
      </div>
   </div>
</div><div className="overlay" style={{display: 'block'}}></div>
<div className="footerBttm-background clearfix">
<div className="container footerBttm clearfix">
<div className="linkContent comp-PTSfont-only comp-a-only linkContent70px">
</div></div>
</div>
   <div className="back-to-top" style={{display: 'block'}} onClick={ () => { this.scrollToTop(); }}>
</div>
</div>
                    
                 
               
);
}
}