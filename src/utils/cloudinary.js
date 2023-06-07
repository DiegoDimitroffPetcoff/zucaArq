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
  for (let data in images) {
    const public_id = images[data].public_id;
    cloudinary.uploader.destroy(public_id, (error, result) => {
      if (error) {
        console.error("Error al eliminar la imagen:", error);
      } else {
        console.log("La imagen se eliminó correctamente:", result);
      }
    });
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
