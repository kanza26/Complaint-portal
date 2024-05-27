const Router = require('express').Router;
const router = Router();
const controller=require("../appcontroller/controller")
router.route('/register').post(controller.register);
router.route('/login').post(controller.login);
router.route('/profile').post(controller.fe);
module.exports = router; // Exporting router directly