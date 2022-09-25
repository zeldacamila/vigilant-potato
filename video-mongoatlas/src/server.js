const express = require("express")
require("dotenv").config()
const { connect } = require("./db")
const videoRoute = require("./routes/video.route")

const app = express();
const port = 8080;
connect();

app.use(express.json()) //midelware

// Rutas - endpoint
app.use("/video", videoRoute)


app.listen(port, () => {
    console.log(`Sucesfully running at port ${port}`)
})