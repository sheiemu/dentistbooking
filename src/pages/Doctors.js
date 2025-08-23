/*import React, { useState } from 'react';
import './DoctorsPage.css';

const doctors = [
  { id: 1, name: 'Dr. Anika Rahman', email: 'anika@clinic.com', photo: 'https://via.placeholder.com/50' },
  { id: 2, name: 'Dr. Tuhin Ali', email: 'tuhin@clinic.com', photo: 'https://via.placeholder.com/50' },
  { id: 3, name: 'Dr. Zoya Hossain', email: 'zoya@clinic.com', photo: 'https://via.placeholder.com/50' },
  { id: 4, name: 'Dr. Imran Khan', email: 'im

  */


  /*


  // src/pages/DoctorsPage.js
import React, { useState } from 'react';
import './Doctors.css';

const doctors = [
  { id: 1, name: 'Dr. Anika Rahman', email: 'anika@clinic.com', photo: 'https://via.placeholder.com/60' },
  { id: 2, name: 'Dr. Tuhin Ali', email: 'tuhin@clinic.com', photo: 'https://via.placeholder.com/60' },
  { id: 3, name: 'Dr. Zoya Hossain', email: 'zoya@clinic.com', photo: 'https://via.placeholder.com/60' },
  { id: 4, name: 'Dr. Imran Khan', email: 'imran@clinic.com', photo: 'https://via.placeholder.com/60' },
  { id: 5, name: 'Dr. Nila Khatun', email: 'nila@clinic.com', photo: 'https://via.placeholder.com/60' },
  { id: 6, name: 'Dr. Farhan Rahim', email: 'farhan@clinic.com', photo: 'https://via.placeholder.com/60' },
  { id: 7, name: 'Dr. Mehnaz Jahan', email: 'mehnaz@clinic.com', photo: 'https://via.placeholder.com/60' },
  { id: 8, name: 'Dr. Tanjim Noor', email: 'tanjim@clinic.com', photo: 'https://via.placeholder.com/60' },
];

const PAGE_SIZE = 4;

function Doctors() {
  const [page, setPage] = useState(1);
  const start = (page - 1) * PAGE_SIZE;
  const currentDoctors = doctors.slice(start, start + PAGE_SIZE);
  const totalPages = Math.ceil(doctors.length / PAGE_SIZE);

  return (
    <div>
      <h2>Our Doctors</h2>
      <div className="doctor-list">
        {currentDoctors.map(doc => (
          <div className="doctor-card" key={doc.id}>
            <img src={doc.photo} alt={doc.name} />
            <div>
              <h4>{doc.name}</h4>
              <p>{doc.email}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button key={i} onClick={() => setPage(i + 1)} className={page === i + 1 ? 'active' : ''}>
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Doctors;


*/



import React, { useState } from 'react';
import './Doctors.css';


console.log("✅ Doctors component loaded");


const doctors = [
  { id: 1, name: 'Dr. Anika Rahman', email: 'anika@clinic.com', photo: 'https://via.placeholder.com/60' },
  { id: 2, name: 'Dr. Tuhin Ali', email: 'tuhin@clinic.com', photo: 'https://via.placeholder.com/60' },
  { id: 3, name: 'Dr. Zoya Hossain', email: 'zoya@clinic.com', photo: 'https://via.placeholder.com/60' },
  { id: 4, name: 'Dr. Imran Khan', email: 'imran@clinic.com', photo: 'https://via.placeholder.com/60' },
  { id: 5, name: 'Dr. Nila Khatun', email: 'nila@clinic.com', photo: 'https://via.placeholder.com/60' },
  { id: 6, name: 'Dr. Farhan Rahim', email: 'farhan@clinic.com', photo: 'https://via.placeholder.com/60' },
  { id: 7, name: 'Dr. Mehnaz Jahan', email: 'mehnaz@clinic.com', photo: 'https://via.placeholder.com/60' },
  { id: 8, name: 'Dr. Tanjim Noor', email: 'tanjim@clinic.com', photo: 'https://via.placeholder.com/60' },
];

const PAGE_SIZE = 4;

function Doctors() {
  const [page, setPage] = useState(1);
  const start = (page - 1) * PAGE_SIZE;
  const currentDoctors = doctors.slice(start, start + PAGE_SIZE);
  const totalPages = Math.ceil(doctors.length / PAGE_SIZE);

  return (
    <div>
      <h2>Our Doctors</h2>
      <div className="doctor-list">
        {currentDoctors.map((doc) => (
          <div className="doctor-card" key={doc.id}>
            <img src={doc.photo} alt={doc.name} />
            <div>
              <h4>{doc.name}</h4>
              <p>{doc.email}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={page === i + 1 ? 'active' : ''}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

// ✅ This is the part you MUST HAVE
export default Doctors;
