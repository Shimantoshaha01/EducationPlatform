import React from "react";
import "./Footer.css";
import cuet_logo from "../assets/cuet_logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Academic Section */}
        <div className="footer-column">
          <h3 className="footer-heading">Academic</h3>
          <ul className="footer-links">
            <li><a href="/academic/calendars">Academic Calendars</a></li>
            <li><a href="/academic/undergraduate">Undergraduate Program</a></li>
            <li><a href="/academic/postgraduate">Postgraduate Program</a></li>
            <li><a href="/academic/international">International students</a></li>
          </ul>
        </div>

        {/* Faculties and Institutes */}
        <div className="footer-column">
          <h3 className="footer-heading">Faculties and Institutes</h3>
          <ul className="footer-links">
            <li><a href="/faculties">Faculties</a></li>
            <li><a href="/departments">Departments</a></li>
            <li><a href="/institutes">Institutes</a></li>
            <li><a href="/centers">Centers</a></li>
          </ul>
        </div>

        {/* Offices & Sections */}
        <div className="footer-column">
          <h3 className="footer-heading">Offices & Sections</h3>
          <ul className="footer-links">
            <li><a href="/offices/controller">Office Of The controller</a></li>
            <li><a href="/offices/examinations">Controller Of Examinations</a></li>
            <li><a href="/offices/engineering">Engineering Office</a></li>
            <li><a href="/offices/medical">Medical Center</a></li>
            <li><a href="/offices/transport">Transport Section</a></li>
            <li><a href="/offices/physical-education">Physical Education</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-column">
          <h3 className="footer-heading">Resources</h3>
          <ul className="footer-links">
            <li><a href="/resources/notices">Notices</a></li>
            <li><a href="/resources/downloads">Downloads</a></li>
            <li><a href="/resources/e-resources">E Resources</a></li>
            <li><a href="/resources/news-events">News & Events</a></li>
            <li><a href="/resources/directories">Directories</a></li>
          </ul>
        </div>

        {/* Admissions */}
        <div className="footer-column">
          <h3 className="footer-heading">Admissions</h3>
          <ul className="footer-links">
            <li><a href="/admissions/undergraduate">Undergraduate</a></li>
            <li><a href="/admissions/postgraduate">Postgraduate</a></li>
            <li><a href="/admissions/foreign-students">Admission of Foreign Students</a></li>
            <li><a href="/admissions/scholarship">Scholarship Financial Aids</a></li>
          </ul>
        </div>

        {/* Administration */}
        <div className="footer-column">
          <h3 className="footer-heading">Administration</h3>
          <ul className="footer-links">
            <li><a href="/administration/vice-chancellor">Vice-Chancellor's Office</a></li>
            <li><a href="/administration/pro-vice-chancellor">Pro-Vice-Chancellor's Office</a></li>
            <li><a href="/administration/registrar">Registrar Office</a></li>
            <li><a href="/administration/planning">Planning and Development</a></li>
            <li><a href="/administration/security">Security Section</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h3 className="footer-heading">Services</h3>
          <ul className="footer-links">
            <li><a href="/services/library">Library</a></li>
            <li><a href="/services/it-support">IT Support</a></li>
            <li><a href="/services/forms">Downloadable Forms</a></li>
            <li><a href="/services/notices">Notices</a></li>
          </ul>
        </div>

        {/* About */}
        <div className="footer-column">
          <h3 className="footer-heading">About</h3>
          <ul className="footer-links">
            <li><a href="/about/history">History</a></li>
            <li><a href="/about/vision-mission">Vision And Mission</a></li>
            <li><a href="/about/campus-map">Campus Map</a></li>
            <li><a href="/about/photo-gallery">Photo Gallery</a></li>
            <li><a href="/about/student-organizations">Student Organizations</a></li>
          </ul>
        </div>

        {/* Research */}
        <div className="footer-column">
          <h3 className="footer-heading">Research</h3>
          <ul className="footer-links">
            <li><a href="/research/highlights">Research Highlights</a></li>
            <li><a href="/research/area">Research Area</a></li>
            <li><a href="/research/journal">Journal Paper</a></li>
            <li><a href="/research/conference">Conference Paper</a></li>
            <li><a href="/research/others">Others</a></li>
          </ul>
        </div>

        {/* Directorates */}
        <div className="footer-column">
          <h3 className="footer-heading">Directorates</h3>
          <ul className="footer-links">
            <li><a href="/directorates/student-welfare">Directorate Of Student's Welfare</a></li>
            <li><a href="/directorates/research">Directorate Of Research And Extension</a></li>
            <li><a href="/directorates/it">IT Business Incubator</a></li>
            <li><a href="/directorates/iqac">IQAC</a></li>
            <li><a href="/directorates/bitc">BITC</a></li>
          </ul>
        </div>

        {/* APA */}
        <div className="footer-column">
          <h3 className="footer-heading">APA</h3>
          <ul className="footer-links">
            <li><a href="/apa/agreement">বার্ষিক কর্মসম্পাদন চুক্তি</a></li>
            <li><a href="/apa/monitoring">ত্রৈমাসিক মনিটরিং</a></li>
            <li><a href="/apa/self-assessment">নিজস্ব প্রতিবেদন প্রক্রিয়া</a></li>
            <li><a href="/apa/report">ফোকাল পয়েন্ট</a></li>
          </ul>
        </div>

        {/* Important Links */}
        <div className="footer-column">
          <h3 className="footer-heading">Important Links</h3>
          <ul className="footer-links">
            <li><a href="/links/administration">Administration</a></li>
            <li><a href="/links/job-portal" target="_blank" rel="noopener noreferrer">Job Portal</a></li>
            <li><a href="/links/student-portal" target="_blank" rel="noopener noreferrer">Student Portal</a></li>
            <li><a href="/links/admin-portal" target="_blank" rel="noopener noreferrer">Admin Portal</a></li>
            <li><a href="/links/alumni" target="_blank" rel="noopener noreferrer">Alumni</a></li>
            <li><a href="/links/old-website" target="_blank" rel="noopener noreferrer">Old Website</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="footer-logo-section">
            <div className="footer-logo">
              <img src={cuet_logo} alt="CUET Logo" />
            </div>
            <div className="footer-university-info">
              <h4>Chittagong University of Engineering and Technology</h4>
              <p className="footer-address">
                <i className="location-icon">📍</i>
                Pahartoli, Raozan, Chattogram - 4349, Bangladesh
              </p>
              <p className="footer-contact">
                <i className="email-icon">✉️</i>
                <a href="mailto:registrar@cuet.ac.bd">registrar@cuet.ac.bd</a>
                <i className="phone-icon">📞</i>
                <a href="tel:+880-31-714946">+880-31-714946</a>
              </p>
            </div>
          </div>

          <div className="footer-social">
            <a href="https://facebook.com/cuet" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-facebook-f">f</i>
            </a>
            <a href="https://linkedin.com/school/cuet" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-linkedin-in">in</i>
            </a>
            <a href="https://youtube.com/cuet" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-youtube">▶</i>
            </a>
          </div>
        </div>

        <div className="footer-copyright">
          <p>© 2025 Chittagong University of Engineering and Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
