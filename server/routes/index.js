const express = require("express")
const router = express.Router()
const itemsController = require("../contraller/itemContraller");

router.get("/items", itemsController.getListItems)
router.post("/create-item", itemsController.addItemToList)
router.get("/get-item/:id", itemsController.getItemFromList)


module.exports = router