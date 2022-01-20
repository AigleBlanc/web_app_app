import React from 'react';
import { Link } from 'react-router-dom';

class Hotels extends React.Component {
    render() {
        return(
            <div>              
                <section class="tm-registration-section">
                    <div class="tm-banner-inner">
                        <div class="tm-banner-inner">
                            <h1 class="tm-banner-title"><span class="tm-yellow-text">50 Partner Hotels </span> in India</h1>
                                <p class="tm-banner-subtitle">Planning a stay of 7 days minimum? Save 30% reduction on your booking at any of our partner hotels. Long stays cost less with us.</p>
                                <div class="tm-banner-filter-hotels">
                                    <select class="form-control">
                                        <option value="">-- Filter By -- </option>
                                            <option value="1">All</option>
                                            <option value="1">City</option>
                                            <option value="2">Price low to high</option>
                                            <option value="3">Price high to low</option>
                                            <option value="4">Rating low to high</option>
                                            <option value="5p">Rating high to low</option>
                                    </select> 
                                </div>	
                        </div>	
                    </div> 
                </section>



	
                <section class="tm-white-bg section-padding-bottom">
                    <div class="container">
                        <div class="row">
                            <div class="tm-section-header section-margin-top">
                                <div class="col-lg-4 col-md-3 col-sm-3"><hr/></div>
                                <div class="col-lg-4 col-md-6 col-sm-6"><h2 class="tm-section-title">Login to View Your Trips</h2> 
                                    <Link to="/pages/Trips">
                                        <li>login</li>  
                                    </Link>
                                <div class="col-lg-4 col-md-3 col-sm-3"><hr/></div>
                                </div>
                            </div>
                        </div>		
                    </div>
                </section>
                <footer class="tm-black-bg">
                    <div class="container">
                        <div class="row">
                            <p class="tm-copyright-text"> Designed by Shivani & Apo:)</p>
                        </div>
                    </div>		
                </footer>
                <script type="text/javascript" src="js/jquery-1.11.2.min.js"></script>      		
                <script type="text/javascript" src="js/moment.js"></script>							
                <script type="text/javascript" src="js/bootstrap.min.js"></script>					
                <script type="text/javascript" src="js/bootstrap-datetimepicker.min.js"></script>	
                <script type="text/javascript" src="js/jquery.flexslider-min.js"></script>

            </div>
        );
    }
}
export default Hotels;