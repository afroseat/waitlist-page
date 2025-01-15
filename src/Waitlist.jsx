import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS
import './Waitlist.css';
import avatar1 from './assets/avatar1.png';
import avatar2 from './assets/avatar2.png';
import avatar3 from './assets/avatar3.png';
import logo3 from './assets/logo3.png';

const Waitlist = () => {
  const [email, setEmail] = useState(''); // State for the user's email
  const [message, setMessage] = useState(''); // State for feedback message

  const handleChange = (e) => setEmail(e.target.value); // Update email input state

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .send(
        'service_tgujj3h', // Replace with your EmailJS Service ID
        'template_0sr6tsr', // Replace with your EmailJS Template ID
        { user_email: email }, // Pass user email as the template variable
        'A3uxDl-JFy5dyfLTR' // Replace with your EmailJS Public Key
      )
      .then(
        () => setMessage('Thank you for joining!'), // On success
        (error) => setMessage('Something went wrong. Try again!') // On error
      );
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage(''); // Clear message after 3 seconds
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div className="waitlist-page">
      <div className="logo">
        <img src={logo3} alt="AfroEat Logo" />
      </div>
      <div className="launching-soon">LAUNCHING SOON!</div>
      <div className="description">
        <h1>
          Share Your Unique Recipes and Cooking, With a <span className="highlight">Wider</span> Audience
        </h1>
      </div>
      <div className="content">
        <p>
          Expand your business and earn more. What are you waiting for?
          Join our waitlist today!
        </p>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit} className="waitlist-form">
          <input
            type="email"
            name="email"
            placeholder="name@domain.com"
            value={email}
            onChange={handleChange}
            required
          />
          <button type="submit">Join now</button>
        </form>
        <p className="message">{message}</p>

        <div className="social-proof">
          <div className="user-images">
            <img src={avatar1} alt="User 1" />
            <img src={avatar2} alt="User 2" />
            <img src={avatar3} alt="User 3" />
          </div>
          <p>163+ users have already joined</p>
        </div>
      </div>

      <footer className="footer">
        <p>&copy; 2024 - All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Waitlist;
