import React from "react";
import "./QuickLinks.css";

function QuickLinks() {
  const items = [
    { key: "portal", label: "Student Portal", href: "/student-login", icon: portalIcon },
    { key: "notice", label: "Notice", href: "#notice", icon: noticeIcon },
    { key: "events", label: "Events", href: "#events", icon: eventsIcon },
    { key: "dept", label: "Departments", href: "#departments", icon: deptIcon },
    { key: "lib", label: "Library", href: "#library", icon: libIcon },
  ];

  return (
    <div className="quicklinks-wrap">
      <div className="quicklinks">
        {items.map((it, idx) => (
          <a className="quicklink-item" key={it.key} href={it.href}>
            <div className="ql-icon">{it.icon()}</div>
            <div className="ql-label">{it.label}</div>
            {idx < items.length - 1 && <div className="ql-divider" />}
          </a>
        ))}
      </div>
    </div>
  );
}

/* --- Simple inline SVG icon generators (small, neutral) --- */
const portalIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" stroke="#4B3DB3" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 21v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1" stroke="#4B3DB3" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const noticeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="18" height="14" rx="2" stroke="#4B3DB3" strokeWidth="1.4"/>
    <path d="M7 8h10" stroke="#4B3DB3" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M7 12h7" stroke="#4B3DB3" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

const eventsIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="5" width="18" height="16" rx="2" stroke="#4B3DB3" strokeWidth="1.4"/>
    <path d="M16 3v4" stroke="#4B3DB3" strokeWidth="1.4" strokeLinecap="round"/>
    <path d="M8 3v4" stroke="#4B3DB3" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
);

const deptIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 21h18" stroke="#4B3DB3" strokeWidth="1.4" strokeLinecap="round"/>
    <path d="M12 3v18" stroke="#4B3DB3" strokeWidth="1.4" strokeLinecap="round"/>
    <path d="M7 8h10" stroke="#4B3DB3" strokeWidth="1.4" strokeLinecap="round"/>
    <path d="M7 16h10" stroke="#4B3DB3" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
);

const libIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 19.5V6.5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v13" stroke="#4B3DB3" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 6v13" stroke="#4B3DB3" strokeWidth="1.4" strokeLinecap="round"/>
    <path d="M16 6v13" stroke="#4B3DB3" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
);

export default QuickLinks;
