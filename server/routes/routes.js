const router = require("express").Router() ;
//const userController = require("../controllers/user.controller") ;

//Auth controllers 

const userAuthController = require("../controllers/auth.controller")
const newAuthContoller = require("../controllers/user.controller")


//Auth routes 

router.post('/login' , userAuthController.auth)
router.post('/new-user' , newAuthContoller.newUser)


module.exports = router ;