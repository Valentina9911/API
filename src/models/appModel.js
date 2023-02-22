const mongoose = require ( 'mongoose');

//Body model collection
//Schema: A schema is a JSON object that defines the the structure and contents of your data.

const ListadoSchema = new mongoose.Schema({
  Name: String,
  Age: String,
  Character: String,
  img_url: String
});

//export mongose colelction to use in routes
module.exports= mongoose.model("Listado", ListadoSchema)
