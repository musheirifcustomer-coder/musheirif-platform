const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// =======================
// STORAGE (UPLOADS)
// =======================
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });
app.use("/uploads", express.static("uploads"));

// =======================
// ADMIN LOGIN
// =======================
const ADMIN = {
  username: "admin",
  password: "123456",
};

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  if (username === ADMIN.username && password === ADMIN.password) {
    return res.json({
      success: true,
      token: "fake-jwt-token-123",
    });
  }

  return res.status(401).json({
    success: false,
    message: "Invalid credentials",
  });
});

// =======================
// WORKERS (IN MEMORY)
// =======================
let workers = [
  {
    id: 1,
    name: "Test Worker",
    nationality: "Philippines",
    age: 30,
    salary: 1200,
    status: "available",
    image: "",
  },
];

// GET ALL
app.get("/api/workers", (req, res) => {
  res.json(workers);
});

// ADD WORKER
app.post("/api/workers", (req, res) => {
  const newWorker = {
    id: Date.now(),
    ...req.body,
  };

  workers.push(newWorker);

  res.json(newWorker);
});

// DELETE WORKER
app.delete("/api/workers/:id", (req, res) => {
  const id = Number(req.params.id);
  workers = workers.filter((w) => w.id !== id);
  res.json({ message: "deleted" });
});

// UPDATE WORKER
app.put("/api/workers/:id", (req, res) => {
  const id = Number(req.params.id);

  workers = workers.map((w) =>
    w.id === id ? { ...w, ...req.body } : w
  );

  res.json({ message: "Updated" });
});

// UPLOAD IMAGE
app.post("/api/upload", upload.single("image"), (req, res) => {
  res.json({
    imageUrl: `http://localhost:5000/uploads/${req.file.filename}`,
  });
});

// =======================
// SERVER START
// =======================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const JWT_SECRET = "musheirif_secret_key_123";
function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(403).json({ message: "No token" });
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, JWT_SECRET, (err) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }

    next();
  });
}
app.get("/api/workers", verifyToken, (req, res) => {
  db.query("SELECT * FROM workers", (err, results) => {
    res.json(results);
  });
});