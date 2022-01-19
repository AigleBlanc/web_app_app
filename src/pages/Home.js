import React from 'react';

class Home extends React.Component{
    render() {
        return (
            <div>
            <section class="tm-index-banner-section">
                <div class="tm-banner-inner">
                    <h1 class="tm-banner-title"> Find <span class="tm-yellow-text">Your Next </span> Home</h1>
                        <p class="tm-banner-subtitle">Get Instant 30% reduction on Regular prices on 7+ days stays</p>
                    <a href="#more" class="tm-banner-link">Load Hotels</a>	
                </div> 
            </section>

            <section class="container tm-home-section-1" id="more">
                <div class="row">
                    <div class="col-lg-4 col-md-4 col-sm-6">

                        <div class="tm-home-box-1">
                            <ul class="nav nav-tabs tm-white-bg" role="tablist" id="hotelCarTabs">
                                <li role="presentation" class="active">
                                    <a href="#hotel" aria-controls="hotel" role="tab" data-toggle="tab">View per City</a>
                                </li>
                            </ul>

                            <div class="tab-content">
                                <div role="tabpanel" class="tab-pane fade in active tm-white-bg" id="hotel">
                                    <div class="tm-search-box effect2">
                                        <form action="#" method="post" class="hotel-search-form">
                                            <div class="tm-form-inner">
                                                <div class="form-group">
                                                    <select class="form-control">
                                                        <option value="">-- Select city -- </option>
                                                        <option value="hotel 1">Agra</option>
                                                        <option value="hotel 1">Bangalore</option>
                                                        <option value="hotel 2">Chennai</option>
                                                        <option value="hotel 3">Cochin</option>
                                                        <option value="hotel 4">Madurai</option>
                                                        <option value="hotel 1">Mumbai</option>
                                                        <option value="hotel 1">Mysore</option>
                                                        <option value="hotel 1">Patna</option>
                                                        <option value="hotel 1">Pune</option>
                                                        <option value="hotel 1">Udaipur</option>
                                                    </select> 
                                                </div>
                                                <div class="form-group">
                                                    <div class='input-group date' id='datetimepicker1'>
                                                        <input type='text' class="form-control" placeholder="Check-in Date" />
                                                        <span class="input-group-addon">
                                                            <span class="fa fa-calendar"></span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <div class='input-group date' id='datetimepicker2'>
                                                        <input type='text' class="form-control" placeholder="Check-out Date" />
                                                        <span class="input-group-addon">
                                                            <span class="fa fa-calendar"></span>
                                                        </span>
                                                    </div>
                                                </div>								
                                            <div class="form-group margin-bottom-0">
                                                    <select class="form-control">
                                                        <option value="">-- Number of Rooms -- </option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5p">5+</option>
                                                    </select> 
                                                </div>
                                            </div>							
                                            <div class="form-group tm-yellow-gradient-bg text-center">
                                                <button type="submit" name="submit" class="tm-yellow-btn">Check Now</button>
                                            </div>  
                                        </form>
                                    </div>
                                </div>				    
                            </div>
                        </div>								
                    </div>

                    <div class="tm-website-type">
                        <h1 class="tm-website-type-title">Booking a Hotel on EssoTravels:</h1>
                        <p class="tm-website-type-description">Planning a stay of 7 days minimum? 
                        <br/> Save 30% reduction on your booking at any of our partner hotels. Long stays cost less with us.</p>
                    </div>
                </div>
            
                <div class="section-margin-top">
                    <div class="row">				
                        <div class="tm-section-header">
                            <div class="col-lg-3 col-md-3 col-sm-3"><hr/></div>
                            <div class="col-lg-6 col-md-6 col-sm-6"><h2 class="tm-section-title">Most Visited Hotels This Month</h2></div>
                            <div class="col-lg-3 col-md-3 col-sm-3"><hr/></div>	
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6 col-xxs-12">
                            <div class="tm-home-box-2">						
                                <img src="assets/img/ima009.jpg" alt="" class="img-responsive"/>
                                <h3>Hotel 1, in Chennai</h3>
                                <p class="tm-date">Rs 1500 per Night</p>
                                <div class="tm-home-box-2-container">
                                    <a href="#" class="tm-home-box-2-link"><i class="fa fa-heart tm-home-box-2-icon border-right"></i></a>
                                    <a href="#" class="tm-home-box-2-link"><span class="tm-home-box-2-description">Visit</span></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6 col-xxs-12">
                            <div class="tm-home-box-2">						
                                <img src="assets/img/ima037.jpg"  alt="" class="img-responsive"/>
                                <h3>Hotel 2, in Jaipur</h3>
                                <p class="tm-date">Rs 2600 per Night</p>
                                <div class="tm-home-box-2-container">
                                    <a href="#" class="tm-home-box-2-link"><i class="fa fa-heart tm-home-box-2-icon border-right"></i></a>
                                    <a href="#" class="tm-home-box-2-link"><span class="tm-home-box-2-description">Visit</span></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6 col-xxs-12">
                            <div class="tm-home-box-2">						
                                <img src="assets/img/ima001.jpg" alt=""  class="img-responsive"/>
                                <h3>Hotel 3, in Noida</h3>
                                <p class="tm-date">Rs 2600 per Night</p>
                                <div class="tm-home-box-2-container">
                                    <a href="#" class="tm-home-box-2-link"><i class="fa fa-heart tm-home-box-2-icon border-right"></i></a>
                                    <a href="#" class="tm-home-box-2-link"><span class="tm-home-box-2-description">Visit</span></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6 col-xxs-12">
                            <div class="tm-home-box-2 tm-home-box-2-right">						
                                <img src="assets/img/ima030.jpg"  alt="" class="img-responsive"/>
                                <h3>Hotel 4, in Tiruchirappalli</h3>
                                <p class="tm-date">Rs 2700 per Night</p>
                                <div class="tm-home-box-2-container">
                                    <a href="#" class="tm-home-box-2-link"><i class="fa fa-heart tm-home-box-2-icon border-right"></i></a>
                                    <a href="#" class="tm-home-box-2-link"><span class="tm-home-box-2-description">Visit</span></a>
                                </div>
                            </div>
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
                                <a href="about.html" class="tm-login-redirect-link">Login</a></div>
                            <div class="col-lg-4 col-md-3 col-sm-3"><hr/></div>
                        </div>
                    </div>		
                </div>
            </section>
            <footer class="tm-black-bg">
                <div class="container"/>
                    <div class="row">
                        <p class="tm-copyright-text"> Designed by Shivani & Apo:)</p>
                </div>		
            </footer>        
        </div>
    );
}
}
export default Home;