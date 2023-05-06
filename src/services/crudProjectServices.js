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

    return error
  }
};

module.exports = { createProject };
