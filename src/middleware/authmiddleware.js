function authmiddelware(req,res,next) {
    if (!req.session.userLogged) {
        res.redirect("/users/login")
    }
    next();
}
module.exports = authmiddelware