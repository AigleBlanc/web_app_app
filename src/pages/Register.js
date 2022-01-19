import React from 'react';

class Register extends React.Component {
    render () {
        return (
            <div>
                <section class="tm-index-banner-section"> 
                    <div class="tm-registration-container">
                        <div class="row">
                            <div class="col-sm">
                            <form action="/register/" class="form" method="post">
                                    <input type="text" name="username" id="username" placeholder="Username" autofocus required /> <span id="user-msg" class="alert alert-danger"></span><br /><br />
                                    <input type="password" name="password" id="password" placeholder="Password" required /> <span id="password-msg" class="alert alert-danger"></span><br /><br />
                                    <input type="password" name="confirm" id="confirm" placeholder="Confirm Password" required/> <span id="confirm-msg" class="alert alert-danger"></span><br /><br />
                                    <input type="text" name="fname" id="fname" placeholder="First Name" required/> <span id="fname-msg" class="alert alert-danger"></span><br /><br />
                                    <input type="text" name="lname" id="lname" placeholder="Last Name" required/> <span id="lname-msg" class="alert alert-danger"></span><br /><br />
                                    <input type="email" name="email" id="email" placeholder="Email" required/> <span id="email-msg" class="alert alert-danger"></span><br /><br /><br />
                                    <button type="reset" class="btn btn-secondary">Clear</button>
                                    <button type="submit" id="submit" class="btn btn-primary">Register</button>
                                </form>
                            </div>
                        </div>
                    </div>     
                </section>
                <footer class="tm-black-bg">
                    <div class="container">
                        <div class="row">
                            <p class="tm-copyright-text"> Designed by Sivani & Apo:)</p>
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
export default Register;
