import React from "react";
import StatsGrid from "./StatesGrid";
import "./AboutAtGlance.css";

export default function AboutAtGlance({ stats = [] }) {
  return (
    <section className="about-section">
      <div className="about-inner container">
        <div className="about-left">
          <div className="about-image-wrap">
            <img
              src="/mnt/data/148fa096-f0e7-4f7c-bd75-0279fb3db284.png"
              alt="CUET Entrance"
              className="about-image"
            />
          </div>
        </div>

        <div className="about-right">
          <div className="eyebrow">About Our University</div>
          <h2 className="about-title">CUET — At a Glance</h2>

          <p className="about-text">
            Chittagong University of Engineering & Technology (CUET) is one of the leading Public
            University of Bangladesh. It is situated alongside the Chittagong Capital road 25km away
            from the city of Chittagong. The University is taking shape in about 171 acres land of
            magnificent natural settings comprising pristine hills and plane lands. CUET has been
            playing a pioneering role for higher education, research and development in engineering
            and applied sciences since its inception. Its graduates are among the leaders in their
            respective fields.
          </p>

          <button
            className="btn-primary find-more"
            onClick={() => {
              // replace with your router/navigation when integrating
              window.location.href = "/about";
            }}
          >
            Find out more →
          </button>
        </div>
      </div>

      {/* Stats grid below */}
      <div className="about-stats container">
        <StatsGrid stats={stats} />
      </div>
    </section>
  );
}
