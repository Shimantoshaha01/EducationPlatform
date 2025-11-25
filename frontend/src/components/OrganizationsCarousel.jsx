import React, { useEffect, useRef, useState } from "react";
import "./OrganizationsCarousel.css";

/**
 * Props:
 * - items: array of { id, name, img, link? }
 * - visible: default number of slides visible on large screens
 * - autoplay: boolean
 * - interval: autoplay delay ms
 */
export default function OrganizationsCarousel({
  items = [],
  visible = 4,
  autoplay = true,
  interval = 3000,
}) {
  const [slidesToShow, setSlidesToShow] = useState(visible);
  const [index, setIndex] = useState(0); // index into the slides array (including clones)
  const [isTransitioning, setIsTransitioning] = useState(true);
  const trackRef = useRef(null);
  const autoplayRef = useRef(null);

  // responsive slidesToShow
  useEffect(() => {
    function update() {
      const w = window.innerWidth;
      if (w < 560) setSlidesToShow(1);
      else if (w < 900) setSlidesToShow(2);
      else if (w < 1200) setSlidesToShow(3);
      else setSlidesToShow(visible);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [visible]);

  // if not enough items, just show them without cloning/looping
  const small = items.length <= slidesToShow;
  const clonesCount = small ? 0 : slidesToShow;

  // Build clones: prepend last N and append first N
  const prepend = clonesCount ? items.slice(-clonesCount) : [];
  const append = clonesCount ? items.slice(0, clonesCount) : [];
  const slides = [...prepend, ...items, ...append];

  // start index should point to the first real item inside slides
  const startIndex = clonesCount;

  // reset index when items or slidesToShow change
  useEffect(() => {
    setIsTransitioning(false);
    setIndex(startIndex);
    // re-enable transition next frame
    requestAnimationFrame(() => requestAnimationFrame(() => setIsTransitioning(true)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items.length, slidesToShow]);

  // autoplay
  useEffect(() => {
    if (!autoplay || small) return;
    clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      goNext();
    }, interval);
    return () => clearInterval(autoplayRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, slidesToShow, autoplay, interval, small]);

  // move one slide forward
  function goNext() {
    setIndex((i) => i + 1);
    setIsTransitioning(true);
  }

  // move one slide backward
  function goPrev() {
    setIndex((i) => i - 1);
    setIsTransitioning(true);
  }

  // after transition, if in cloned area, snap to the corresponding real index
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    function onTransitionEnd() {
      if (small) return; // no snapping needed
      // if we've moved beyond the right cloned area
      if (index >= items.length + clonesCount) {
        // snap back by subtracting items.length
        const newIndex = index - items.length;
        setIsTransitioning(false);
        setIndex(newIndex);
        // re-enable transition next frame
        requestAnimationFrame(() => requestAnimationFrame(() => setIsTransitioning(true)));
      }

      // if we've moved into the left cloned area
      if (index < clonesCount) {
        // snap forward by adding items.length
        const newIndex = index + items.length;
        setIsTransitioning(false);
        setIndex(newIndex);
        requestAnimationFrame(() => requestAnimationFrame(() => setIsTransitioning(true)));
      }
    }

    track.addEventListener("transitionend", onTransitionEnd);
    return () => track.removeEventListener("transitionend", onTransitionEnd);
  }, [index, items.length, clonesCount, small]);

  // touch / swipe handling
  useEffect(() => {
    const view = trackRef.current?.parentElement;
    if (!view) return;
    let startX = 0;
    let deltaX = 0;
    let dragging = false;

    function start(e) {
      if (e.touches) startX = e.touches[0].clientX;
      else startX = e.clientX;
      dragging = true;
      clearInterval(autoplayRef.current);
    }
    function move(e) {
      if (!dragging) return;
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      deltaX = x - startX;
    }
    function end() {
      dragging = false;
      if (Math.abs(deltaX) > 50) {
        if (deltaX < 0) goNext();
        else goPrev();
      }
      deltaX = 0;
    }

    view.addEventListener("touchstart", start, { passive: true });
    view.addEventListener("touchmove", move, { passive: true });
    view.addEventListener("touchend", end);
    view.addEventListener("mousedown", start);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", end);

    return () => {
      view.removeEventListener("touchstart", start);
      view.removeEventListener("touchmove", move);
      view.removeEventListener("touchend", end);
      view.removeEventListener("mousedown", start);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", end);
    };
  }, [slidesToShow, items.length, small]); // eslint-disable-line

  // compute layout values
  const slideWidthPercent = 100 / slidesToShow || 100; // percent of viewport each slide takes
  const translatePercent = -(index * slideWidthPercent);

  // When there are too few items, render a simple static row (no carousel behavior)
  if (small) {
    return (
      <div className="org-carousel">
        <div className="org-carousel-top">
          <h3>Student Organizations</h3>
          <button className="view-all-btn" onClick={() => (window.location.href = "/organizations")}>
            View All →
          </button>
        </div>

        <div className="simple-row">
          {items.map((s) => (
            <div key={s.id} className="simple-card">
              <img src={s.img} alt={s.name} />
              <div className="simple-card-body">
                <h4>{s.name}</h4>
                <button onClick={() => (window.location.href = s.link || `/organization/${s.id}`)}>View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="org-carousel">
      <div className="org-carousel-top">
        <h3>Student Organizations</h3>
        <button className="view-all-btn" onClick={() => (window.location.href = "/organizations")}>
          View All →
        </button>
      </div>

      <div className="carousel-viewport">
        <div
          className="carousel-track"
          ref={trackRef}
          style={{
            width: `${(slides.length * 100) / slidesToShow}%`,
            transform: `translateX(${translatePercent}%)`,
            transition: isTransitioning ? "transform 0.8s ease-in-out" : "none",
          }}
        >
          {slides.map((s, idx) => (
            <div key={`${s.id}-${idx}`} className="carousel-slide" style={{ width: `${slideWidthPercent}%` }}>
              <div className="org-card">
                <img src={s.img} alt={s.name} className="org-carousel-img" />
                <div className="org-card-body">
                  <h4>{s.name}</h4>
                  <button
                    className="org-card-btn"
                    onClick={() => (window.location.href = s.link || `/organization/${s.id}`)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-controls">
        <button className="carousel-arrow" onClick={() => goPrev()} aria-label="Previous">
          ‹
        </button>
        <button className="carousel-arrow" onClick={() => goNext()} aria-label="Next">
          ›
        </button>
      </div>
    </div>
  );
}
