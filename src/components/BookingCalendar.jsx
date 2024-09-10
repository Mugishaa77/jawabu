import React, { useState } from 'react';
import { Calendar } from 'react-calendar';
import { toast, ToastContainer } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faUserTie, faHeadphones, faLightbulb, faVideo, faBolt, faCalendarAlt, faFaceFrown, faPaperPlane, faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import 'react-toastify/dist/ReactToastify.css';
import 'react-calendar/dist/Calendar.css';

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
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Ensure today's date has no time component

        // Check if the selected date is in the past
        if (newDate < today) {
            setIsAvailable(false);
            setShowBookingForm(false);
            return;
        }

        const availability = !bookedDates.some(
            (bookedDate) => bookedDate.toDateString() === newDate.toDateString()
        );
        setDate(newDate);
        setIsAvailable(availability);
        setShowBookingForm(availability);
    };

    const handleBookingSubmit = (event) => {
        event.preventDefault();
        if (selectedService && (selectedService !== 'Event Planning' || eventType)) {
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
        <div className="booking-page">
             
           <div className="lists">
           <div className="list-of-services">
               <h3>To Hire Our Services:</h3>
                <ul className="book-a-service">
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
            <div className="list-of-events">
                <h3>For Event Planning:</h3>
                <li 
                    className={selectedService === 'Event Planning' ? 'selected' : ''}
                    onClick={() => {
                        if (selectedService === 'Event Planning') {
                            setSelectedService('');
                            setEventType(''); // Reset event type if deselecting
                        } else {
                            setSelectedService('Event Planning');
                            setEventType(''); // Reset event type when selecting event planning
                        }
                    }}
                >
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
                                  <FontAwesomeIcon icon={faPaperPlane} /> {type}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
           </div>

           <div className="bottom-part">
           <div className="calendar">
                <h3>Select Date:</h3>
               <div className="calendar-container">
               <Calendar onChange={handleDateChange} value={date} />
               </div>
                <p>Date Selected: {date.toDateString()}</p>
            </div>

            <div className="confirmation">
            <div>
                <h3>Confirmation:</h3>

                <h4>Event Details</h4>
                <p>Service:<span> {selectedService}</span></p>
                {selectedService === 'Event Planning' && <p>Event Type:<span> {eventType}</span></p>}
                <p><FontAwesomeIcon icon={faCalendarDay} /> Date:<span> {date.toDateString()}</span></p>
            </div>
            {isAvailable ? (
                <div>
                    <h4>Your Details</h4>
                    {showBookingForm && (
                        <form onSubmit={handleBookingSubmit} className="details">
                            <label>Name:</label>
                            <input type="text" required />
                            <label>Email:</label>
                            <input type="email" required />
                        </form>
                    )}
                     <button type="submit" className="book">Book Now</button>
                </div>
            ) : (
                <p className="sorry">
                    The selected date is not available for booking <FontAwesomeIcon icon={faFaceFrown} />.<br/>
<em>Choose later date instead?</em>
                </p>
            )}
           
            </div>
           </div>
           <ToastContainer />
        </div>
    );
}

export default BookingCalendar;
