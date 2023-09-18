const express = require('express');
const mongoose = require('mongoose'); 
const dotenv = require('dotenv');
const router = require('./routes/userRoutes');
const blogRouter = require('./routes/blogRoutes')
dotenv.config();  
const app = express();

app.use(express.json());

app.use('/api/users', router);
app.use('/api/blogs', blogRouter);

// Connect to MongoDB
mongoose
    .connect(
        process.env.mongo_uri,
        { useNewUrlParser: true }
    )
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));



app.listen(3000, () => {
    console.log('Server is running on port 3000');
})