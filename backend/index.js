const express = require("express");
const dotenv = require('dotenv');
dotenv.config();

var morgan = require("morgan");
let cors = require("cors");
let bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));
const db = require("./connection");


//show message after connecting to cloud database
db.once("open", () => console.log("Connected to db"));
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const auth_router = require("./authentication/routes");
const thread_mgmt_router = require("./thread_mgmt/routes");


app.post("/loggingUser", auth_router);
app.post("/registerUser", auth_router);

app.get("/getThreads",thread_mgmt_router)
app.post("/postThread",thread_mgmt_router);

app.get('/', (_, res) => {
    res.status(200).send('Hello from the profile backend!')
})
app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);

