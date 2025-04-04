import React, { useState } from 'react';

const tempAppointments = [
  { id: 1, time: '09:00 AM', date: '2025-04-06' },
  { id: 2, time: '11:00 AM', date: '2025-04-06' },
];

const AppointmentManager = () => {
  const [appointments, setAppointments] = useState(tempAppointments);
  const [rescheduling, setRescheduling] = useState(null);

  const cancelAppointment = (id) => {
    setAppointments(appointments.filter((appt) => appt.id !== id));
  };

  const rescheduleAppointment = (id, newDate, newTime) => {
    setAppointments(appointments.map((appt) =>
      appt.id === id ? { ...appt, date: newDate, time: newTime } : appt
    ));
    setRescheduling(null);
  };

  return (
    <div>
      <h2>Your Appointments</h2>
      <ul>
        {appointments.map((appt) => (
          <li key={appt.id}>
            {appt.date} at {appt.time}
            <button onClick={() => cancelAppointment(appt.id)}>Cancel</button>
            <button onClick={() => setRescheduling(appt)}>Reschedule</button>
          </li>
        ))}
      </ul>

      {rescheduling && (
        <RescheduleForm 
          appt={rescheduling} 
          onReschedule={rescheduleAppointment} 
        />
      )}
    </div>
  );
};

const RescheduleForm = ({ appt, onReschedule }) => {
  const [newDate, setNewDate] = useState('');
  const [newTime, setNewTime] = useState('');

  return (
    <div>
      <h3>Reschedule Appointment</h3>
      <input 
        type="date" 
        value={newDate} 
        onChange={(e) => setNewDate(e.target.value)} 
      />
      <input 
        type="time" 
        value={newTime} 
        onChange={(e) => setNewTime(e.target.value)} 
      />
      <button onClick={() => onReschedule(appt.id, newDate, newTime)}>
        Confirm Reschedule
      </button>
    </div>
  );
};

export default AppointmentManager;