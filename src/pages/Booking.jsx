import Packages from "../components/Packages";
import BookingCalendar from "../components/BookingCalendar";

export default function Booking () {
    return (
        <div className="booking">
            <p>
            At Jawabu, we are commited to ensuring you get the best experience possible.
            To make a booking, follow the steps below:
            </p>
           
            <Packages />
         <BookingCalendar />
        </div>
    );
}