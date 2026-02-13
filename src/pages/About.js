import React from "react";
import "../assets/css/about.css";

const About = () => {
  return (
    <div className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <div className="container">
          <h1>About ICA Global</h1>
          <p>Institute Of Computer & Accounting</p>
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="about-content container">
        <div className="about-grid">

          <div className="about-text">
            <h2>Who We Are</h2>
            <p>
              ICA Global is committed to bridging the gap between students and
              job opportunities by providing quality computer and accounting
              education. Our institute focuses on practical learning,
              professional development, and real job readiness.
            </p>

            <p>
              From basic computer courses to advanced accounting like Tally
              Prime with GST, our programs are designed to make students
              industry-ready.
            </p>

            <h3>Our Mission</h3>
            <p>
              To empower students with real-world skills and provide placement
              support through professional training and guidance.
            </p>

            <h3>Why Choose ICA?</h3>
            <ul>
              <li>Industry recognized certifications</li>
              <li>100% practical training</li>
              <li>Placement assistance</li>
              <li>Experienced trainers</li>
              <li>Friendly learning environment</li>
            </ul>
          </div>

          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="students"
            />
          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="about-stats">
        <div className="container stats-grid">
          <div className="stat-box">
            <h2>10+</h2>
            <p>Years Experience</p>
          </div>

          <div className="stat-box">
            <h2>2000+</h2>
            <p>Students Trained</p>
          </div>

          <div className="stat-box">
            <h2>100%</h2>
            <p>Placement Support</p>
          </div>

          <div className="stat-box">
            <h2>15+</h2>
            <p>Courses</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
