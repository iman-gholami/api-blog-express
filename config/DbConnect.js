const mongoose = require('mongoose');
const dbConnected = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('Db is connected');

    }catch(error){
        console.log('Db connection error');

    }
};


dbConnected()