const {Router} = require('express')
const router = Router()

const {
    createProject,
    getAllProjects,
    getProjectByID,
    editProject,
    deleteProject
    
    }= require ('../controllers/crudControllersProjects.js')


//GET +++++++++++++++++++++++++++++++++++++++++++++++++
router.get('/projects', getAllProjects );
//GET BY ID+++++++++++++++++++++++++++++++++++++++++++
router.get('/project/:id',getProjectByID);


//todo POST CREATE+++++++++++++++++++++++++++++++++++++++++++++++++
router.post('/project', createProject);



//PATCH +++++++++++++++++++++++++++++++++++++++++++++++++
router.patch('/project/:id', editProject);


//todo DELETE +++++++++++++++++++++++++++++++++++++++++++++++++
router.delete('/project/:id', deleteProject);



module.exports= router;