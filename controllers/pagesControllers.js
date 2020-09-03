const data = require('../db/database')
// const userr = require('./user')
exports.index = (req, res, next) => {
    res.render("index", data)
}
exports.faq = (req, res, next) => {
    res.render("faq", data)
}
exports.compair = (req, res, next) => {
    res.render("compair", data)
}
exports.delivery = (req, res, next) => {
    res.render("delivery", data)
}
exports.forgetpass = (req, res, next) => {
    res.render("forgetpass", data)
}
exports.legal_notice = (req, res, next) => {
    res.render("legal_notice", data)
}
exports.login = (req, res, next) => {
    res.render("login", data)
}
exports.product_details = (req, res, next) => {
    res.render("product_details", data)
}
exports.product_summary = (req, res, next) => {
    res.render("product_summary", data)
}
exports.products = (req, res, next) => {
    res.render("products", data)
}
exports.register = (req, res, next) => {
    res.render("register", data)
}
exports.special_offer = (req, res, next) => {
    res.render("special_offer", data)
}
exports.tac = (req, res, next) => {
    res.render("tac", data)
}
exports.contact = (req, res, next) => {
    res.render("contact", data)
}
exports.addtovar = (req, res, next) => {
    res.render("add-tovar", data)
}