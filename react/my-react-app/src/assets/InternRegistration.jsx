import "./InternRegister.css";

function InternRegister() {
  return (
    <>
      <div className="header">
        <div className="logo">
          <img src="/logo.png" alt="AR INFOTEK" />
        </div>

        <h1>Internship Registration</h1>
      </div>

      <div className="container">
        <div className="form-card">
          <form>
            <div className="form-row">
              <div className="form-group">
                <label>
                  Full Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Use only letters and spaces"
                />
              </div>

              <div className="form-group">
                <label>
                  Date of Birth <span className="required">*</span>
                </label>
                <input type="date" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>
                  Gender <span className="required">*</span>
                </label>
                <select>
                  <option>Choose your gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>
                  Contact Number <span className="required">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="10 digit mobile number"
                />
              </div>

              <div className="form-group">
                <label>
                  Alternate Number <span className="required">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="10 digit mobile number"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>
                  Home Address <span className="required">*</span>
                </label>
                <textarea
                  rows="4"
                  placeholder="Enter your full home address"
                ></textarea>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>
                  College Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter college name"
                />
              </div>

              <div className="form-group">
                <label>
                  Branch <span className="required">*</span>
                </label>
                <select>
                  <option>Select your branch</option>
                  <option>CSE</option>
                  <option>IT</option>
                  <option>ECE</option>
                  <option>EEE</option>
                  <option>Mechanical</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>
                  Year <span className="required">*</span>
                </label>
                <select>
                  <option>Select</option>
                  <option>1st Year</option>
                  <option>2nd Year</option>
                  <option>3rd Year</option>
                  <option>4th Year</option>
                </select>
              </div>

              <div className="form-group">
                <label>
                  Semester <span className="required">*</span>
                </label>
                <select>
                  <option>Select</option>
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

            <div className="form-row">
              <div className="form-group">
                <label>
                  Student Registration ID{" "}
                  <span className="required">*</span>
                </label>
                <input
                  type="text"
                  placeholder="As given in college ID card"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>
                  Email Address <span className="required">*</span>
                </label>
                <input type="email" />
              </div>
            </div>

            <button type="submit" className="submit-btn">
              Submit Internship Application
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default InternRegister;