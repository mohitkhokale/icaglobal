import React, { useState } from "react";
import "../assets/css/contact.css";

const Contact = () => {

  const [form, setForm] = useState({
    name:"",
    email:"",
    phone:"",
    message:""
  });

  const handleChange = (e)=>{
    setForm({...form, [e.target.name]:e.target.value});
  };

const handleSubmit = async (e)=>{
  e.preventDefault();

  try{
    await fetch("https://script.google.com/macros/s/AKfycbx44iseSe8GNJfR78KOf8yNMrYva13RYExqRUxkd2GOYSjzMATqVB-FtzhEPpXRBNnB/exec",{
      method:"POST",
      mode:"no-cors",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(form)
    });

    alert("Enquiry Submitted");
  }catch(err){
    alert("Error sending form");
    console.log(err);
  }
};

  return (
    <div className="contact-page">

      <section className="contact-hero">
        <div className="container">
          <h1>Contact ICA Global</h1>
          <p>Get in touch for admission & course details</p>
        </div>
      </section>

      <section className="contact-container container">

        <div className="contact-info">
          <h3>Institute Address</h3>
          <p>ICA Global Institute, Ujjain</p>
          <p>Phone: +91 8819873122</p>
          <p>Email: info@icaglobal.in</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required />
          <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" required />
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message"></textarea>
          <button type="submit">Send Message</button>
        </form>

      </section>
    </div>
  );
};

export default Contact;
