
const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

/* ===========================
HOME
=========================== */

app.get("/", (req, res) => {
res.send("Backend Running...");
});

/* ===========================
INTERN REGISTRATION
=========================== */

app.post("/api/interns/register", async (req, res) => {
try {
const {
full_name,
email,
contact_number,
college_name,
degree,
branch,
year,
status,
} = req.body;


const result = await pool.query(
  `INSERT INTO interns
  (
    full_name,
    email,
    contact_number,
    college_name,
    degree,
    branch,
    year,
    status
  )
  VALUES
  ($1,$2,$3,$4,$5,$6,$7,$8)
  RETURNING *`,
  [
    full_name,
    email,
    contact_number,
    college_name,
    degree,
    branch,
    year,
    status,
  ]
);

res.json({
  success: true,
  message: "Intern Registered Successfully",
  data: result.rows[0],
});


} catch (err) {
console.log("REGISTER ERROR:");
console.log(err);


res.status(500).json({
  success: false,
  message: err.message,
});

}
});

/* ===========================
GET ALL INTERNS
=========================== */

app.get("/api/interns", async (req, res) => {
try {
const result = await pool.query(
"SELECT * FROM interns ORDER BY intern_id ASC"
);


res.json(result.rows);


} catch (err) {
console.log("INTERNS ERROR:");
console.log(err);


res.status(500).json({
  success: false,
  message: err.message,
});


}
});

/* ===========================
GET ALL TASKS
=========================== */

app.get("/api/tasks", async (req, res) => {
  console.log("TASK ROUTE HIT");

  try {
    const result = await pool.query(
      "SELECT * FROM tasks ORDER BY task_id ASC"
    );

    console.log("TASKS:");
    console.log(result.rows);

    res.json(result.rows);

  } catch (err) {
    console.log("TASK ERROR:");
    console.log(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});




/* ===========================
UPDATE TASK STATUS
=========================== */

app.put("/api/tasks/:id", async (req, res) => {
try {
const { id } = req.params;
const { status } = req.body;


const result = await pool.query(
  `UPDATE tasks
   SET status = $1
   WHERE task_id = $2
   RETURNING *`,
  [status, id]
);

res.json({
  success: true,
  data: result.rows[0],
});


} catch (err) {
console.log("UPDATE TASK ERROR:");
console.log(err);


res.status(500).json({
  success: false,
  message: err.message,
});

}
});

/* ===========================
START SERVER
=========================== */

app.listen(5001, () => {
console.log("Server running on port 5001");
});
