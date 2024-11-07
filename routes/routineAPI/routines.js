const express = require('express')
const router = express.Router()

const RoutineController= require('../../controllers/routineController')

router.post('/',RoutineController.addRoutine)
router.get('/',RoutineController.getRoutines)

router.get('/day',RoutineController.getDayRoutines); // day in header
//add DELETE for specific day

router.delete('/item', RoutineController.deleteRoutineItem); 
router.patch('/item', RoutineController.updateRoutineItem); 

    


module.exports = router

