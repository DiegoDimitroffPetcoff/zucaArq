const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const upload = require("../utils/unploads");

const indexRoute = require("../routes/indexRoute");
const routerProjects = require("../routes/crudProjects");


const app = express();
app.use(cors());
app.use(express.json());
app.use(indexRoute);
app.use(routerProjects);


app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./uploads",
  })
);

app.post("/upload", (req, res) => {
  console.log(req.files);
  if (!req.files) {
    return res.status(400).send("No files were uploaded.");
  }

  const file = req.files.file;

  file.mv(`./uploads/${file.name}`, (err) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send("File uploaded!");
  });
});

app.post("/upload2", async (req, res) => {
  console.log(req.files);
  console.log(await upload(req));
  let data = upload(req);
  res.send(data);
});

module.exports = app;
