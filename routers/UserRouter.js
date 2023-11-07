const router = require ('express').Router()
const  UserCtrl = require('../controllers/UserCtrl')
const auth = require("../middleware/Auth")

router.post('/register', UserCtrl.register)
router.post('/login', UserCtrl.login)
router.get('/logout', UserCtrl.logout)
router.get('/infor',auth, UserCtrl.getUser)
router.get('/refresh_token', UserCtrl.refreshtoken)
router.get('/all_user', UserCtrl.getListUser)



module.exports = router

