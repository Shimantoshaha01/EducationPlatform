import React from "react";
import "./AboutAtGlance.css";

/**
 * stats: array of { id, iconType, value, label, bgColor? }
 * iconType: "department" | "students" | "faculty" | "graduates"
 *
 * Example:
 * [
 *  { id:1, iconType:"department", value:"15", label:"Departments" },
 *  { id:2, iconType:"students", value:"5K+", label:"Current Students" },
 *  ...
 * ]
 */
function Icon({ type }) {
  // simple icons built with svg; swap or replace with real icons if you want
  if (type === "department") {
    return (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" className="stat-icon">
        <rect x="3" y="4" width="18" height="16" rx="2" stroke="none" fill="currentColor"/>
      </svg>
    );
  }
  if (type === "students") {
    return (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" className="stat-icon">
        <circle cx="12" cy="8" r="3" stroke="none" fill="currentColor"/>
        <path d="M4 20c0-4 4-6 8-6s8 2 8 6" stroke="none" fill="currentColor"/>
      </svg>
    );
  }
  if (type === "faculty") {
    return (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" className="stat-icon">
        <path d="M12 3v4" stroke="none" fill="currentColor"/>
        <rect x="6" y="9" width="12" height="11" rx="2" stroke="none" fill="currentColor"/>
      </svg>
    );
  }
  // graduates
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" className="stat-icon">
      <path d="M12 2l9 4-9 4-9-4 9-4z" stroke="none" fill="currentColor"/>
      <path d="M12 10v10" stroke="none" fill="currentColor"/>
    </svg>
  );
}

export default function StatsGrid({ stats = [] }) {
  // If no stats provided, show placeholder four cards
  const defaultStats = [
    { id: 1, iconType: "department", value: "15", label: "Departments", bgColor: "#f6f0e6" },
    { id: 2, iconType: "students", value: "5K+", label: "Current Students", bgColor: "#f6f0e6" },
    { id: 3, iconType: "faculty", value: "380", label: "Faculty Members", bgColor: "#f6f0e6" },
    { id: 4, iconType: "graduates", value: "50K+", label: "Graduates", bgColor: "#f6f0e6" },
  ];

  const rows = stats && stats.length >= 4 ? stats : defaultStats;

  return (
    <div className="stats-grid">
      {rows.map((s) => (
        <div
          key={s.id}
          className="stat-card"
          style={{ background: s.bgColor || "var(--stat-bg, #f6f6fb)" }}
        >
          <div className="stat-icon-circle" style={{ color: s.iconColor || "#3d33a7" }}>
            <Icon type={s.iconType} />
          </div>

          <div className="stat-value">{s.value}</div>
          <div className="stat-label">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
