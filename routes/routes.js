var express = require("express")
var app = express();
var router = express.Router();

const HomeController = require("../controllers/HomeController");
const UserController = require("../controllers/UserController");


//Middleware validate data
const UserMiddleware = require("../middlewares/UserMiddleware");



router.get('/', HomeController.index);

//Users
router.post('/user', UserMiddleware.validate, UserController.create);


module.exports = router;