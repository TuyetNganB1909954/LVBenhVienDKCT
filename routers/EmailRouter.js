const { Router } = require("express")
const EmailCtrl = require("../controllers/EmaillCtrl")
const router = require("express").Router()

router.route("/guimail")
    .post(EmailCtrl.sendmail)

module.exports = router