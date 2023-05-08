const Project = require("../dbs/mongodb/models/projects");
const upload = require("../utils/unploads");

createProject = async (data) => {
  upload(data);
  const { name, description, price } = data.body;

  let image = data.files;
  if (!name) return "message: Name is required";
  try {
    const newProject = new Project({
      name,
      description,
      price,
      image,
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
  return await Project.findByIdAndUpdate(id, update, {
    new: true,
  });
};

deleteProject = async (id, d) => {
  return await Project.findByIdAndDelete(id, d);
};

module.exports = {
  createProject,
  getProjects,
  getProjectById,
  editProject,
  deleteProject,
};
