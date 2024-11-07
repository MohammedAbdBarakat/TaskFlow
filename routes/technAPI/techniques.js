const express = require('express')
const router = express.Router()
const techniquesController= require("../../controllers/techniquesController");

router.get("/",techniquesController.getTechnique);
router.post("/",techniquesController.updateTechnique);//Body: technique

module.exports = router

