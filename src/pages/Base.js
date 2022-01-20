import React from 'react';

class Base extends React.Component {
    render () {
        return (
            <div>
                <section> 
                    <img src="assets/img/ima026.jpg" alt="" class="tm-base-picture"/>
                    <div class = "tm-base-title">
                        <h1>Riverknife Hotel <span class="tm-base-price">Rs 6,800 </span></h1>
                    </div>
                    <div class="tm-base-description">
                        <h1>Chennai <br/> Olive Beach no. 3 
                        <br/> Indoor washroom | Beach View | 30 mins from Airport
                        <br/> 4.5/5 </h1>
                    </div>
                    <div class="tm-base-dates">
                        <div class="form-group">
                            <input type="text" id="contact_subject" class="form-control" placeholder="Check-in Date (DD/MM/YY)" />
                        </div>
                        <div class="form-group">
                            <input type="text" id="contact_subject" class="form-control" placeholder="Check-out Date (DD/MM/YY)" />
                        </div>
                    </div>
                    <div class="tm-base-submit">
                        <div class="form-group">
                            <button class="tm-submit-btn" type="submit" name="submit">BOOK A ROOM</button> 
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
export default Base;
