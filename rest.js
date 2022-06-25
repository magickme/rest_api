const express = require('express')
const app = express()

const port = process.env.PORT || 3000

require('dotenv').config()
const pgtools = require('pgtools')

const config = {
    user: process.env.DB_USER_ID,
    host: process.env.DB_IP,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT
}

// create database

/* pgtools.createdb(config, "rest_api_db", function(err, res) {
    if (err) {
        console.error(err)
        process.exit(-1)
    }
    console.log(res)
}) */

// custom 404 page
app.use((req, res) => {
    res.type('text/plain')
    res.status(404)
    res.send('404 - Not Found')
})

// custom 500 page
app.use((err, req, res, next) => {
    console.error(err.message)
    res.type('text/plain')
    res.status(500)
    res.send('500 - Server Error')
})

app.listen(port, () => console.log(
    `REST API started on http://localhost:${port}; ` + `press Ctrl-C to terminate.`
))