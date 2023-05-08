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

router.post("/project", createProject);
router.get("/projects", getAllProjects);
router.get("/project/:id", getProjectByID);
router.patch("/project/:id", editProject);
router.delete("/project/:id", deleteProject);

module.exports = router;
