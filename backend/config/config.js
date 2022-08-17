const mongoose = require('mongoose');


exports.connectDatabase = async () =>{
    try {
       await mongoose.connect(process.env.MONGO_CONNECTION_URL)
       .then(con => console.log('Database is connected'))
    } catch (error) {
        console.log(error)
    }
}