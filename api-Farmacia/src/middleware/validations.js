const Validation = (req, res, next) => {
  const { id } = req.params;

  const isAsNumber = Number(id);
  if(Number.isNaN(isAsNumber)){
    res.status(400).send({ message: "ID invalido precissa ser um numero"})
  } else{
    next();
  }
}

module.export = Validation;
