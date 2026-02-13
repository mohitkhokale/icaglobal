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

        <div className="course-card">
          <img src="https://img.freepik.com/free-vector/accounting-concept" alt="" />
          <h3>Tally Prime with GST</h3>
          <p>Industry accounting course with GST & practical training.</p>
          <button>Enroll Now</button>
        </div>

        <div className="course-card">
          <img src="https://img.freepik.com/free-vector/excel-data" alt="" />
          <h3>Advanced Excel</h3>
          <p>Learn formulas, MIS & dashboard creation.</p>
          <button>Enroll Now</button>
        </div>

        <div className="course-card">
          <img src="https://img.freepik.com/free-vector/computer-class" alt="" />
          <h3>Basic Computer Course</h3>
          <p>MS Office, internet & basic IT training.</p>
          <button>Enroll Now</button>
        </div>

      </section>
    </div>
  );
};

export default Courses;
