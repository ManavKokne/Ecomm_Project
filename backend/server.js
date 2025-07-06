const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes")
const productRoutes = require("./routes/productRoutes")

const app = express(); //initialise express app
app.use(express.json()); // ensures that server able to work with json data
app.use(cors()); // to communicate with the react server

dotenv.config();

const PORT = process.env.PORT || 3000;

//Connect to MongoDb
connectDB();

app.get("/",(req, res)=>{
    res.send("Welcome");
})

//API Routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})