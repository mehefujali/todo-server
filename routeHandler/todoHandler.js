const express = require('express');
const router = express.Router()


//// Get all tha todo 

router.get('/' , async(req,res)=>{
 res.send({
      status:true
 })
})


// Get a todo by id

router.get('/:id',async(req,res)=>{

})

//Post todo 

router.post('/' , async (req,res)=>{

})

//Post Multiple todo 

router.post('/all' , async (req,res)=>{

})

// Put todo 
router.put('/:id' , async(req,res)=>{

})

//Delete todo 
router.delete('/:id' , async(req,res)=>{

})

module.exports = router