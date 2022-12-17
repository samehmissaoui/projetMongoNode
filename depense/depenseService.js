const Depense = require("./depenseModel");
const bcrypt = require("bcryptjs");

//Crud operations services for Depense Entity

const createDepenseService = (data) => {
  return depense = Depense.create(data);

};
const getDepensesService = () => {
  return depense = Depense.find()

};
const getDepenseByIdService = (id) => {
  return depense = Depense.findById({ _id: id })

};


const updateDepenseService = (id, data) => {
  return depense = Depense.findByIdAndUpdate({_id: id},data);

};

const deleteDepenseService = (id) => {

  return depense = Depense.findOneAndDelete({_id: id});

};


//Exporting the functions
module.exports = {
  createDepenseService,
  getDepenseByIdService,
  getDepensesService,
  updateDepenseService,
  deleteDepenseService,

}
