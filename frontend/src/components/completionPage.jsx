import { useNavigate } from "react-router-dom";
import "./completionPage.css";

function CompletionPage() {
  const navigate = useNavigate();

  return (
    <div className="completion-container">

      <div className="completion-header">
        <h1>AR Infotek Internship Portal</h1>
        <p>Internship Completion Summary</p>
      </div>

      <div className="completion-card">

        <div className="success-icon">
          🎉
        </div>

        <h2>Internship Successfully Completed</h2>

        <p className="completion-message">
          Congratulations! You have successfully completed
          your internship program at AR Infotek.
        </p>

        <div className="completion-stats">

          <div className="stat-box">
            <h3>Tasks Completed</h3>
            <span>5 / 5</span>
          </div>

          <div className="stat-box">
            <h3>Completion Rate</h3>
            <span>100%</span>
          </div>

          <div className="stat-box">
            <h3>Status</h3>
            <span className="completed-status">
              Completed
            </span>
          </div>

        </div>

        <div className="certificate-card">
          <h3>🏆 Certificate Status</h3>

          <p>
            Internship Completion Certificate is ready for
            download and verification.
          </p>
        </div>

        <div className="button-group">

          <button
            className="view-btn"
            onClick={() => navigate("/students")}
          >
            View All Interns
          </button>

          <button
            className="dashboard-btn"
            onClick={() => navigate("/dashboard")}
          >
            Go To Dashboard
          </button>

        </div>

      </div>

    </div>
  );
}

export default CompletionPage;