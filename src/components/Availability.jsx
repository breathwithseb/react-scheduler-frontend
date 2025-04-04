import React, { useState } from 'react';

const tempAvailability = [
  { id: 1, time: '09:00 AM', available: true },
  { id: 2, time: '10:00 AM', available: false },
  { id: 3, time: '11:00 AM', available: true },
  { id: 4, time: '02:00 PM', available: true }
];

const Availability = ({ onSelect }) => {
  return (
    <div>
      <h2>Select an Available Slot</h2>
      <ul>
        {tempAvailability.map(slot => (
          <li
            key={slot.id}
            style={{ color: slot.available ? 'black' : 'gray', cursor: slot.available ? 'pointer' : 'not-allowed' }}
            onClick={() => slot.available && onSelect(slot)}
          >
            {slot.time} {slot.available ? '' : '(Unavailable)'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Availability;