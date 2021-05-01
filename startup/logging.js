require('express-async-errors')
// const winston = require('winston')

// module.exports = function() {
//     const logger = winston.createLogger({
//         level: 'info',
//         format: winston.format.json(),
//         defaultMeta: { service: 'user-service' },
//         transports: [  
//           new winston.transports.Console(),
//           new winston.transports.File({ filename: 'combined.log' }),
//         ],
//     });
    
//     //require('winston-mongodb')
//     //Add log to database
//     //winston.add(new winston.transports.MongoDB({db:'mongodb://localhost/vidly' }))
    
//     process.on('uncaughtException', (ex)=>{
//         console.log('We got an uncaught exception.')
//         logger.error(ex.message, ex)
//     })
    
//     process.on('unhandledRejection', (ex)=>{
//         throw ex
//     })
// }
