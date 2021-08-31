import React from 'react';
import BookingContainer from '../../components/all-booking/booking-container/booking-container.component';


class HomePage extends React.Component {
    render() {
        return (
            <div className='homepage'>
                <BookingContainer/>
            </div>
        )
    }
};

export default HomePage;