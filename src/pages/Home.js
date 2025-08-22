/*

import React from 'react';

function Home() {
  return (
    <div>
      <h2>Welcome to Smile Studio</h2>
      <p>We care about your smile! 😊</p>
    </div>
  );
}

export default Home;

*/




// src/pages/Home.js
import clinicImage from '../assets/dentalcare.jpg';

import React from 'react';

const Home = () => {
  return (
    <div style={{ maxWidth: '1100px', margin: 'auto' }}>
      <h1>Welcome to Smile Bright Dental Clinic</h1>
      <p  style={{ fontSize: "20px", fontWeight: "bold" }}>
        Your smile is our priority! We provide expert dental care in a friendly and comfortable environment. We are here, responsibility is ours.
      </p>
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>
        Navigate through the sidebar to book your appointment, learn about our services, meet our doctors, and get in touch.
      </p>
      <img
        /*src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
        alt="Dental care"
        style={{ width: '100%', borderRadius: '10px', marginTop: '20px' }}
        */


        
  src={clinicImage}
  alt="Clinic"
  style={{ width: '100%', borderRadius: '10px', marginTop: '20' }}
/>

    
    </div>
  );
};

export default Home;
