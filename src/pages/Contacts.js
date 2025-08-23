// src/pages/ContactPage.js
import React from 'react';

const Contacts = () => {
  return (
    <div>
      <h2>Contact Us</h2>
      <p>Email: smilestudio@gmail.com</p>
      <p>Phone: +880 123-456-7890</p>
      <p>Address: 123 Dental Street, Dhaka, Bangladesh</p>

      <form style={{ marginTop: '20px' }}>
        <label>Your Name</label><br />
        <input type="text" placeholder="John Doe" /><br /><br />

        <label>Your Message</label><br />
        <textarea placeholder="Write your message here..." rows="4"></textarea><br /><br />

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contacts;
