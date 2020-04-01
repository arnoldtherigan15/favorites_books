const router = require('express').Router()
const bookController = require('../controllers/bookController')

router.get('/',bookController.findAll)
router.get('/:id',bookController.findOne)
router.post('/',bookController.create)


module.exports = router