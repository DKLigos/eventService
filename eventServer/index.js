const express = require('express')
const path = require('path')
const sequelize = require('./utils/database')
const cors = require('cors')
const app = express()
const eventRoutes = require('./router/route')
const PORT = process.env.Port || 3000
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
    methods: "GET, POST"
}
app.use(cors(corsOptions))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use('/api', eventRoutes)
app.use( (req, res, next) => {
    res.sendFile('/index.html');
} )

async function start(){
    try {
        await sequelize.sync()
        app.listen(PORT)
    } catch (e){
        console.log(e)
    }
}

start()


