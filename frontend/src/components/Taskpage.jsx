import { useNavigate } from "react-router-dom";
import "./Taskpage.css";
import internData from "../data/internData";

function TaskPage() {
  const navigate = useNavigate();

  const tasks = internData.tasks;

  const completedTasks = tasks.filter(
    (task) => task.status === 100
  ).length;

 const progress = Math.round(
  tasks.reduce(
    (sum, task) => sum + task.progress,
    0
  ) / tasks.length
);
  return (
    <div className="tasks-container">

      <div className="tasks-header">
        <h1>AR Infotek Internship Portal</h1>
        <p>Assigned Tasks Management</p>
      </div>

      <div className="task-stats">

        <div className="stat-card">
          <h3>Total Tasks</h3>
          <span>{tasks.length}</span>
        </div>

        <div className="stat-card">
          <h3>Completed</h3>
          <span>{completedTasks}</span>
        </div>

        <div className="stat-card">
          <h3>Progress</h3>
          <span>{progress}%</span>
        </div>

      </div>

      <div className="task-card">
        <h2>Assigned Tasks</h2>

        <table className="task-table">
          <thead>
            <tr>
              <th>Task ID</th>
              <th>Task Name</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.id}</td>

                <td>{task.title}</td>

                <td>
                  <span
                    className={
                      task.status === "Completed"
                        ? "status completed"
                        : "status pending"
                    }
                  >
                    {task.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="task-card">
        <h2>Task Completion Progress</h2>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${progress}%`,
            }}
          ></div>
        </div>

        <p className="progress-text">
          {progress}% Completed
        </p>
      </div>

      <button
        className="update-btn"
        onClick={() => navigate("/status")}
      >
        Update Task Status
      </button>

    </div>
  );
}

export default TaskPage;