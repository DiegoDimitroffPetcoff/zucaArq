const Project = require("../dbs/mongodb/models/projects");
const upload = require("../utils/unploads");
const {
  uploadClaudinaryImage,
  deleteClaudinaryImage,
  deleteClaudinaryImages,
} = require("../utils/cloudinary.js");
const fsExtra = require("fs-extra");

createProject = async (data) => {
  //upload function is gonna check if there are any imagen to upload
  //if there are not any image is gonna return:"No files has benn uploaded."
  let objeto = data.files;
  const tempFilePaths = Object.values(objeto).map((file) => file.tempFilePath);
  const { name, description, price } = data.body;
  if (tempFilePaths) {
    let result = await uploadClaudinaryImage(tempFilePaths);
    image = result;
    for (imagen in data.files) {
      try {
        console.log(data.files[imagen].tempFilePath);
        await fsExtra.unlink(data.files[imagen].tempFilePath);
      } catch (error) {
        throw error;
      }
    }
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

//todo FUNCION PARA ELIMINAR UNA IMAGEN
deleteImage = async (id, data) => {
  let publicIdToDelet = data.data;
  try {
    for (const propiedad in publicIdToDelet) {
      let imagenToDelet = await Project.findByIdAndUpdate(
        id.id,
        {
          $pull: { image: { public_id: publicIdToDelet[propiedad].public_id } },
        },
        { new: true }
      );
    }
    let imagenDeleted = await deleteClaudinaryImages(data.data);
    return imagenDeleted;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createProject,
  getProjects,
  getProjectById,
  editProject,
  deleteProject,
  deleteImage,
};
