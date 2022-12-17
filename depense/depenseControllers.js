const {
  createDepenseService,
  getDepenseByIdService,
  getDepensesService,
  updateDepenseService,
  deleteDepenseService
} = require("./DepenseService");
const CustomError = require("../shared-services/errors");
const { StatusCodes } = require("http-status-codes");

const Token = require("../token/tokenModel");
var crypto = require("crypto");

const createDepenseController = async (req, res) => {
  let {
    nom,
    prix,
    date

  } = req.body;
  if (

    !nom ||
    !date ||
    !prix 
  )
    throw new CustomError.BadRequestError("All fields are required");

  const Depense = await createDepenseService({
    
    nom,
    prix,
    date
  });


  res.status(StatusCodes.CREATED).json("Depense created successfully!");
};
const getDepenseController = async (req, res) => {
  const Depense = await getDepensesService();

  res.status(StatusCodes.OK).json(Depense);
};

const getDepenseByIdController = async (req, res) => {
  const id = req.params.id;
  const Depense = await getDepenseByIdService(id);
  if (!Depense) {
    throw new CustomError.NotFoundError("Depense not found");
  }
  res.status(StatusCodes.OK).json(Depense);
};



const deleteDepenseController = async (req, res) => {
  const id = req.params.id;
  const Depense = await deleteDepenseService(id);
  if (!Depense) {
    throw new CustomError.NotFoundError("Depense not found");
  }
  res.status(StatusCodes.OK).json("Depense deleted successfully");
};
const updateDepenseController = async (req, res) => {
  const id = req.params.id;
  let data = {
    nom,
    prix,
    date
  } = req.body;


  const Depense = await updateDepenseService(id, data);
  if (!Depense) {
    throw new CustomError.NotFoundError("Depense not found");
  }
  res.status(StatusCodes.OK).json("Depense updated successfully");
};



module.exports = {
  createDepenseController,
  getDepenseController,
  getDepenseByIdController,
  updateDepenseController,
  deleteDepenseController,

};
