import React from 'react'

class Trips extends React.Component {
    render() {
        return(
            <div>
                <section class="tm-registration-section">
                    <div class="tm-banner-inner">
                        <div class="tm-banner-inner">
                            <h1 class="tm-banner-title"><span class="tm-yellow-text">Thank You For Choosing US</span></h1>
                            <p class="tm-banner-subtitle">Login to view your Trips</p>
                            <a href="#more" class="tm-banner-link">Login</a>	
                        </div>	
                    </div> 
                </section>
        
                <section class="container tm-home-section-1" id="more">
                    <div class="row">
                        <div class="tm-login-section-box">
                            <ul class="slides">
                                <li>
                                    <div class="tm-contact-image">
							
                                    </div>
                                    <div class="tm-login-container">
                                        <div class="row">
                                            <div class="tm-login-text">
                                                <h2>Login to your account</h2>
                                                <div>
                                                    <form action="/logged/" class="tm-login-form" method="post">
                                                        <div>
                                                            <input type="text" name="username" autofocus placeholder="Username"/>
                                                            <input type="password" name="password" placeholder="Password"/>
                                                            <button type="submit" class="tm-btn-primary">Login</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <button class="tm-submit-btn">
                                                <a href="register.html">Don't have an account? Register Now!</a>
                                            </button> 
                                        </div>
                                    </div>		      
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>		
                

                <section class="section-padding-bottom">
                    <div class="container">
                        <div class="row">
                            <div class="tm-section-header section-margin-top">
                                <div class="col-lg-4 col-md-3 col-sm-3"><hr/></div>
                                <div class="col-lg-4 col-md-6 col-sm-6"><h2 class="tm-section-title">Contact Us</h2></div>
                                <div class="col-lg-4 col-md-3 col-sm-3"><hr/></div>	
                            </div>				
                        </div>
                        <div class="row">
                            <form action="#" method="post" class="tm-contact-form">
                                <div class="col-lg-6 col-md-6">
                                    <img src="assets/img/ima014.jpg" alt="" class="img-responsive"/>
                                </div>
                                <div class="col-lg-6 col-md-6 tm-contact-form-input">
                                    <div class="form-group">
                                        <input type="text" id="contact_name" class="form-control" placeholder="NAME" />
                                    </div>
                                    <div class="form-group">
                                        <input type="email" id="contact_email" class="form-control" placeholder="EMAIL" />
                                    </div>
                                    <div class="form-group">
                                        <input type="text" id="contact_subject" class="form-control" placeholder="SUBJECT" />
                                    </div>
                                    <div class="form-group">
                                        <textarea id="contact_message" class="form-control" rows="6" placeholder="MESSAGE"></textarea>
                                    </div>
                                    <div class="form-group">
                                        <button class="tm-submit-btn" type="submit" name="submit">Submit now</button> 
                                    </div>               
                                </div>
                            </form>
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
                <script type="text/javascript" src="js/bootstrap.min.js"></script>				
                <script type="text/javascript" src="js/jquery.flexslider-min.js"></script>			
                <script type="text/javascript" src="js/templatemo-script.js"></script>      		
            </div>
        );
    }
}
export default Trips;