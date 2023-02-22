const Listado = require("../models/appModel")

exports.getListado = async (req, res) => {
  try {
    const result = await Listado.find();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: 'Error interno del servidor' });
}};


exports.postNewListado = ((req, res) => {
  Listado.create(
    req.body, (err, result) => {
    if (err) throw new Error(err);
    res.json(result);
  });
});

//edit a character in DB
exports.editListado = async (req, res) => {
  try{
    const result = await Listado.findOneAndUpdate({_id: requestAnimationFrame.params.id}, req.body, {new: true}) //find item by id and changes [req,body], new true is used to return edit object
    if (result) {
      res.status(200).json(result); //if
    } else {
      res.status(404).json ({error: "Personaje no encontrado"});
    }
  }catch (err){
    res.status(500).json({ error: "Error en el servidor"});
  }
}

//Delete a Character in DB
exports.deleteListado = async (req,res) => {
  try{
    const result =await Listado.findOneAndDelete({_id: req.params.id});
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ erorr: "Personaje no encontrado"});
    }
  } catch (err){
    res.status(500).json({ erorr: "Error interno en el servidor"});
  }
}

