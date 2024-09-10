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
            // Deselect the item if it's already selected
            setSelectedService('');
            setEventType(''); // Reset event type if deselecting
        } else {
            // Select the item
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
                                    {type}
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
                                <h3>Confirmation</h3>

                                <h4>Event Details</h4>
                                <p>Service:<span> {selectedService}</span></p>
                                {selectedService === 'Event Planning' && <p>Event Type:<span> {eventType}</span></p>}
                                <p>Date:<span> {date.toDateString()}</span></p>
                            </div>
                            {isAvailable ? (
                <div >
                   <h4>Your Details</h4>
                    {showBookingForm && (
                        <form onSubmit={handleBookingSubmit}>
                    <div className="bo">
                                <label>Name:</label>
                                <input type="text" required className="form-control"/>
                                </div>

                                <div  className="bo">   
                                <label>Email:</label>
                                <input type="email" className="form-control" required  />
                                </div>  
                           
                           
                           
                        </form>
                    )}
                </div>
            ) : (
                <h3>The selected date is not available for booking.</h3>
            )}

            </div>
           </div>


         
         
<div>
                                <button type="submit">Book Now</button>
                            </div>
             {/* Toast Container */}
             <ToastContainer />
        </div>
    );
}

export default BookingCalendar;
