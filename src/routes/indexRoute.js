const { Router } = require("express");
const router = Router();

const model = require("../dbs/mongodb/models/projects");

router.get("/", (req, res) => {
  res.send("principal page");
});

router.get("/delete", async (req, res) => {
  await model.deleteMany({});
  res.send("SE ELIMINO TODO");
});

module.exports = router;
