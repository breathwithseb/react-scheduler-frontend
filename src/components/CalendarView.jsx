import React, { useState } from 'react';
import dayjs from 'dayjs';

const CalendarView = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());

  const handleDateChange = (event) => {
    setSelectedDate(dayjs(event.target.value));
  };

  return (
    <div>
      <h2>Select a Date</h2>
      <input
        type="date"
        value={selectedDate.format('YYYY-MM-DD')}
        onChange={handleDateChange}
      />
    </div>
  );
};

export default CalendarView;