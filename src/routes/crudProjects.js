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
  createProject,
  getAllProjects,
  getProjectByID,
  editProject,
  deleteProject,
  upload3,
} = require("../controllers/crudControllersProjects.js");

const {
  createProfile,
  getAllProfiles,
  getProfileByID,
  editProfile,
  deleteProfile,
 
} = require("../controllers/crudControllersProfile.js");

router.post("/project", createProject);
router.get("/projects", getAllProjects);
router.get("/project/:id", getProjectByID);
router.patch("/project/:id", editProject);
router.delete("/project/:id", deleteProject);



router.post("/profile", createProfile);
router.get("/profile", getAllProfiles);
router.get("/profile/:id", getProfileByID);
router.patch("/profile/:id", editProfile);
router.delete("/profile/:id", deleteProfile);

module.exports = router;
