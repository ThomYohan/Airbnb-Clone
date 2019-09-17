require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const authCtrl = require('./controllers/authCtrl')
const homesCtrl = require('./controllers/homesCtrl')

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET, S3_BUCKET, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION } = process.env

const app = express()

const aws = require('aws-sdk')




//Auth Endpoints
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.get('/auth/logout', authCtrl.logout)
app.get('/auth/user_data', authCtrl.userData)

//Homes Endpoints
app.get('/api/homes', homesCtrl.getHomes)
app.get('/api/cities', homesCtrl.getCities)
app.get('/api/city/:city_id', homesCtrl.getHomesByCity)
app.post('/grab-city-by-name', homesCtrl.getCityByName)

app.get('/api/listing/:property_id', homesCtrl.getListing)
app.get('/api/listing/bookings/:property_id', homesCtrl.getBookings)
app.post('/api/listing/bookings', homesCtrl.postBooking)

app.get('/api/topratedhomes', homesCtrl.getHomesTopRated)
app.get('/api/austinhomes', homesCtrl.getHomesAustin)
app.post('/api/createlisting', homesCtrl.createListing)
app.get('/api/eighthomes', homesCtrl.getEightHomes)
app.get('/api/lasthome', homesCtrl.getLastHome)