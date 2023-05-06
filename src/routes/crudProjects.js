const {Router} = require('express')
const router = Router()

router.get('/project', (req,res)=>{res.send("/project")});


module.exports= router;