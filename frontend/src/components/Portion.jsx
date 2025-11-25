import React from 'react'
import '../pages/Home.css'
import QuickLinks from './QuickLinks'

function Portion() {
  return (
    <div className='home-page'>
      <div className="hero-container">
        <img
          src="https://tds-images.thedailystar.net/sites/default/files/styles/very_big_1/public/media/api_images/2024/08/08/cuet%20ban%20student%20teacher%20politics.jpg"
          alt="CUET Campus"
          className="hero-image"
        />

        <div className="hero-text">
          <h1>Chittagong University of Engineering & Technology</h1>
        </div>
      </div>

      <QuickLinks />

      {/* Admission section (your earlier code) */}
      <section className="admission-section">
        <div className="admission-left">
          <h1>Admission</h1>
          <p>
            Chittagong University of Engineering and Technology (CUET) offers undergraduate programs in Engineering, Urban and Regional Planning (BURP), and Architecture (B. Arch). These programs are designed to train highly skilled professionals capable of contributing to the nation's technological advancement and infrastructural development. At present, no admission test is scheduled for these programs. All official announcements regarding admission notices, eligibility criteria, application procedures, and test schedules will be published exclusively through CUET's official website and other authorized channels. Prospective applicants are strongly advised to regularly visit the CUET website to stay informed about the latest updates, notifications, and official instructions regarding undergraduate admissions.
          </p>

          <div className="admission-buttons">
            <button className="btn-undergrad">Apply Undergraduate</button>
            <button className="btn-postgrad">Apply Postgraduate</button>
          </div>
        </div>

        <div className="admission-right">
          <div className="admission-card">
            <img src="/u1.jpg" alt="Undergraduate" />
            <span>Undergraduate →</span>
          </div>

          <div className="admission-card">
            <img src="/p1.jpg" alt="Postgraduate" />
            <span>Postgraduate →</span>
          </div>

          <div className="admission-card">
            <img src="/research1.jpg" alt="Research" />
            <span>Research →</span>
          </div>

          <div className="admission-card">
            <img src="/alumni1.jpg" alt="Alumni" />
            <span>Alumni ↗</span>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Portion
