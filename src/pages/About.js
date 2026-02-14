import React from "react";
import "../assets/css/about.css";

const About = () => {
  return (
    <div className="about-page">

      <section className="about-sections">

        {/* ABOUT ICA */}
        <div className="about-row container">
          <div className="about-col text">
            <h2>About ICA</h2>
            <p>
              ICA is a group of professionals with vast experience in quality
              teaching of over 5 years. At ICA, we share a common dream — to bring
              the best Computer & Internet courses, Accounting & Tally courses like
              Tally Prime, Tally ERP9 with GST & Advanced Tally courses to students
              and professionals alike.
            </p>
            <p>
              We bridge the gap between jobs & people and provide training and
              teaching opportunities to everyone who enrolls with us. Our focus is
              to empower students with practical knowledge and career-oriented skills.
            </p>
          </div>

          <div className="about-col image">
            <img src="/about-1.png" alt="about" />
          </div>
        </div>

        {/* WHAT WE DO */}
        <div className="about-row container">
          <div className="about-col image">
            <img src="/about-2.png" alt="about" />
          </div>

          <div className="about-col text">
            <h2> Who Are We?</h2>
            <p>
              We started ICA with the intent to bring the best Computer & Internet courses (basic), Accounting & Tally courses like Tally Prime/Tally ERP9 with GST & Advanced Tally Prime courses to students & professionals alike. In the last 5 years, we have had over 1000+ students who are scaling new heights in their life.
            </p>
          </div>
        </div>
        {/* WHAT WE DO */}
        <div className="about-row container reverse ">
          <div className="about-col image">
            <img src="/about-3.png" alt="about" />
          </div>

          <div className="about-col text">
            <h2>What Do We Do?</h2>
            <p>
              We bridge the gap between jobs & people by teaching basic Computer & Internet courses & Tally courses like Tally Prime & Tally GST. We also ensure to provide training & teaching opportunities to everyone who enrolls with us. This ensures the overall development of students that further helps them in their professional careers.
            </p>
          </div>
        </div>

        {/* VISION */}
        <div className="about-row container reverse ">
          <div className="about-col text">
            <h2>Our Vision</h2>
            <p>
              We envision creating a global institute that will cater to every Indian’s dreams of stepping into Computer, Accounting & Tally courses. </p> <p>We aim to be the best in the league in India in the next 5 years! And to fulfill this vision, we are spreading our wings to nurture as many students as possible. Join us & be a part of our vision!



            </p>
          </div>

          <div className="about-col image">
            <img src="/about-5.png" alt="vision" />
          </div>
        </div>

        {/* MISSION */}
        <div className="about-row container reverse">
          <div className="about-col image">
            <img src="/about-4.png" alt="mission" />
          </div>

          <div className="about-col text">
            <h2>Our Mission</h2>
            <p>
              We believe in Educating, Empowering & giving real-world Experience to anyone who walks through our doors. Our goal is to put honest efforts to ensure that no one is left behind.</p>
            <p> We live by our mission to deliver value-based education, empower everyone & prepare them for a wonderful experience. Get ready to become an integral part of our mission because you matter.
            </p>
          </div>
        </div>

        {/* INSPIRATION */}
        <div className="about-row container reverse">
          <div className="about-col text">
            <h2>Our Inspiration</h2>
            <p>
              The ever-growing demand for accounting and tally professionals has
              inspired us to deliver quality training to students and working
              professionals.
            </p>
            <p>
              We aim to inspire and be inspired by students who want to achieve
              excellence in their careers. Join us in this journey of education
              and success.
            </p>
          </div>

          <div className="about-col image">
            <img src="/about-6.png" alt="inspiration" />
          </div>
        </div>

        {/* PROMISES */}
        <div className="about-row container reverse">
          <div className="about-col image">
            <img src="/about-5.png" alt="promise" />
          </div>

          <div className="about-col text">
            <h2>Our Promises</h2>
            <p>
              ICA promises to be with you from the beginning of your journey
              until you achieve professional success.
            </p>
            <ul>
              <li>Quality Teaching</li>
              <li>Practical Learning</li>
              <li>Best Student Experience</li>
              <li>Placement Support</li>
            </ul>
            <p>
              We believe in quality over quantity and strive to deliver the best
              education experience for every student.
            </p>
          </div>
        </div>
        {/* ADMINISTRATION */}
        <section className="admin-section">
          <div className="container admin-box">

            <h2 className="admin-title">Our Administration</h2>

            <div className="admin-card">
              <img src="/about-7.png" alt="Deepesh Khokale" />

              <div>
                <h3>Deepesh Khokale</h3>
                <span>Founder & CEO — ICA Global Institute</span>

                <p>
                  Deepesh Khokale is the Founder and CEO of ICA Global Institute,
                  Ujjain. With strong experience in computer education and accounting
                  training, he has been dedicated to empowering students with practical
                  skills and career-focused learning.
                </p>

                <p>
                  His vision is to bridge the gap between education and employment by
                  providing high-quality computer, accounting and Tally training along
                  with placement support. Under his leadership, ICA Global has trained
                  hundreds of students and helped them build successful professional
                  careers.
                </p>

                <p>
                  He believes in practical education, real-world experience and
                  continuous learning. His mission is to make ICA Global one of the
                  leading training institutes in India, helping students become skilled,
                  confident and job-ready.
                </p>
              </div>
            </div>

          </div>
        </section>

      </section >
    </div >
  );
};

export default About;
