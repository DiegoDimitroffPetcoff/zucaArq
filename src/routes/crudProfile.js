const { Router } = require("express");
const router = Router();
const fileUpload = require("express-fileupload");
router.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./uploads",
  })
);

const {
  createProfile,
  getAllProfiles,
  getProfileByID,
  editProfile,
  deleteProfile,
 
} = require("../controllers/crudControllersProfile.js");

router.post("/profile", createProfile);
router.get("/profile", getAllProfiles);
router.get("/project/:id", getProfileByID);
router.patch("/profile/:id", editProfile);
router.delete("/project/:id", deleteProfile);

module.exports = router;
