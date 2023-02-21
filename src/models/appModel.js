const mongoose = require ( 'mongoose');

//Body model collection
//Schema: A schema is a JSON object that defines the the structure and contents of your data.

const characterSchema = new mongoose.Schema({
  Name: String,
  Age: Number,
  Character: String,
  Height: Number,
  img_url: String
});

//export mongose colelction to use in routes
module.exports= mongoose.model("Characters", characterSchema)
