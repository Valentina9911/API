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


