import React from "react";
import "./StudentSections.css";

export default function StudentFacilities() {
  const facilities = [
    {
      id: 1,
      icon: "📚",
      title: "Library",
      desc: "Dive into our library’s wealth of books, e-books, digital resources, and serene study areas.",
    },
    {
      id: 2,
      icon: "🩺",
      title: "Medical",
      desc: "Healthcare support from our dedicated medical team, ensuring your well-being.",
    },
    {
      id: 3,
      icon: "🚌",
      title: "Transport",
      desc: "Reliable transport services connecting campus and nearby areas for daily commute.",
    },
    {
      id: 4,
      icon: "🎓",
      title: "Alumni",
      desc: "Engage in events, networking, and community programs within our alumni society.",
    },
  ];

  return (
    <section className="facilities-section">
      <div className="facilities-header">
        <h2>Student Facilities</h2>
        <p>
          Experience top-notch academic resources, healthcare, transport, and vibrant campus life.
        </p>
      </div>

      <div className="facilities-grid">
        {facilities.map((f) => (
          <div key={f.id} className="facility-card">
            <div className="facility-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
            <button className="facility-btn">View Details →</button>
          </div>
        ))}
      </div>
    </section>
  );
}
