import React, { useEffect, useState } from "react";
import "./StudentOrganizationsSlider.css";

export default function StudentOrganizationsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const orgs = [
    { id: 1, name: "CUET Photographic Society", img: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=400&h=300&fit=crop", link: "/organization/1" },
    { id: 2, name: "ASRRO", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop", link: "/organization/2" },
    { id: 3, name: "CUETJA", img: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=400&h=300&fit=crop", link: "/organization/3" },
    { id: 4, name: "Joyoddhoney", img: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=300&fit=crop", link: "/organization/4" },
    { id: 5, name: "DebSoc", img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=300&fit=crop", link: "/organization/5" },
    { id: 6, name: "Robotics Club", img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop", link: "/organization/6" },
    { id: 7, name: "Drama Club", img: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=400&h=300&fit=crop", link: "/organization/7" },
    { id: 8, name: "Music Circle", img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop", link: "/organization/8" },
    { id: 9, name: "Eco Club", img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=300&fit=crop", link: "/organization/9" },
    { id: 10, name: "IEEE Student Branch", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop", link: "/organization/10" },
    { id: 11, name: "AI Club", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop", link: "/organization/11" },
    { id: 12, name: "Sports Club", img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop", link: "/organization/12" },
    { id: 13, name: "Literature Circle", img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop", link: "/organization/13" },
    { id: 14, name: "Programming Club", img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&h=300&fit=crop", link: "/organization/14" },
    { id: 15, name: "Volunteer Group", img: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop", link: "/organization/15" },
    { id: 16, name: "Design Club", img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop", link: "/organization/16" },
  ];

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % orgs.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [orgs.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + orgs.length) % orgs.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % orgs.length);
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % orgs.length;
      cards.push(orgs[index]);
    }
    return cards;
  };

  return (
    <div className="student-org-section">
      <div className="org-header">
        <div className="org-header-left">
          <h2>Student Organizations</h2>
          <p>
            Experience top-notch academic resources, healthcare, transport, and vibrant campus
            life. Your path to excellence begins here.
          </p>
        </div>
        <button className="view-all-org-btn" onClick={() => (window.location.href = "/organizations")}>
          View All →
        </button>
      </div>

      <div className="org-slider-container">
        <button className="org-arrow org-arrow-left" onClick={handlePrev}>
          ‹
        </button>

        <div className="org-cards-wrapper">
          {getVisibleCards().map((org, idx) => (
            <div
              key={`${org.id}-${currentIndex}-${idx}`}
              className="org-slide-card"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <img src={org.img} alt={org.name} className="org-slide-img" />
              <div className="org-slide-content">
                <h3>{org.name}</h3>
                <button
                  className="org-view-btn"
                  onClick={() => (window.location.href = org.link)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <button className="org-arrow org-arrow-right" onClick={handleNext}>
          ›
        </button>
      </div>
    </div>
  );
}
