const express = require("express")
const app = express()

const bodyParser = require("body-parser")
app.use(bodyParser.json());

const path = require("path")
const cors = require("cors")
const whitelist = ["http://127.0.0.1:3000", "localhost", "http://localhost:3000",
"https://loocafe-frontend.netlify.app"];

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


const mongoose = require("mongoose")
mongoose
  .connect(process.env.DATABASE, {
  })
  .then(() => {
    console.log("Database Connected");
  });
// mongoose.set('strictQuery', true);


app.use("/api/auth",cors(corsOptionsDelegate),require("./routes/auth"))
app.use("/api/loocafe",cors(corsOptionsDelegate),require("./routes/loocafe"))
app.use("/api/kyc",cors(corsOptionsDelegate),require("./routes/kyc"))
app.use("/api/supervisor",cors(corsOptionsDelegate),require("./routes/supervisor"))
app.use("/api/user",cors(corsOptionsDelegate),require("./routes/user"))
app.use("/api/rental",cors(corsOptionsDelegate),require("./routes/rental"))
app.use("/api/issue",cors(corsOptionsDelegate),require("./routes/issue"))


const PORT = process.env.PORT || 8000
const {updateRentalStatus} = require("./controllers/rental");
setInterval(()=>{
  updateRentalStatus()
},1000*60*60*24)

app.listen(PORT,()=>{
  
    console.log("listening at "+PORT)
})
