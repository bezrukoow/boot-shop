const express = require('express')
const learnController = require('../controllers/pagesControllers')
const db_tovar = require('../controllers/addTovar')
const db_user = require('../controllers/user')
const router = express.Router()

router.get("/", learnController.index)
router.get("/faq", learnController.faq)
router.get("/compair", learnController.compair)
router.get("/delivery", learnController.delivery)
router.get("/forgetpass", learnController.forgetpass)
router.get("/legal_notice", learnController.legal_notice)
router.get("/login", learnController.login)
router.get("/product_details", learnController.product_details)
router.get("/product_summary", learnController.product_summary)
router.get("/products", learnController.products)
router.get("/register", learnController.register)
router.get("/special_offer", learnController.special_offer)
router.get("/tac", learnController.tac)
router.get("/contact", learnController.contact)
router.get("/add-tovar", learnController.addtovar)


router.post("/add-tovar", db_tovar.AddTovarPost)
router.post("/register", db_user.AddUser)


module.exports = router