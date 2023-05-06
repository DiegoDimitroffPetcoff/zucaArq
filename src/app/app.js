const express = require ('express');
const cors = require('cors')

const indexRoute = require('../routes/indexRoute')
const routerProjects = require('../routes/crudProjects')

const app= express()
app.use(cors())
app.use(express.json())
app.use(indexRoute)
app.use(routerProjects)



module.exports= app