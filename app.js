    require('dotenv').config()
    const express = require('express')
    const cors = require('cors')
    const app = express()
    const { dbConnect } = require('./src/config/mongo')

    const PORT = process.env.PORT || 3035
    app.use(cors())
    app.use(express.json())

    dbConnect()
    app.listen(PORT, () => {
    console.log('API lista por el puerto ', PORT)
    })
