const express = require ('express');
const cors = require('cors')
const fileUpload =  require('express-fileupload')



const indexRoute = require('../routes/indexRoute')
const routerProjects = require('../routes/crudProjects')

const app= express()
app.use(cors())
app.use(express.json())
app.use(indexRoute)
app.use(routerProjects)

app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : './uploads'
  }));

module.exports= app