/*********** Common options ***********/
const express = require('express');
const mongoose = require('mongoose')
const passport = require('passport')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const path = require('path');

/*********** MongoDB options ***********/
const dbOptions = require("./src/config/db");

/*********** Routes - REST ***********/
const mainRoutes = require('./src/routes/main')
const aboutRoutes = require('./src/routes/about')
const contactsRoutes = require('./src/routes/contacts')
const authRoutes = require('./src/routes/AuthRoutes')
const userRoutes = require('./src/routes/UserRoutes')
const countryRoutes = require('./src/routes/CountryRoutes')
const cityRoutes = require('./src/routes/CityRoutes')
const contactRoutes = require('./src/routes/ContactRoutes')

/*********** Utils ***********/
// const users = require('./utils/users')
const port = process.env.PORT || 3000
const message = {
    start:`Server has been started on ${port}!`
}

/*********** Init ***********/
const app = express();
mongoose.connect(dbOptions.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=> console.log('MongoDB connected!'))
    .catch(error => console.log(error))

/*********** Express + Socket.IO ***********/
const httpServer = require('http').Server(app);
const io = require("socket.io")(httpServer);

/*********** Express options ***********/
app.use(passport.initialize())
require('./src/middleware/passport')(passport)
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, "./public")));
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

/*********** EJS Options ***********/
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, './src/views'));

/*********** EJS Template Routes ***********/
app.use('/', mainRoutes);
app.use('/about', aboutRoutes);
app.use('/contacts', contactsRoutes);

/*********** Express Routes - REST ***********/
app.use('/api/auth', authRoutes)
app.use('/api/user', userRoutes);
app.use('/api/country', countryRoutes);
app.use('/api/city', cityRoutes);
app.use('/api/contact', contactRoutes);

/*********** Server start ***********/
httpServer.listen(port, () => { console.log(message.start); });