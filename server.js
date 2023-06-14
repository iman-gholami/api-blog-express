const express = require('express');
const userRouter = require('./routes/user/userRoutes')
require('dotenv').config();
require('./config/DbConnect');


const app = express();




app.use('/api/v1/users/' , userRouter) ;








const PORT = process.env.PORT || 3000;
app.listen(PORT, (req, res) => {
    console.log(`listening on ${PORT}`)
})