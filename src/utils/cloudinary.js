const cloudinary = require("cloudinary").v2;
const config = require("../config/config");
cloudinary.config({
  cloud_name: config.CLOUD_NAME,
  api_key: config.API_KEY,
  api_secret: config.API_SECRET,
  secure: true,
});

async function uploadClaudinaryImage(filePaths) {
  //I' ll recieve the array content with all the imagens called filePaths
  let images = []; // I create the imagen Content

  for (let i = 0; i < filePaths.length; i++) {
    // I loop through the array to get each imagen value needed
    img = await cloudinary.uploader.upload(filePaths[i], {
      folder: "zucaArqProjects",
    });
    images.push({ url: img.url, public_id: img.public_id });
  }
  //I send the content with all the images
  return images;
}

async function uploadClaudinaryImageProfile(filePath) {
  return await cloudinary.uploader.upload(filePath, {
    folder: "zucaArqProfile",
  });
}

async function deleteClaudinaryImage(publicID) {
  return await cloudinary.uploader.destroy(publicID);
}
//to delete severelas images
async function deleteClaudinaryImages(images) {
  //sicle for loop the images and delete one by one
  for (let image of images) {
    await cloudinary.uploader.destroy(image.public_id);
  }
}

async function deleteClaudinaryImageProfile(publicID) {
  return await cloudinary.uploader.destroy(publicID);
}
module.exports = {
  uploadClaudinaryImage,
  deleteClaudinaryImage,
  deleteClaudinaryImages,
  uploadClaudinaryImageProfile,
  deleteClaudinaryImageProfile,
};
