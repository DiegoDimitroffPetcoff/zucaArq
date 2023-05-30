const Project = require("../dbs/mongodb/models/projects");
const upload = require("../utils/unploads");
const {
  uploadClaudinaryImage,
  deleteClaudinaryImage,
  deleteClaudinaryImages
} = require("../utils/cloudinary.js");
const fsExtra = require("fs-extra");

createProject = async (data) => {
  //upload function is gonna check if there are any imagen to upload
  //if there are not any image is gonna return:"No files has benn uploaded."
//todo falta eliminar las imagenes del local y hacer validaciones cuando no se agreguen imagenes y cuando se agregue una sola
  let objeto = data.files;

  const tempFilePaths = Object.values(objeto).map((file) => file.tempFilePath);

  //console.log(tempFilePaths);

  // let image = upload(data);
  const { name, description, price } = data.body;
  //if data.files exist... is gonna be uploded on claudinary
  // if (data.files?.file.tempFilePath) {
  //  if (data.files?.file) {
  if (tempFilePaths) {
    //   console.log(data.files?.file)
    let result = await uploadClaudinaryImage(tempFilePaths);
    //here, the image is gonna be replace by the imagen's info
    image = result;
    //here I'm gonna delete the file to do not save the file on the uploads folder
    //  await fsExtra.unlink(data.files.file.tempFilePath);
  }
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
  let imagenToDelete = await Project.findById(id);

  if (imagenToDelete.image) {
 
    await deleteClaudinaryImages(imagenToDelete.image);
  }

 return await Project.findByIdAndDelete(id, d);

};

module.exports = {
  createProject,
  getProjects,
  getProjectById,
  editProject,
  deleteProject,
};
