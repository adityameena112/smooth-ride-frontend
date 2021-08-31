import React from 'react';
import BookingForm from './../../components/all-booking/booking-form/booking-form.component';


class BookingPage extends React.Component {
    render() {
        return (
            <div className='booking-page'>
                <BookingForm />
            </div>
        )
    }
};

export default BookingPage;