/*import React, { useState } from 'react';
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
          <select><option>Teeth Whitening</option>
          <option>Teeth Cleaning (Scaling & Polishing)</option>
          <option>Routine Check-ups & Oral Exams</option>
          <option>Cavity Filling</option>
          <option>Tooth Extraction</option></select>
        </div>

        <div className="form-group">
          <label>Doctor</label>
          <select><option>Dr. Anika Rahman</option>
          <option>Dr. Zoya Hossain</option>
          <option>Dr. Imran Khan</option>
          <option>Dr. Nila Khatun</option>
          <option>Dr. Mehnaz Jahan</option>
          <option>Dr. Tanjim Noor</option></select>
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


*/



import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Services.css';

// 👇 Each doctor has their own time slots
const doctorTimeSlots = {
  "Dr. Anika Rahman": [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM"
  ],
  "Dr. Zoya Hossain": [
    "11:00 AM", "11:30 AM", "12:30 PM", "1:00 PM"
  ],
  "Dr. Imran Khan": [
    "10:00 AM","2:00 PM", "2:30 PM", "3:00 PM"
  ],
  "Dr. Nila Khatun": [
    "12:00 PM","3:30 PM", "4:00 PM", "4:30 PM"
  ],
  "Dr. Mehnaz Jahan": [
    "10:00 AM", "12:00 PM", "2:00 PM"
  ],
  "Dr. Tanjim Noor": [
    "9:00 AM", "1:30 PM", "5:00 PM"
  ]
};

function Services() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("Dr. Anika Rahman");

  const formattedDate = selectedDate.toLocaleDateString("en-US", {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  const availableTimes = doctorTimeSlots[selectedDoctor] || [];

  return (
    <div className="booking-page">
      <h2>Book an Appointment</h2>

      <div className="appointment-form">
        <div className="form-group">
          <label>Service</label>
          <select>
            <option>Teeth Whitening</option>
            <option>Teeth Cleaning (Scaling & Polishing)</option>
            <option>Routine Check-ups & Oral Exams</option>
            <option>Cavity Filling</option>
            <option>Tooth Extraction</option>
          </select>
        </div>

        <div className="form-group">
          <label>Doctor</label>
          <select value={selectedDoctor} onChange={(e) => setSelectedDoctor(e.target.value)}>
            {Object.keys(doctorTimeSlots).map((doctor) => (
              <option key={doctor}>{doctor}</option>
            ))}
          </select>
        </div>

        <div className="calendar-wrapper">
          <Calendar onChange={setSelectedDate} value={selectedDate} calendarType="gregory" />
        </div>

        <h4>Available Times on {formattedDate} with {selectedDoctor}</h4>
        <div className="times">
          {availableTimes.length === 0 ? (
            <p>No available times for this doctor.</p>
          ) : (
            availableTimes.map(time => (
              <button
                key={time}
                className={`time-btn ${selectedTime === time ? 'selected' : ''}`}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </button>
            ))
          )}
        </div>

        <div className="confirm-container">
          <button className="confirm-btn">Confirm Booking</button>
        </div>
      </div>
    </div>
  );
}

export default Services;
