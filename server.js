require("dotenv").config();
const express = require("express");
const path = require("path");
const helmet = require("helmet");
const compression = require("compression");
const cors = require("cors");
const { dbConnection } = require("./config/db.js");

// Routes
const urlRoute = require("./Routes/url.js");
const staticRoute = require("./Routes/staticRouter.js");

const app = express();
const PORT = process.env.PORT || 2001;

// Middleware
app.use(helmet({
    contentSecurityPolicy: false,
}));
app.use(compression());
app.use(cors());
app.set("trust proxy", 1);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Database Connection
dbConnection()
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.error("MongoDB Connection Error:", err));

app.use("/url", urlRoute);
app.use("/", staticRoute);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));