import React from 'react';



class BookingForm extends React.Component {
    render() {
        return (
            <div className='booking-form'>
                <div className="tabulation"> { /*  animate-box */ }
                    <ul className="nav nav-tabs" role="tablist">
                        <li role="presentation" className="active">
                            <a href="#flights" aria-controls="flights" role="tab" data-toggle="tab">City-Taxi</a>
                        </li>
                        <li role="presentation">
                            <a href="#hotels" aria-controls="hotels" role="tab" data-toggle="tab">Outstation</a>
                        </li>
                        <li role="presentation">
                            <a href="#packages" aria-controls="packages" role="tab" data-toggle="tab">Rentals</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div role="tabpanel" className="tab-pane active" id="flights">
                            <div className="row">
                                <div className="col-sm-12 mt">
                                    <div className="input-field">
                                        <label htmlFor="from">Pickup:</label>
                                        <input type="text" className="form-control" id="from-place" placeholder="Vijay Nagar, Indore" />
                                    </div>
                                </div>
                                <div className="col-sm-12 mt">
                                    <div className="input-field">
                                        <label htmlFor="from">Destination:</label>
                                        <input type="text" className="form-control" id="to-place" placeholder="C21, A.B Road, Indore" />
                                    </div>
                                </div>
                                <div className="col-xxs-12 col-xs-6 mt alternate">
                                    <div className="input-field">
                                        <label htmlFor="date-start">Book-Time:</label>
                                        <input type="text" className="form-control" id="date-start" placeholder="mm/dd/yyyy" />
                                    </div>
                                </div>

                                <div className="col-xs-12">
                                    <input type="submit" className="btn btn-primary btn-block" value="Search Rides" />
                                </div>
                            </div>
                        </div>

                        <div role="tabpanel" className="tab-pane" id="hotels">
                            <div className="row">
                                <div className="col-xxs-12 col-xs-12 mt">
                                    <div className="input-field">
                                        <label htmlFor="from">Pickup location:</label>
                                        <input type="text" className="form-control" id="from-place" placeholder="Indore, Madhya Pradesh" />
                                    </div>
                                </div>
                                <div className="col-xxs-12 col-xs-12 mt">
                                    <div className="input-field">
                                        <label htmlFor="from">Drop location:</label>
                                        <input type="text" className="form-control" id="from-place" placeholder="Bhopal, Madhya Pradesh" />
                                    </div>
                                </div>
                                <div className="col-xxs-12 col-xs-6 mt alternate">
                                    <div className="input-field">
                                        <label htmlFor="date-end">Book Now or Later:</label>
                                        <input type="text" className="form-control" id="date-end" placeholder="mm/dd/yyyy" />
                                    </div>
                                </div>
                                <div className="col-xs-12">
                                    <input type="submit" className="btn btn-primary btn-block" value="Book Ride" />
                                </div>
                            </div>
                        </div>

                        <div role="tabpanel" className="tab-pane" id="packages">
                            <div className="row">
                                <div className="col-xxs-12 col-xs-6 mt">
                                    <div className="input-field">
                                        <label htmlFor="from">City:</label>
                                        <input type="text" className="form-control" id="from-place" placeholder="Los Angeles, USA" />
                                    </div>
                                </div>
                                <div className="col-xxs-12 col-xs-6 mt">
                                    <div className="input-field">
                                        <label htmlFor="from">Destination:</label>
                                        <input type="text" className="form-control" id="to-place" placeholder="Tokyo, Japan" />
                                    </div>
                                </div>
                                <div className="col-xxs-12 col-xs-6 mt alternate">
                                    <div className="input-field">
                                        <label htmlFor="date-start">Departs:</label>
                                        <input type="text" className="form-control" id="date-start" placeholder="mm/dd/yyyy" />
                                    </div>
                                </div>
                                <div className="col-xxs-12 col-xs-6 mt alternate">
                                    <div className="input-field">
                                        <label htmlFor="date-end">Return:</label>
                                        <input type="text" className="form-control" id="date-end" placeholder="mm/dd/yyyy" />
                                    </div>
                                </div>
                                <div className="col-sm-12 mt">
                                    <section>
                                        <label htmlFor="className">Ride-Type:</label>
                                        <select className="cs-select cs-skin-border">
                                            <option value="" disabled defaultValue>Choose ride type...</option>
                                            <option value="economy">Mini car</option>
                                            <option value="first">Sedan</option>
                                            <option value="business">Travellor</option>
                                            <option value="business">Jeep</option>
                                        </select>
                                    </section>
                                </div>
                                <div className="col-xs-12">
                                    <input type="submit" className="btn btn-primary btn-block" value="Book Ride plan" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default BookingForm;