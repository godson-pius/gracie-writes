const mongoose = require('mongoose');
const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
// const fileUpload = require('express-fileupload');

const adminRoute = require('./routes/adminRoute')
const blogRoute = require('./routes/blogRoute')
const categoryRoute = require('./routes/categoryRoute')
const commentRoute = require('./routes/commentRoute');
// const { uploadImage } = require('./helpers/upload');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// EXPRESS MIDDLEWARES
app.use(cors({ origin: '*'}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(fileUpload({
//     createParentPath: true,
//     limits: { 
//         fileSize: 2 * 1024 * 1024 * 1024 //2MB max file(s) size
//     },
// }))

app.use(express.static('public'))

app.use("/api/admin/auth", adminRoute)
app.use("/api/blog", blogRoute)
app.use("/api/category", categoryRoute)
app.use("/api/comment", commentRoute)

// app.get("/api/upload/key", async (req, res) => {
//     const key = process.env.CLOUDINARY_API_KEY
//     res.send({ key })
// })


// BACKEND SETUP
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}, () => {
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`)
    })    
})


// DEFAULT ROUTE
app.get('/', (req, res) => {
    res.send("<h3>Api running...</h3>")
})


