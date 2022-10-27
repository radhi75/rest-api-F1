const express = require("express");
const connectDB = require("./config/connectDB");
const ProductRoute = require("./routes/product");
const app = express();

const port = 5001;

connectDB();
app.use(express.json());
app.use("/api/res", ProductRoute);
app.listen(port, () => console.log(`app is running on port ${port}`));
