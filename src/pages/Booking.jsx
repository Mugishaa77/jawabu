import Packages from "../components/Packages";
import BookingCalendar from "../components/BookingCalendar";

export default function Booking () {
    return (
        <div className="booking">
            <p>
            Thankyou for considering Jawabu to make your day a success. To book a service, please follow the steps below:
            </p>
           
            <Packages />
         <BookingCalendar />
        </div>
    );
}