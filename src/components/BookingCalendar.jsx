import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faUserTie, faHeadphones, faLightbulb, faVideo, faCalendarAlt, faBolt } from '@fortawesome/free-solid-svg-icons';

function BookingCalendar() {
    const [date, setDate] = useState(new Date());
    const [isAvailable, setIsAvailable] = useState(false);
    const [showBookingForm, setShowBookingForm] = useState(false);
    const [selectedService, setSelectedService] = useState('');

    const bookedDates = [
        new Date(2024, 8, 15), // Example booked dates (months are 0-indexed)
        new Date(2024, 8, 22),
    ];

    const services = [
        { icon: faMicrophone, name: 'PA' },
        { icon: faUserTie, name: 'MC' },
        { icon: faHeadphones, name: 'DJ' },
        { icon: faLightbulb, name: 'Stage Lighting' },
        { icon: faVideo, name: 'Live Streaming' },
        { icon: faCalendarAlt, name: 'Event Planning' },
        { icon: faBolt, name: 'Backup Generator' }
    ];

    const handleDateChange = (newDate) => {
        setDate(newDate);
        const availability = !bookedDates.some(
            (bookedDate) => bookedDate.toDateString() === newDate.toDateString()
        );
        setIsAvailable(availability);
        setShowBookingForm(availability);
    };

    const handleBookingSubmit = (event) => {
        event.preventDefault();
        if (selectedService) {
            alert(`Booking confirmed for ${date.toDateString()} with service: ${selectedService}`);
            // Handle booking submission (e.g., send data to server)
        } else {
            alert('Please select a service.');
        }
    };

    return (
        <div>
            <h2>Booking Calendar</h2>
            <Calendar onChange={handleDateChange} value={date} />
            {isAvailable ? (
                <div>
                    <h3>Selected Date: {date.toDateString()}</h3>
                    {showBookingForm && (
                        <form onSubmit={handleBookingSubmit}>
                            <div>
                                <label>Select Service:</label>
                                <ul className="services-list">
                                    {services.map(service => (
                                        <li key={service.name} onClick={() => setSelectedService(service.name)}>
                                            <FontAwesomeIcon icon={service.icon} /> <span>{service.name}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <label>Name:</label>
                                <input type="text" required />
                            </div>
                            <div>
                                <label>Email:</label>
                                <input type="email" required />
                            </div>
                            <div>
                                <button type="submit">Book Now</button>
                            </div>
                        </form>
                    )}
                </div>
            ) : (
                <h3>The selected date is not available for booking.</h3>
            )}
        </div>
    );
}

export default BookingCalendar;
