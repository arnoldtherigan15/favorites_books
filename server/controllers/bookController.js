const { Book } = require('../models')

class BookController {
    static findAll (req,res,next) {
        let { id } = req.loggedUser
        Book.findAll({
            where: {
                userId: id
            }
        })
            .then(data => {
                res.status(200).json({
                    Books: data
                })
            })
            .catch(next)
    }
   
    static findOne (req,res,next) {
        let { id } = req.params
        Book.findByPk(id)
            .then(data => {
                res.status(200).json({
                    id: data.id,
                    title: data.title,
                    imgUrl: data.imgUrl
                })
            })
            .catch(next)
    }

    static create (req,res,next) {
        let { title,imgUrl } = req.body
        let { id } = req.loggedUser

        Book.create({ 
            title,
            imgUrl,
            userId:id 
        })
            .then(data => {
                res.status(201).json({
                    message: 'Books Created',
                    Book: data
                })
            })
            .catch(next)
    }
}

module.exports = BookController