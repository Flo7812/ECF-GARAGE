const User = require('./User/user')
const UserRole = require('./User/userRole')
const Car = require('./Car/car')
const Seller = require('./Car/seller')
const Brand = require('./Car/brand')
const Model = require('./Car/model')
const Motor = require('./Car/motor')
const Image = require('./Car/imagesCar')
const Testimony = require('./Testimony/testimony')
const TestimonyStatus = require('./Testimony/testimonyStatus')
const Section = require('./Sections/section')
const SectionPage = require('./Sections/sectionPage')
const SchedulesWeek = require('./Schedules/SchedulesWeek')
const SchedulesDay = require('./Schedules/schedulesDay')
const SchedulesTimeRange = require('./Schedules/schedulesTimeRange')
const Message = require('./Messages/Message')

module.exports =  DBModels = {
        User,
        UserRole,
        Car,
        Seller,
        Brand,
        Model,
        Motor,
        Image,
        Testimony,
        TestimonyStatus,
        Section,
        SectionPage,
        SchedulesWeek,
        SchedulesDay,
        SchedulesTimeRange,
        Message
        }



