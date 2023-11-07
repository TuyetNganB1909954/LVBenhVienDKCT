const { Router } = require("express")
const LichTrucCtrl = require("../controllers/LichTrucCtrl")
const router = require("express").Router()

router.route("/lichtruc")
    .post(LichTrucCtrl.create)
    .get(LichTrucCtrl.read)

// router.route("/lichtruc/:id")
//     .delete(LichTrucCtrl.delete)
//     .put(LichTrucCtrl.update)

module.exports = router