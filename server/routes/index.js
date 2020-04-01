const router = require('express').Router()
const userRouter = require('./userRouter')
const bookRouter = require('./bookRouter')
const { authentication } = require('../middlewares/authentication')

router.get('/',(req,res,next)=>{
    res.json({message:'welcome to app'})
})

router.use('/users',userRouter)

router.use(authentication)
router.use('/books',bookRouter)



module.exports = router