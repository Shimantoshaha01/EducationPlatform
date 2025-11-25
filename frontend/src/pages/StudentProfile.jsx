import React, { useState } from "react";
import "./StudentProfile.css";

function StudentProfile() {
  // Sample student data - replace with API call
  const [studentData] = useState({
    name: "Mohammad Arif",
    fatherName: "Abdur Rahman",
    motherName: "Shahana Begum",
    dateOfBirth: "2000-04-14",
    email: "u1904001@student.cuet.ac.bd",
    studentId: "1904001",
    district: "Chittagong",
    level: "1",
    term: "1",
    admissionYear: "2020-02-14",
    gender: "Male",
    department: "Computer Science & Engineering",
    session: "2019-2020",
    phoneNumber: "+880 1712-345678",
    bloodGroup: "O+",
    currentAddress: "Raozan, Chattogram",
    permanentAddress: "Raozan, Chattogram, Bangladesh"
  });

  return (
    <div className="student-profile-page">
      <div className="profile-container">
        {/* Sidebar */}
        <aside className="profile-sidebar">
          <div className="sidebar-header">
            <div className="cuet-logo-mini">🎓</div>
            <h3>Student Portal</h3>
          </div>
          
          <nav className="sidebar-nav">
            <a href="/profile" className="nav-item active">
              <span className="nav-icon">👤</span>
              Profile
            </a>
            <a href="/result" className="nav-item">
              <span className="nav-icon">📊</span>
              Result
            </a>
            <a href="/courses" className="nav-item">
              <span className="nav-icon">📚</span>
              Courses
            </a>
            <a href="/course-registration" className="nav-item">
              <span className="nav-icon">📝</span>
              Course Registration
            </a>
            <a href="/attendance" className="nav-item">
              <span className="nav-icon">📅</span>
              Attendance
            </a>
            <a href="/notices" className="nav-item">
              <span className="nav-icon">📢</span>
              Notices
            </a>
          </nav>

          <div className="sidebar-footer">
            <button className="logout-btn">
              <span className="nav-icon">🚪</span>
              Logout
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="profile-main">
          {/* Header with Profile Picture */}
          <div className="profile-header-card">
            <div className="profile-banner"></div>
            <div className="profile-header-content">
              <div className="profile-picture-section">
                <div className="profile-picture">
                  <img src="/default-avatar.png" alt="Profile" />
                </div>
                <button className="change-photo-btn">Change Photo</button>
              </div>
              
              <div className="profile-header-info">
                <h1 className="student-name">{studentData.name}</h1>
                <p className="student-id">Student ID: {studentData.studentId}</p>
                <div className="student-badges">
                  <span className="badge badge-department">{studentData.department}</span>
                  <span className="badge badge-session">Session: {studentData.session}</span>
                </div>
              </div>

              <div className="profile-quick-actions">
                <button className="action-btn">
                  <span>✏️</span> Edit Profile
                </button>
                <button className="action-btn">
                  <span>🖨️</span> Print ID Card
                </button>
              </div>
            </div>
          </div>

          {/* Profile Information Cards */}
          <div className="profile-info-grid">
            {/* Personal Information */}
            <div className="info-card">
              <div className="info-card-header">
                <h2>Personal Information</h2>
                <span className="card-icon">👤</span>
              </div>
              <div className="info-card-body">
                <div className="info-row">
                  <span className="info-label">Full Name</span>
                  <span className="info-value">{studentData.name}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Father's Name</span>
                  <span className="info-value">{studentData.fatherName}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Mother's Name</span>
                  <span className="info-value">{studentData.motherName}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Date of Birth</span>
                  <span className="info-value">
                    {new Date(studentData.dateOfBirth).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                </div>
                <div className="info-row">
                  <span className="info-label">Gender</span>
                  <span className="info-value">{studentData.gender}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Blood Group</span>
                  <span className="info-value">{studentData.bloodGroup}</span>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="info-card">
              <div className="info-card-header">
                <h2>Contact Information</h2>
                <span className="card-icon">📱</span>
              </div>
              <div className="info-card-body">
                <div className="info-row">
                  <span className="info-label">Email</span>
                  <span className="info-value email-value">{studentData.email}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Phone Number</span>
                  <span className="info-value">{studentData.phoneNumber}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">District</span>
                  <span className="info-value">{studentData.district}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Current Address</span>
                  <span className="info-value">{studentData.currentAddress}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Permanent Address</span>
                  <span className="info-value">{studentData.permanentAddress}</span>
                </div>
              </div>
            </div>

            {/* Academic Information */}
            <div className="info-card">
              <div className="info-card-header">
                <h2>Academic Information</h2>
                <span className="card-icon">🎓</span>
              </div>
              <div className="info-card-body">
                <div className="info-row">
                  <span className="info-label">Student ID</span>
                  <span className="info-value">{studentData.studentId}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Department</span>
                  <span className="info-value">{studentData.department}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Session</span>
                  <span className="info-value">{studentData.session}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Current Level</span>
                  <span className="info-value">Level {studentData.level}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Current Term</span>
                  <span className="info-value">Term {studentData.term}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Admission Year</span>
                  <span className="info-value">
                    {new Date(studentData.admissionYear).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="info-card stats-card">
              <div className="info-card-header">
                <h2>Quick Statistics</h2>
                <span className="card-icon">📈</span>
              </div>
              <div className="info-card-body">
                <div className="stat-item">
                  <div className="stat-value">3.67</div>
                  <div className="stat-label">CGPA</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">42</div>
                  <div className="stat-label">Completed Credits</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">92%</div>
                  <div className="stat-label">Attendance</div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default StudentProfile;
