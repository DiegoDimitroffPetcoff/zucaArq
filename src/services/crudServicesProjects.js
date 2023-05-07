const Project = require("../dbs/mongodb/models/projects");

createProject = async (data) => {
  console.log(" data desde service");
  console.log(data);
  const { name, description, price } = data;

  if (!name) return res.status(404).json({ message: "Name is required!" });
  try {
    const newProject = new Project({
      name,
      description,
      price,
    });
    const projectSaved = await newProject.save();
    return projectSaved;
  } catch (error) {
    return error;
  }
};

getProjects = async () => {
  return await Project.find();
};

getProjectById = async (id) => {
  return await Project.findById(id);
};

editProject = async (id, update) => {
  const updateProject = await Project.findByIdAndUpdate(id, update, {
    new: true,
  });
  return updateProject;
};

deleteProject = async (data) => {};

module.exports = {
  createProject,
  getProjects,
  getProjectById,
  editProject,
  deleteProject,
};
