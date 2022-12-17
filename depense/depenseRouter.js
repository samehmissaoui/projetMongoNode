const express=require('express');
const Depense_router =express.Router();

const { createDepenseController,
    getDepenseController,
    getDepenseByIdController,
    updateDepenseController,
    deleteDepenseController
}=require ('./DepenseControllers')
 


Depense_router.route('/')
.get(getDepenseController)
.post(createDepenseController)
.patch(updateDepenseController)

Depense_router.route('/:id')
.get(getDepenseByIdController)
.delete(deleteDepenseController)


module.exports=Depense_router;