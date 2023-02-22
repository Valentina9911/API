const cors = require('cors'); //requires the cors module, which is used to config server.headers
const express = require("express");  // requires the Express library, which is used to create a web server.
const mongoose = require("mongoose") // requires the Mongoose library  -- which is used to connect to a MongoDB database.


const port = 3035;
const app = express();//Uses the Express library to create the server

// which is used to connect to a MongoDB database.
const Routes = require("./src/Routes/routes"); //requires the Routes file to management your endpoints

const connectionOptions = { //configure your options to connect to mongodb
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

app.use(express.json()); //Used to parse incoming or transform requests with JSON loads

const corsOption={ //config your cors options to acept request with front-end
  origin:"*",
  method:["GET", "POST", "PUT", "DELETE"],
  allowedHeaders:["Origin", "X-Requested-With", "Content-Type", "Accept"],
  credentials: true
};

app.use(cors(corsOption)); //start cors with your config options

// config your uri to concat in url var
const use="valentina";
const password='1000688572Lau';
const dbname='Serie';

// config your uri to concat in url var
const url = `mongodb+srv://${use}:${password}@cluster0.cae4ogm.mongodb.net/${dbname}`;

//connect to mongo atlas(cluster) > <your db> > <your collection>
mongoose.set('strictQuery', true)
require('dotenv').config();


mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((error) => console.error(error));// Conectar a la base de datos MongoDB
mongoose.set('strictQuery', true)
require('dotenv').config();


mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((error) => console.error(error));

//Define your path to consult using your endpoint file
app.use("/Listado", Routes);

//start your server in port 3035
app.listen(port, ()=>{
  console.log("mi puerto es: "+ port);
})
