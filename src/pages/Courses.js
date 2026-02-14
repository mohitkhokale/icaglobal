import React from "react";
import "../assets/css/courses.css";

const Courses = () => {
  return (
    <div className="courses-page">

      {/* HERO */}
      <section className="course-hero">
        <div className="container">
          <h1>ICA Certification Courses</h1>
          <p>Choose the right course & build your career</p>
        </div>
      </section>

      {/* COURSES */}
      <section className="course-list container">

        {/* COURSE 1 */}
        <div className="course-card">
          <img src="/tally-prime.png" alt="tally" />
          <h3>Tally Prime & Tally ERP9 with GST</h3>
          <span className="duration">13 week classes</span>

          <p>
            Start your journey of computer accounting with Tally Prime & Tally ERP9 
            with GST course. Learn the basics & become job-ready!
          </p>

          <button className="course-btn">Learn More</button>
        </div>

        {/* COURSE 2 */}
        <div className="course-card">
          <img src="/tally-advance.png" alt="advance tally" />
          <h3>Advanced Tally Prime</h3>
          <span className="duration">12 week classes</span>

          <p>
            Aim for in-depth knowledge of tally & accounting along with an internship 
            & training with ICA. Register for the advanced tally prime course now!
          </p>

          <button className="course-btn">Learn More</button>
        </div>

        {/* COURSE 3 */}
        <div className="course-card">
          <img src="/basic-computer.png" alt="basic computer" />
          <h3>Basic Computer & Internet Courses</h3>
          <span className="duration">Online Self Paced</span>

          <p>
            Upgrade your computer skills & become skilled in Information technology. 
            Enroll in our basic computer & internet courses now!
          </p>

          <button className="course-btn">Learn More</button>
        </div>

      </section>
    </div>
  );
};

export default Courses;
