const Profile = require("../dbs/mongodb/models/profile");
const upload = require("../utils/unploads");
const {
  uploadClaudinaryImageProfile,
  deleteClaudinaryImageProfile,
} = require("../utils/cloudinary.js");
const fsExtra = require("fs-extra");

createProfile = async (data) => {

  //upload function is gonna check if there are any imagen to upload
  //if there are not any image is gonna return:"No files has benn uploaded."
  let image = upload(data);
  const { title, description } = data.body;
  if (data.files?.file.tempFilePath) {
    let result = await uploadClaudinaryImageProfile(
      data.files.file.tempFilePath
    );
    //here, the image is gonna be replace by the imagen's info
    image = result;
    //here I'm gonna delete the file to do not save the file on the uploads folder
    await fsExtra.unlink(data.files.files);
  }
  if (!title) return "message: Title is required";
  try {
    const newProfile = new Profile({
      title,
      description,

      image,
    });
    const profileSaved = await newProfile.save();
    return profileSaved;
  } catch (error) {
    return error;
  }
};

getProfiles = async () => {
  return await Profile.find();
};

getProfileById = async (id) => {
  return await Profile.findById(id);
};

editProfile = async (id, update) => {
  return await Profile.findByIdAndUpdate(id, update, {
    new: true,
  });
};

deleteProfile = async (id, d) => {
  let imagenToDelete = await Profile.findById(id);
  if (imagenToDelete.image.public_id) {
    await deleteClaudinaryImageProfile(imagenToDelete.image.public_id);
  }

  return await Profile.findByIdAndDelete(id, d);
};

module.exports = {
  createProfile,
  getProfiles,
  getProfileById,
  editProfile,
  deleteProfile,
};
