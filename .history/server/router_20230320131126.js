const express=require('express')
const router=express.Router()
router.get('/', (req, res) => {
    console.log(req.complete);
    res.send('up and running!!')
    console.log(req.complete);    
})
router.get('*', (req, res)=>{
    res.send('ok')
})
module.exports=router