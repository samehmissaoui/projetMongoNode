require("dotenv").config();
require("express-async-errors");
const cookieParser = require('cookie-parser')
const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const port = process.env.PORT || 3000;
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser(process.env.JWT_SECRET))
// app.use(cors({origin:'http://localhost:4200', credentials:true}));
app.use(cors())
app.use(morgan('tiny'))

//DB connection rrquirements
const connectDB = require("./shared-services/db");
//authentication middlewares
const auth =require('./middlewares/authentication');
// ? ERRORS HANDLERS REQUIREMENTS

// error handler
const errorHandlerMiddleware = require('./middlewares/error-handler');
const notFoundMiddleware = require('./middlewares/not-found');


//Importing routes
const Depense_router = require("./depense/depenseRouter");




//Using routes
app.use("/api/v1/depense", Depense_router);


app.use(errorHandlerMiddleware)
app.use(notFoundMiddleware)

const start = async () => {
   
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Live : http://localhost:${port}`));
  } catch (error) {
    console.log(`Something went wrong please check again : ${error}`);
  }
};

start();
