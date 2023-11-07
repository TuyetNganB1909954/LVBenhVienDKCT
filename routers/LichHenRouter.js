const { Router } = require("express")
const LichHenCtrl = require("../controllers/LichHenCtrl")
const router = require("express").Router()

router.route("/lichhen")
    .post(LichHenCtrl.create)
    .get(LichHenCtrl.read)

router.route("/lichhen/:id")
    .delete(LichHenCtrl.delete)
    .put(LichHenCtrl.update)
    .patch(LichHenCtrl.updateState)

module.exports = router