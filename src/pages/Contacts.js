import React, { useRef, useState } from 'react';
import "../styles/Contact.css";
import Address from "../assets/address.png";
import Phone from "../assets/phone.png";
import Email from "../assets/email.png";
import emailjs from '@emailjs/browser';

const Contacts = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_727btib',
        'template_h6w52fm',
        formRef.current,
        'XynfvdTz9XW9V_5jt'
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          setError(null);
        },
        (error) => {
          console.log(error.text);
          setError('Failed to send message. Please try again later.');
          setDone(false)
        }
      );
    document.getElementById('myForm').reset();
  };

  return (
    <div className="contacts">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="Phone icon" className="c-icon" />
              +254721418479
            </div>
            <div className="c-info-item">
              <img src={Email} alt="Email icon" className="c-icon" />
              anythingtechke@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="Address icon" className="c-icon" />
              Kanu Street, Cigma Plaza, Nakuru
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What's your story?</b> Get in touch. Always available for
            freelancing if the right project comes along.
          </p>
          <form ref={formRef} onSubmit={handleSubmit} id="myForm">
            <input
              type="text"
              placeholder="Name"
              name="user_name"
              required
              className={error ? 'error-input' : ''}
            />
            <input
              type="text"
              placeholder="Subject"
              name="user_subject"
              required
              className={error ? 'error-input' : ''}
            />
            <input
              type="email"
              placeholder="Your Email"
              name="user_email"
              required
              className={error ? 'error-input' : ''}
            />
            <textarea
              rows="5"
              placeholder="Message"
              name="message"
              required
              className={error ? 'error-input' : ''}
            />
            <button type="submit">Submit</button>
            {done && <p className="success-message">Thank you...</p>}
            {error && <p className="error-message">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;