import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./UpdateStudent.css";

function UpdateStudent() {
  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state || {};

  const [task, setTask] = useState(data.task || "");
  const [completion, setCompletion] = useState(
    data.completion || 0
  );
  const [overview, setOverview] = useState(
    ""
  );
  const [status, setStatus] = useState(
    data.status || "Going On"
  );

  const handleSubmit = () => {
    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();

    // Get previous history from localStorage
    const previousHistory =
      JSON.parse(
        localStorage.getItem("overviewHistory")
      ) || [];

    // Add new update
    const updatedHistory = [
      ...previousHistory,
      {
        task,
        overview,
        completion,
        status,
        date: currentDate,
        time: currentTime,
      },
    ];

    // Save to localStorage
    localStorage.setItem(
      "overviewHistory",
      JSON.stringify(updatedHistory)
    );

    alert("Student Progress Updated Successfully");

    navigate("/dashboard", {
      state: {
        fullName:
          data.fullName || "Bhuvaneswari",

        email:
          data.email ||
          "bhuvaneswari@gmail.com",

        collegeName:
          data.collegeName ||
          "Adhiyamaan College",

        branch:
          data.branch ||
          "Computer Science",

        year:
          data.year ||
          "3rd Year",

        domain:
          data.domain ||
          "Cloud Computing",

        task,
        completion,
        overview,
        status,

        updateDate: currentDate,
        updateTime: currentTime,

        overviewHistory: updatedHistory,
      },
    });
  };

  return (
    <div className="update-container">
      <div className="update-card">

        <h1>Update Student Progress</h1>

        <div className="form-group">
          <label>Task Name</label>
          <input
            type="text"
            value={task}
            onChange={(e) =>
              setTask(e.target.value)
            }
          />
        </div>

        <div className="form-group">
          <label>Completion %</label>
          <input
            type="number"
            min="0"
            max="100"
            value={completion}
            onChange={(e) =>
              setCompletion(e.target.value)
            }
          />
        </div>

        <div className="form-group">
          <label>Overview</label>
          <textarea
            rows="5"
            value={overview}
            onChange={(e) =>
              setOverview(e.target.value)
            }
            placeholder="Enter task overview..."
          />
        </div>

        <div className="form-group">
          <label>Progress Status</label>
          <select
            value={status}
            onChange={(e) =>
              setStatus(e.target.value)
            }
          >
            <option>Going On</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
        </div>

        <button
          className="save-btn"
          onClick={handleSubmit}
        >
          Save Update
        </button>

      </div>
    </div>
  );
}

export default UpdateStudent;