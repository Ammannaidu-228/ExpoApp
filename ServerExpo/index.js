require("dotenv").config();
const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");

//Middlewares

app.use(express.json());
app.use(cors({
  origin: 'https://expo-app-ui.vercel.app', // Your frontend's URL
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Db Connection

mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("Db Connection established"))
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  res.status(200).send({ message: "Backend Server Started!!! Ready With Ui" });
});
app.use("/user", userRoutes);

app.listen(port, () =>
  console.log(`Server Started at http://localhost:${port}`)
);
