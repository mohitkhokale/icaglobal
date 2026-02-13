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

            {/* <div className="hero-stats">
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
            </div> */}
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
              <h3>Courses Certificates</h3>
              <p>Industry preferred certificate which helps in Career boost.</p>
            </div>

            <div className="why-card">
              <FaChalkboardTeacher className="icon" />
              <h3>Practical Classes</h3>
              <p>Give clear explanations of what is expected of students.</p>
            </div>

            <div className="why-card">
              <FaBriefcase className="icon" />
              <h3>Verifiable digital certificate</h3>
              <p>Verify certificate in few clicks.</p>
            </div>

          </div>
        </div>
      </section>

      {/* WHY LEARN WITH US */}
      <section className="why">
        <div className="container">

          <h2 className="section-title">Why Learn With Us?</h2>

          <div className="why-grid">

            <div className="why-card">
              <div className="why-icon">💡</div>
              <h3>Get Skilled</h3>
              <p>
                At ICA, you don’t just learn, you get skilled too. Learn from exceptional teaching staff,
                get exclusive tips from experts & implement them in your training. Everything under one roof!
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">👥</div>
              <h3>Learning Environment</h3>
              <p>
                ICA believes in providing a positive, friendly & learning-based environment.
                Our courses value you & encourage you to bring your best to the table.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">💼</div>
              <h3>Placement Support</h3>
              <p>
                We stand by our students during the course but we also support them during placement.
                ICA offers 100% guaranteed placement support to all the students.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">💻</div>
              <h3>Practical Approach</h3>
              <p>
                We believe in imparting real-life experiences to students by allowing them to master
                the courses by using them in real-life situations.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">📊</div>
              <h3>Experience</h3>
              <p>
                Get ready for an unparalleled experience that will allow you to intern with us &
                join our team on a long-term basis.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">⭐</div>
              <h3>Committed To Providing</h3>
              <p>
                We are committed to bridge the gap between jobs & people by offering quality & experienced
                teaching services. From basic computer & internet courses to accounting courses like Tally & Tally Prime.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* POPULAR COURSES */}
      {/* COURSES */}
      <section className="courses">
        <div className="container">

          <h2 className="section-title">Our Course Offerings</h2>
          <p className="section-sub">
            We offer a variety of courses & there is something for everyone
          </p>

          <div className="course-grid">

            {/* COURSE 1 */}
            <div className="course-card">
              <img src="/tally-prime.png" alt="course" />
              <h3>Tally Prime & Tally ERP9 <br/> with GST</h3>
              <span className="duration">13 week classes</span>
              <p>
                Start your journey of computer accounting with Tally Prime & Tally ERP9 with GST course.
                Learn the basics & become job-ready!
              </p>
              <button>View Details</button>
            </div>

            {/* COURSE 2 */}
            <div className="course-card">
              <img src="/tally-advance.png" alt="course" />
              <h3>Advanced Tally <br/> Prime</h3>
              <span className="duration">12 week classes</span>
              <p>
                Aim for in-depth knowledge of tally & accounting along with an internship & training with ICA.
                Register for the advanced tally prime course now!
              </p>
              <button>View Details</button>
            </div>

            {/* COURSE 3 */}
            <div className="course-card">
              <img src="/basic-computer.png" alt="course" />
              <h3>Basic Computer & Internet Courses</h3>
              <span className="duration">Online Self Paced</span>
              <p>
                Upgrade your computer skills & become skilled in Information technology.
                Enroll in our basic computer & internet courses now!
              </p> <br/>
              <button>View Details</button>
            </div>

          </div>
        </div>
      </section>



      {/* PLACEMENTS */}
      {/* <section className="placements">
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
      </section> */}


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
