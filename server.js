const express = require('express');
const userRouter = require('./routes/user/userRoutes')
const postRoutes = require('./routes/post/postRoutes')
const categoryRoutes = require('./routes/categories/categoryRoutes')
require('dotenv').config();
// require('./config/DbConnect');


const app = express();




app.use('/api/v1/users' , userRouter) ;

app.use('/api/v1/posts' , postRoutes);

app.use('/api/v1/category' , categoryRoutes) ;






const PORT = process.env.PORT || 3000;
app.listen(PORT, (req, res) => {
    console.log(`listening on ${PORT}`)
})