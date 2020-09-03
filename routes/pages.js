const express = require('express')
const pageController = require('../controllers/pagesControllers')
const db_tovar = require('../controllers/addTovar')
const db_user = require('../controllers/user')
const router = express.Router()

router.get("/", pageController.index)
router.get("/faq", pageController.faq)
router.get("/compair", pageController.compair)
router.get("/delivery", pageController.delivery)
router.get("/forgetpass", pageController.forgetpass)
router.get("/legal_notice", pageController.legal_notice)
router.get("/login", pageController.login)
router.get("/product_details", pageController.product_details)
router.get("/product_summary", pageController.product_summary)
router.get("/products", pageController.products)
router.get("/register", pageController.register)
router.get("/special_offer", pageController.special_offer)
router.get("/tac", pageController.tac)
router.get("/contact", pageController.contact)
router.get("/add-tovar", pageController.addtovar)


router.post("/add-tovar", db_tovar.AddTovarPost)
router.post("/register", db_user.AddUser)


module.exports = router