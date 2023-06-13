const mongoose = require('mongoose');
const dbConnected = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('Connected');

    }catch(error){
        console.log('Error connecting');

    }
};


dbConnected()