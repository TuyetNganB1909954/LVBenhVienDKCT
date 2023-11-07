const { Router } = require("express")
const BacSiCtrl = require("../controllers/BacSiCtrl")
const router = require("express").Router()

router.route("/bacsi")
    .post(BacSiCtrl.create)
    .get(BacSiCtrl.read)

router.route("/bacsi/:id")
    .delete(BacSiCtrl.delete)
    .put(BacSiCtrl.update)
    .patch(BacSiCtrl.addLichHenBS)
    .patch(BacSiCtrl.LichTrucBS)

module.exports = router