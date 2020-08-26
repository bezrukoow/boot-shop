const User = require('../model/user')

exports.AddUser = (req, res, next) => {
    const user_title = req.body.user_title
    const user_FirstName = req.body.user_FirstName
    const user_LastName = req.body.user_LastName
    const user_email = req.body.user_email
    const user_mobile = req.body.user_mobile
    const user_pass = req.body.user_pass
    const user_birth = req.body.birth_day + ' ' + req.body.birth_month + ' ' + req.body.birth_year
    if (user_FirstName && user_email && user_pass && user_mobile) {
        User.create({
            user_title: user_title,
            user_FirstName: user_FirstName,
            user_LastName: user_LastName,
            user_email: user_email,
            user_pass: user_pass,
            user_birth: user_birth,
            user_mobile: user_mobile,

        }).then(res => {
            console.log("Add user => ", res)
            console.log("User added")
        }).catch(err => console.log(err))
        res.render('register.ejs')
    } else {
        res.render('register.ejs')
    }

}

