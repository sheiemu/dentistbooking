import React, { useState } from 'react';
import Calendar from 'react-calendar';
//import { Calendar } from 'react-calendar';  

import 'react-calendar/dist/Calendar.css';
import './Services.css';

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM"
];

function Services() {
  const [selectedDate, setSelectedDate] = useState(new Date(2024, 6, 5));
  const [selectedTime, setSelectedTime] = useState("10:30 AM");

  const formattedDate = selectedDate.toLocaleDateString("en-US", {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className="booking-page">
      <h2>Book an Appointment</h2>

      <div className="appointment-form">
        <div className="form-group">
          <label>Service</label>
          <select><option>Teeth Whitening</option></select>
        </div>

        <div className="form-group">
          <label>Doctor</label>
          <select><option>Dr. Anika Rahman</option></select>
        </div>

        <div className="calendar-wrapper">
          <Calendar onChange={setSelectedDate} value={selectedDate} calendarType="gregory" />
        </div>

        <h4>Available Times on {formattedDate}</h4>
        <div className="times">
          {timeSlots.map(time => (
            <button
              key={time}
              className={`time-btn ${selectedTime === time ? 'selected' : ''}`}
              onClick={() => setSelectedTime(time)}
              disabled={time === "12:00 PM" || time === "5:30 PM"}
            >
              {time}
            </button>
          ))}
        </div>

        <div className="confirm-container">
          <button className="confirm-btn">Confirm Booking</button>
        </div>
      </div>
    </div>
  );
}

export default Services;
