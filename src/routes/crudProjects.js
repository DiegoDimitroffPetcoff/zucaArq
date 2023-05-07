const { Router } = require("express");
const router = Router();

const {
  createProject,
  getAllProjects,
  getProjectByID,
  editProject,
  deleteProject,
} = require("../controllers/crudControllersProjects.js");

router.post("/project", createProject);
router.get("/projects", getAllProjects);
router.get("/project/:id", getProjectByID);
router.patch("/project/:id", editProject);
router.delete("/project/:id", deleteProject);

module.exports = router;
