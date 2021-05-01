const mongoose = require('mongoose')
const winston = require('winston')
const config = require('config')

// const logger = winston.createLogger({
//     level: 'info',
//     format: winston.format.json(),
//     defaultMeta: { service: 'user-service' },
//     transports: [],
// });

//for testing db
async function Connect(params) {
    return await mongoose.connect(config.get('db'),{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:false,
        useCreateIndex:true,
    })
}
const db = config.get('db')
Connect(db)
    .then(()=>console.log('Conneted to '+db))
    .catch(err=>console.log(err))


/* async function Connect(params) {
    return await mongoose.connect('mongodb://localhost/vidly',{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:false,
        useCreateIndex:true,
    })
} 

Connect()
    .then(()=>console.log('Conneted to MongoDB..'))
    .catch(err=>console.log(err))
*/