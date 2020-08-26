const Tovar = require('../model/model_tovar')

exports.AddTovarPost = (req, res, next) => {
    const brand = req.body.brand
    const model = req.body.model
    const Dimensions = req.body.Dimensions
    const price = req.body.price
    const image = req.body.image

    Tovar.create({
        brand: brand,
        model: model,
        Dimensions: Dimensions,
        price: price,
        image: image
    }).then(res => {
        console.log("Add tovar => ", res)
        console.log("Tovar added")
        
    }).catch(err => console.log(err))
    res.render('add-tovar.ejs')
}

