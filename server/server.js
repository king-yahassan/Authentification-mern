const express = require("express") ;
const cors = require("cors");

const app = express() ;
require("dotenv").config({path: "./config/.env"})
require("./config/db")

const Routes = require("./routes/routes")

app.use(cors());
app.use(express.json())

port = process.env.PORT || 5000 ;

//The routes
app.use("/api", Routes);
//runnig server on the port
app.listen(port , () =>{
    console.log(`server is running on port : ${port}...`);
});