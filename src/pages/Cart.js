import React from 'react';
import {Link} from 'react-router-dom'

class Cart extends React.Component {
    render () {
        return (
            <div>
                <section> 
                    <div class="tm-cart-description">
                        <h1>Booking ID: <span> 1458963233225436 </span></h1>
                    </div>
                    <img src="assets/img/ima026.jpg" alt="" class="tm-cart-picture"/>
                    <div class = "tm-cart-title">
                        <h1>Riverknife Hotel <span class="tm-cart-price">Rs 6,800 </span></h1>
                    </div>
                    <div class="tm-cart-description">
                        <h1>Chennai <br/> Olive Beach no. 3 
                        <br/> Indoor washroom | Beach View | 30 mins from Airport
                        <br/> 4.5/5 </h1>
                        <br/> from <span>12/01/2022</span>to<span>26/01/2022</span>
                    </div>
                    <div class="tm-cart-cancel">
                        <div class="form-group">
                            <a class="tm-banner-link">
                                <Link to="/pages/Okay">
                                    <li>Cancel Booking</li>  
                                </Link>
                            </a>
                        </div>
                    </div> 
                </section>
                <script type="text/javascript" src="js/jquery-1.11.2.min.js"></script>      		
                <script type="text/javascript" src="js/bootstrap.min.js"></script>					
                <script type="text/javascript" src="js/jquery.flexslider-min.js"></script>			
                <script type="text/javascript" src="js/templatemo-script.js"></script>      	
            </div>
        );
    }
}
export default Cart;
