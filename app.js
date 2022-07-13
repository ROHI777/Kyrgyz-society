const express = require('express')
const ejs = require('ejs')
const mongoose = require('mongoose')
const path = require('path')
const flash= require('connect-flash')

const router = require("./router")


const app = express()


app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/', router)
app.use(flash())

app.set('views', 'views')

app.set('view engine', 'ejs'),

    


// static files
app.use(express.static('public'))


module.exports = app