const Project = require("../dbs/mongodb/models/projects");
const crudProjectService = require("../services/crudProjectServices");

createProject = async (req, res) => {
  try {
    const ProjectCreated = await crudProjectService.createProject(req.body);
    return res.json(ProjectCreated);
  } catch (error) {  
    return res.status(500).json({ message: error.message });
  }
};

getAllProjects = async (req, res) => {
  try {
    const Allprojects = await Project.find();

    return res.json(Allprojects);
  } catch (error) {

    return res.status(500).json({ message: error.message });
  }
};

getProjectByID = async (req, res) => {
  res.send("/searchByID");
};

editProject = async (req, res) => {
  res.send("/edite patch");
};

deleteProject = async (req, res) => {
  res.send("delete");
};

module.exports = {
  createProject,
  getAllProjects,
  getProjectByID,
  editProject,
  deleteProject,
};
