const cloudinary = require("cloudinary").v2;
const config = require('../config/config')
cloudinary.config({
    cloud_name: config.CLOUD_NAME,
    api_key: config.API_KEY,
    api_secret: config.API_SECRET,
    secure: true
  });

 async function uploadClaudinaryImage(filePath) {
  return await cloudinary.uploader.upload(filePath, { folder: "zucaArq" });
}

async function uploadClaudinaryImageProfile(filePath) {
  return await cloudinary.uploader.upload(filePath, { folder: "zucaArqProfile" });
}

async function deleteClaudinaryImage(publicID) {
    return await cloudinary.uploader.destroy(publicID);
  }

  async function deleteClaudinaryImageProfile(publicID) {
    return await cloudinary.uploader.destroy(publicID);
  }
module.exports ={ uploadClaudinaryImage, deleteClaudinaryImage, uploadClaudinaryImageProfile, deleteClaudinaryImageProfile}