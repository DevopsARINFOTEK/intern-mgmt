
import { useNavigate } from "react-router-dom";
import handleSubmit from "../handlers/handleSubmit";
import logo from "../assets/arinfotek_logo.png";
import "./InternRegistration.css";

function InternRegistration() {
  const navigate = useNavigate();

  return (
    <div className="page">

      {/* AR INFOTEK HEADER */}
      <div className="portal-header">
        <img
          src={logo}
          alt="AR Infotek Logo"
          className="portal-logo"
        />

        <div className="portal-title">
          <h1>AR Infotek Internship Portal</h1>
          
        </div>
      </div>

      {/* FORM SECTION */}
      <div className="form-section">

        <form
          className="intern-form"
          onSubmit={(e) => handleSubmit(e, navigate)}
        >

          <div className="row">
            <div className="form-group">
              <label>Full Name *</label>
              <input
                type="text"
                placeholder="Use only letters and spaces"
                required
              />
            </div>

            <div className="form-group">
              <label>Date of Birth *</label>
              <input
                type="date"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Gender *</label>
            <select required>
              <option value="">
                Choose your gender
              </option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <div className="row">
            <div className="form-group">
              <label>Contact Number *</label>
              <input
                type="text"
                placeholder="10 digit mobile number"
                required
              />
            </div>

            <div className="form-group">
              <label>Alternate Number</label>
              <input
                type="text"
                placeholder="10 digit mobile number"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Home Address *</label>
            <textarea
              rows="4"
              placeholder="Enter your full home address"
              required
            />
          </div>

          <div className="form-group">
            <label>College Name *</label>
            <input
              type="text"
              placeholder="Enter your college name"
              required
            />
          </div>

          <div className="form-group">
            <label>Degree *</label>
            <select required>
              <option value="">
                Select your degree
              </option>
              <option>B.E</option>
              <option>B.Tech</option>
              <option>BCA</option>
              <option>BSc</option>
              <option>MCA</option>
              <option>M.Tech</option>
            </select>
          </div>

          <div className="form-group">
            <label>Branch *</label>
            <select required>
              <option value="">
                Select your branch
              </option>
              <option>Computer Science</option>
              <option>Information Technology</option>
              <option>Electronics</option>
              <option>Mechanical</option>
              <option>Civil</option>
            </select>
          </div>

          <div className="row">
            <div className="form-group">
              <label>Year *</label>
              <select required>
                <option value="">
                  Select Year
                </option>
                <option>1st Year</option>
                <option>2nd Year</option>
                <option>3rd Year</option>
                <option>4th Year</option>
              </select>
            </div>

            <div className="form-group">
              <label>Semester *</label>
              <select required>
                <option value="">
                  Select Semester
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>
              Student Registration ID *
            </label>

            <input
              type="text"
              placeholder="As given in college ID card"
              required
            />
          </div>

          <div className="form-group">
            <label>Email Address *</label>

            <input
              type="email"
              placeholder="Enter your email address"
              required
            />
          </div>

          <button
            type="submit"
            className="submit-btn"
          >
            Submit Internship Application
          </button>

        </form>
      </div>
    </div>
  );
}

export default InternRegistration;

