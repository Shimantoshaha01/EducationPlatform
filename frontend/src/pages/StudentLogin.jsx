import React, { useState } from "react";
import "./StudentLogin.css";

function StudentLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log("Login submitted");
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-left">
          <div className="login-header">
            <div className="cuet-badge">CUET</div>
            <h1>Student Portal</h1>
            <p className="login-subtitle">Sign in to access your academic dashboard</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label className="input-label">Student ID / Email</label>
              <div className="input-wrapper">
                <div className="input-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="#4B3DB3" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="12" cy="7" r="4" stroke="#4B3DB3" strokeWidth="2"/>
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Enter your student ID or email"
                  className="login-input"
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label className="input-label">Password</label>
              <div className="input-wrapper">
                <div className="input-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <rect x="5" y="11" width="14" height="10" rx="2" stroke="#4B3DB3" strokeWidth="2"/>
                    <path d="M7 11V7a5 5 0 0110 0v4" stroke="#4B3DB3" strokeWidth="2"/>
                  </svg>
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="login-input"
                  required
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="#4B3DB3" strokeWidth="2"/>
                      <circle cx="12" cy="12" r="3" stroke="#4B3DB3" strokeWidth="2"/>
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" stroke="#4B3DB3" strokeWidth="2"/>
                      <line x1="1" y1="1" x2="23" y2="23" stroke="#4B3DB3" strokeWidth="2"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div className="login-options">
              <label className="remember-me">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span className="checkbox-custom"></span>
                Remember me
              </label>
              <a href="/forgot-password" className="forgot-password">
                Forgot password?
              </a>
            </div>

            <button type="submit" className="sign-in-btn">
              Sign In
            </button>

            <div className="help-section">
              <p className="help-text">
                Need help? Contact <a href="mailto:support@cuet.ac.bd">IT Support</a>
              </p>
            </div>
          </form>
        </div>

        <div className="login-right">
          <div className="welcome-content">
            <div className="logo-section">
              <div className="university-logo">🎓</div>
              <h2>Welcome to CUET</h2>
            </div>
            <div className="features-list">
              <div className="feature-item">
                <div className="feature-icon">📚</div>
                <span>Access Course Materials</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">📊</div>
                <span>View Grades & Results</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">📅</div>
                <span>Check Class Schedule</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">📢</div>
                <span>Latest Announcements</span>
              </div>
            </div>
            <p className="welcome-message">
              Your gateway to academic excellence. Access all your courses, grades, 
              schedules, and university resources in one place.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentLogin;
