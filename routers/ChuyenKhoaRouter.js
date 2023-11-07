const { Router } = require("express")
const ChuyenKhoaCtrl = require("../controllers/ChuyenKhoaCtrl")
const router = require("express").Router()

router.route("/chuyenkhoa")
    .post(ChuyenKhoaCtrl.create)
    .get(ChuyenKhoaCtrl.read)

router.route("/chuyenkhoa/:id")
    .delete(ChuyenKhoaCtrl.delete)
    .put(ChuyenKhoaCtrl.update)

module.exports = router