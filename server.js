const express = require("express")
const app = express()

const path = require("path")
const cors = require("cors")
const whitelist = ["http://127.0.0.1:3000", "localhost", "http://localhost:3000"];

var corsOptionsDelegate = function (req, callback) {
  var corsOptions = { origin: true};

  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}

const dotenv = require("dotenv")
dotenv.config({path:path.join(__dirname,"config.env")})

const bodyParser = require("body-parser")
app.use(bodyParser.json())

const mongoose = require("mongoose")
mongoose
  .connect(process.env.DATABASE, {
  })
  .then(() => {
    console.log("Database Connected");
  });
// mongoose.set('strictQuery', true);



app.use("/api/loocafe",cors(corsOptionsDelegate),require("./routes/loocafe"))


const PORT = process.env.PORT || 8000
app.listen(PORT,()=>{
    console.log("listening at "+PORT)
})
