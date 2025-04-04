import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Availability from './components/Availability';
import Booking from './components/Booking';
import AppointmentManager from './components/AppointmentManager';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Acuity Clone - Scheduling App</h1>
        <nav>
          <Link to="/">Availability</Link> | 
          <Link to="/booking">Book Now</Link> | 
          <Link to="/appointments">Manage Appointments</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Availability onSelect={(slot) => console.log('Selected:', slot)} />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/appointments" element={<AppointmentManager />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;