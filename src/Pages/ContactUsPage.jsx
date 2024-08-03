import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { submitContactForm } from '../Redux/Reducers/contactSlice';

function ContactUsPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
      contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const formControls = document.querySelectorAll('.form-control');
        formControls.forEach(control => control.classList.remove('is-invalid'));

        let valid = true;

        if (name.trim() === '') {
          document.getElementById('name').classList.add('is-invalid');
          valid = false;
        }

        if (email.trim() === '' || !validateEmail(email)) {
          document.getElementById('email').classList.add('is-invalid');
          valid = false;
        }

        if (message.trim() === '') {
          document.getElementById('message').classList.add('is-invalid');
          valid = false;
        }

        if (valid) {
          dispatch(submitContactForm({ name, email, message }));
          alert('Form submitted successfully!');

          // Clear input fields after submission
          setName('');
          setEmail('');
          setMessage('');
        }
      });

      function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
      }
    }
  }, [name, email, message, dispatch]);

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6">
            <h2>Contact Information</h2>
            <address>
              <p><strong>Our Address:</strong></p>
              <p>1234 E-commerce St,<br />Bangalore, IN 560001</p>
              <p><strong>Phone:</strong> +91 123 456 7890</p>
              <p><strong>Email:</strong> support@example.com</p>
            </address>
          </div>
          <div className="col-lg-6">
            <h2>Contact Form</h2>
            <form id="contactForm">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                />
                <div className="invalid-feedback">
                  Please enter your name.
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
                <div className="invalid-feedback">
                  Please enter a valid email address.
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="4"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  required
                ></textarea>
                <div className="invalid-feedback">
                  Please enter your message.
                </div>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUsPage;
