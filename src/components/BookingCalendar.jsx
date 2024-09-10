import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faUserTie, faHeadphones, faLightbulb, faVideo, faCalendarAlt, faBolt } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function BookingCalendar() {
    const [date, setDate] = useState(new Date());
    const [isAvailable, setIsAvailable] = useState(false);
    const [showBookingForm, setShowBookingForm] = useState(false);
    const [selectedService, setSelectedService] = useState('');
    const [eventType, setEventType] = useState('');

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
        { icon: faBolt, name: 'Backup Generator' }
    ];

    const eventTypes = [
        'Birthday Packages',
        'Corporate Events',
        'School Events',
        'Wedding (Traditional)',
        'Wedding (Church)'
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
        if (selectedService && (selectedService !== 'Event Planning' || eventType)) {
            // Trigger the success toast notification
            toast.success('Booking confirmed!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            
            // Handle booking submission (e.g., send data to server)
        } else {
            toast.error('Please complete the form by selecting a service and event type if required.');
        }
    };
    

    return (
        <div>
            <h2>Booking Calendar</h2>
            <div>
                <h3>Select Service:</h3>
                <ul className="services-list">
                    {services.map(service => (
                        <li 
                            key={service.name} 
                            className={selectedService === service.name ? 'selected' : ''}
                            onClick={() => {
                                setSelectedService(service.name);
                                setEventType(''); // Reset event type if a non-event planning service is selected
                            }}>
                            <FontAwesomeIcon icon={service.icon} /> <span>{service.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>Event Planning:</h3>
                <li 
                    className={selectedService === 'Event Planning' ? 'selected' : ''}
                    onClick={() => {
                        setSelectedService('Event Planning');
                        setEventType(''); // Reset event type when selecting event planning
                    }}>
                    <FontAwesomeIcon icon={faCalendarAlt} /> <span>Event Planning</span>
                </li>
                {selectedService === 'Event Planning' && (
                    <div>
                        <h4>Select Event Type:</h4>
                        <ul className="event-types-list">
                            {eventTypes.map(type => (
                                <li 
                                    key={type}
                                    className={eventType === type ? 'selected' : ''}
                                    onClick={() => setEventType(type)}
                                >
                                    {type}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            <div>
                <h3>Select Date:</h3>
                <Calendar onChange={handleDateChange} value={date} />
            </div>
            {isAvailable ? (
                <div>
                    <h3>Selected Date: {date.toDateString()}</h3>
                    {showBookingForm && (
                        <form onSubmit={handleBookingSubmit}>
                            <div>
                                <label>Name:</label>
                                <input type="text" required />
                            </div>
                            <div>
                                <label>Email:</label>
                                <input type="email" required />
                            </div>
                            <div>
                                <h4>Summary:</h4>
                                <p>Service: {selectedService}</p>
                                {selectedService === 'Event Planning' && <p>Event Type: {eventType}</p>}
                                <p>Date: {date.toDateString()}</p>
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

             {/* Toast Container */}
             <ToastContainer />
        </div>
    );
}

export default BookingCalendar;
