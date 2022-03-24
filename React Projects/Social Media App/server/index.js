import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import PostRoutes from './routes/posts.js';

const app = express();

app.use('/posts', PostRoutes);

app.use(bodyParser.json({limit: "30mb", extended:true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended:true}));
app.use(cors());


const CONNECTION_URL = 'mongodb+srv://ewooral:OWusu123@cluster0.tua5o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 3000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((err) => console.log(err.message));


    // mongoose.connect(CONNECTION_URL).then(()=>{console.log('Connected to database')}).catch(err=>{console.log(err.message)});
// mongoose.set('useFindAndModify', true); 