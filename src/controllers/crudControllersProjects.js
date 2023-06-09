const crudProjectService = require("../services/crudServicesProjects");

createProject = async (req, res) => {
  try {
    const ProjectCreated = await crudProjectService.createProject(req);
    return res.json(ProjectCreated);
  } catch (error) {
    console.log("ERROR");
    console.log(error);
    return res.status(500).json(error);
  }
};

getAllProjects = async (req, res) => {
  try {
    const Allprojects = await crudProjectService.getProjects();

    return res.json(Allprojects);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//TODO GESTIONAR COMO ENCONTRAR UN PROJ MEDIANTE ID
getProjectByID = async (req, res) => {
  try {
    const Allprojects = await crudProjectService.getProjectById(req.params.id);

    return res.json(Allprojects);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

editProject = async (req, res) => {
  try {
    const projectEdited = await crudProjectService.editProject(
      req.params.id,
      req.body
    );

    if (!projectEdited) {
      return res.status(404).json({ message: "Project not found" });
    }
    return res.json(projectEdited);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

deleteProject = async (req, res) => {
  {
    try {
      const projectEdited = await crudProjectService.deleteProject(
        req.params.id,
        req.body
      );
      if (!projectEdited) {
        return res.status(404).json({ message: "Project not found" });
      }

      return res.json(projectEdited);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

deleteImage = async (req, res) => {
  {
    try {
      const projectEdited = await crudProjectService.deleteImage(
        req.params,
        req.body
      );
      if (!projectEdited) {
        return res.status(404).json({ message: "Project not found" });
      }

      return res.json(projectEdited);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

module.exports = {
  createProject,
  getAllProjects,
  getProjectByID,
  editProject,
  deleteProject,
  deleteImage,
};
