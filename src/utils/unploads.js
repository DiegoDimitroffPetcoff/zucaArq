function upload(data) {
  //TODO falta validacion en caso de que se suba la imagen con otro nombre que no sea "file"
  if (!data.files) {
    return "No files has benn uploaded.";
  }
  const file = data.files.file;
  let info = file.name;
  return info;
}

module.exports = upload;
