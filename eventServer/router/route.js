const Sequelize = require('sequelize')

const {Router} = require('express')
const Event = require('../models/event')
const router = Router()

router.get('/search/:string',async (req, res) => {
    try {
        const Op = Sequelize.Op;
        const string = req.params.string
        const event = await Event.findAll({
            where: {
                theme : {[Op.like] : `%${string}%`}
            }
        })
        console.log(event)
        res.status(200).json(event)

    } catch (e){
        console.log(e)
        res.status(500).json({
            message: 'Server error'
        })
    }
})

router.post('/add', async (req, res) => {
    try {
    const event =  await Event.create({
        fio: req.body.fio,
        department: req.body.department,
        listEvent: req.body.listEvent,
        theme: req.body.theme,
        description: req.body.description,
        currentDate: req.body.currentDate,
        currentTime: req.body.currentTime,
    })
        res.status(201).json({event})

    } catch (e){
        console.log(e)
        res.status(500).json({
            message: 'Server error'
        })
    }
})

module.exports = router
