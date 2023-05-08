const fileUpload = require("express-fileupload");

function upload(data) {
  if (!data.files) {
    return "No files were uploaded.";
  }
  const file = data.files.file;
  let info = file.name;
  return info;
}

module.exports = upload;
