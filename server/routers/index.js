const express = require('express')
const TransactionController = require('../controllers/transactionController')
const GameController = require('../controllers/letterController')
const UserController = require('../controllers/userController')
const { errorHandler, authentication } = require('../middlewares')

const router = express.Router()

router.get("/", GameController.game)
router.get("/:id", GameController.gameId)
router.get("/game", authentication, GameController.myGame)
router.post("/login", UserController.login)
router.post("/register", UserController.register)
router.post("/login-google", UserController.googleLogin)
router.get("/payment/:id", authentication, TransactionController.InitiateMidTrans)

// router.get("/favorite", GameController.getFav);
// router.post("/favorite/:gameId", GameController.addFav);
// router.put("/favorite/:gameId", GameController.editFav);
// router.delete("/favorite/:gameId", GameController.deleteFav);


router.use(errorHandler)

module.exports = router