const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const PORT = process.env.PORT || 1988

/*********** Server ********************/
const api = express()

api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: true }));
api.use(cors());

/********** Middlewares requires *********************************/

const checkTokenAccess = require('./Middleware/in/checkTokenAccess')
const checkRoleAccess = require('./Middleware/in/checkRoleAccess')

/********** Start server and DB **********/

api.listen(PORT, async()=>{
    console.log(`Server running on PORT: ${PORT} connected`);
    require('./DB/Connection/syncSeq')
})

/********** Controllers Requires ******/

// const { getCardsCars } = require('./Controllers/cars/carsC')
// const { getValidateTestimonials } = require('./Controllers/Testimonials/testimonialsC')
const { getSectionsHome } = require('./Controllers/sections/sectionsC')

/*********** Router Requires **********/

const cars_router = require('./Routes/Public/cars')
const sections_router = require('./Routes/Public/sections')
const testimony_router = require('./Routes/Public/testimonials')
const shedules_router = require('./Routes/Public/shedules')

const login_router = require('./Routes/Public/login')
const user_router = require('./Routes/Private/USER/dashboard_UR')
const admin_router = require('./Routes/Private/ADMIN/dashboard_AR')


/*********** Router **********/
api.get('',(req, res)=>{
    res.send('hello from node')
})
api.use('/home', getSectionsHome)
api.use('/cars', cars_router)
api.use('/services', sections_router)
api.use('/testimonials', testimony_router)
api.use('/schedules', shedules_router)

api.use('/login', login_router)
api.use('/user',checkTokenAccess , user_router)
api.use('/admin',checkTokenAccess , checkRoleAccess, admin_router)

api.get('*',(req, res)=>{
    res.status(404).send('Nothing to do here!')
})