import React from 'react';
import './booking-container.styles.scss'
import BookingForm from './../booking-form/booking-form.component';


export default class BookingContainer extends React.Component {

    render() {
        return (
            <div className='bookingcontainer'>
                <div className="fh5co-hero">
                    <div className="fh5co-overlay"></div>
                    <div className="fh5co-cover" data-stellar-background-ratio="0.5">
                        <div className="desc">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-5 col-md-5">
                                        <BookingForm></BookingForm>
                                    </div>
                                    {/* <div className="desc2 animate-box"> */}
                                        <div className="col-sm-7 col-sm-push-1 col-md-7 col-md-push-1">
                                            <p>Book a City Taxi to your destination in town</p>
                                            <h2>Smooth Ride, Safety Ride, The Fastest ride...</h2>
                                            <h3>Choose from a range of categories and prices</h3>
                                            <span className="price">30% off</span>
                                            <p><a href="/#" className="btn btn-primary btn-lg" >Get Started</a></p>
                                        {/* </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                </div>
            </div>
        );
    }
    
}