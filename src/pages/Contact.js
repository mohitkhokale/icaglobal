import React from "react";
import "../assets/css/contact.css";

const Contact = () => {
  return (
    <div className="contact-page">

      <section className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch for admission & course details</p>
        </div>
      </section>

      <section className="contact-container container">

        <div className="contact-info">
          <h3>Institute Address</h3>
          <p>Ujjain, Madhya Pradesh</p>
          <p>Phone: +91 9999999999</p>
          <p>Email: info@icaglobal.in</p>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name"/>
          <input type="email" placeholder="Email"/>
          <input type="text" placeholder="Phone"/>
          <textarea placeholder="Message"></textarea>
          <button>Send Message</button>
        </form>

      </section>

    </div>
  );
};

export default Contact;
