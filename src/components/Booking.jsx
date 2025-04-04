import React, { useState } from 'react';
import Availability from './Availability'; // Import Availability component

const Booking = () => {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [confirmation, setConfirmation] = useState('');

  const handleBooking = () => {
    if (selectedSlot) {
      setConfirmation(`You have booked: ${selectedSlot.time}`);
    }
  };

  return (
    <div>
      <h2>Booking Page</h2>
      <Availability onSelect={setSelectedSlot} />
      {selectedSlot && (
        <div>
          <h3>Confirm Booking for {selectedSlot.time}?</h3>
          <button onClick={handleBooking}>Book Now</button>
        </div>
      )}
      {confirmation && <p>{confirmation}</p>}
    </div>
  );
};

export default Booking;