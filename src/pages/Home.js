import React from "react";
import { motion } from "framer-motion";
import { FaUserGraduate, FaChalkboardTeacher, FaBriefcase } from "react-icons/fa";
import "../assets/css/home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>


      {/* HERO SECTION */}
      <section className="hero">
        <div className="container hero-flex">

          <motion.div
            className="hero-left"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Build Skills That Get You Hired</h1>
            <p className="hero-sub">
              Modern computer & accounting institute with practical training,
              certification and placement support.
            </p>

            <div className="hero-buttons">
              <Link to="/contact" className="btn-main">Join Now</Link>
              <Link to="/courses" className="btn-outline">View Courses</Link>

            </div>

            <div className="hero-stats">
              <div>
                <h3>5000+</h3>
                <span>Students</span>
              </div>
              <div>
                <h3>100%</h3>
                <span>Placement Support</span>
              </div>
              <div>
                <h3>10+</h3>
                <span>Courses</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="hero-right"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src="/header.png" className="hero-img" alt="hero" />
          </motion.div>



        </div>
      </section>


      {/* WHY CHOOSE US */}
      <section className="why">
        <div className="container">
          <h2 className="section-title">Why Students Choose Us</h2>

          <div className="why-grid">

            <div className="why-card">
              <FaUserGraduate className="icon" />
              <h3>Practical Training</h3>
              <p>Hands-on real project training for job readiness.</p>
            </div>

            <div className="why-card">
              <FaChalkboardTeacher className="icon" />
              <h3>Expert Trainers</h3>
              <p>Learn from industry experienced trainers.</p>
            </div>

            <div className="why-card">
              <FaBriefcase className="icon" />
              <h3>Placement Support</h3>
              <p>We help students get their first job.</p>
            </div>

          </div>
        </div>
      </section>


      {/* POPULAR COURSES */}
      <section className="courses">
        <div className="container">
          <h2 className="section-title">Popular Courses</h2>

          <div className="course-grid">

            <div className="course-card">
              <h3>Tally Prime + GST</h3>
              <p>Complete accounting with real-time training.</p>
              <button>View Details</button>
            </div>

            <div className="course-card">
              <h3>Advanced Excel</h3>
              <p>Master Excel for job & business growth.</p>
              <button>View Details</button>
            </div>

            <div className="course-card">
              <h3>Basic Computer</h3>
              <p>Start your digital journey from basics.</p>
              <button>View Details</button>
            </div>

          </div>
        </div>
      </section>


      {/* PLACEMENTS */}
      <section className="placements">
        <div className="container">
          <h2 className="section-title">Our Students Working At</h2>

          <div className="company-logos">
            <span>TCS</span>
            <span>Wipro</span>
            <span>HDFC</span>
            <span>ICICI</span>
            <span>Local CA Firms</span>
          </div>
        </div>
      </section>


      {/* TESTIMONIALS */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">What Our Students Say</h2>

          <div className="testimonial-grid">

            <div className="testimonial-card">
              <p>
                Best institute for tally and accounting. Trainers are very supportive
                and placement support is excellent.
              </p>
              <h4>— Rahul Sharma</h4>
            </div>

            <div className="testimonial-card">
              <p>
                I got job within 2 months after completing course. Practical training
                helped me a lot.
              </p>
              <h4>— Sneha Patel</h4>
            </div>

            <div className="testimonial-card">
              <p>
                Highly recommended for computer courses. Friendly environment and
                professional teachers.
              </p>
              <h4>— Aman Verma</h4>
            </div>

          </div>
        </div>
      </section>


      {/* FINAL CTA */}
      <section className="cta">
        <div className="container">
          <h2>Start Your Career Journey Today</h2>
          <p>Admissions open. Limited seats available.</p>
          <a href="/contact" className="btn-main">Apply Now</a>
        </div>
      </section>

    </div>
  );
};

export default Home;
