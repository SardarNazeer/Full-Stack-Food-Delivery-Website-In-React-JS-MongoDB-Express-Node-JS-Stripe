import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
// import bodyParser from "body-parser";
// import multer from "multer";
// import validator from "validator";

// Load environment variables from .env file
// dotenv.config();

// Initialize app
const app = express();
const port = 4000;

// Middlewares
app.use(express.json());
app.use(cors());

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB Connection
connectDB();

// api endpoints

app.use("/api/food",foodRouter);
app.use("/images",express.static('uploads'));

// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("✅ MongoDB Connected Successfully"))
//   .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Example route
app.get("/", (req, res) => {
  res.send("Food Delivery API is running successfully!");
});

// Multer setup (for image uploads)
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, "uploads/"),
//   filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
// });
// const upload = multer({ storage });

// Example upload route
// app.post("/upload", upload.single("image"), (req, res) => {
//   res.json({ message: "✅ File uploaded successfully", file: req.file });
// });

// Server listening
// const PORT = process.env.PORT || 5000;
app.listen(port, () =>{
    console.log(`Server running on http://localhost:${port}`);
} )


