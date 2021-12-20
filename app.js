const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const router = require('./Router/index');

const app = express();

const port = 1910;
const hostname = 'localhost';
//const localDBUrl = 'mongodb://127.0.0.1:27017/zomato_21';
//const atlasDBUrl = 'mongodb+srv://zomato_user_21:4se6xLUPChY35okT@cluster0.zcikl.mongodb.net/TestDB?retryWrites=true&w=majority'
const localDBUrl='mongodb://127.0.0.1:27017/db_edureka';
const atlasDBUrl='mongodb+srv://lavanya:lav2020@cluster0.soajy.mongodb.net/db_edureka?authSource=admin&replicaSet=atlas-95f5rx-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true'

// CORS - Cross Origin Resource Sharing 

app.use(cors());
app.use(express.json());
app.use('/api', router);

mongoose.connect(atlasDBUrl, {
    useNewUrlParser: true, useUnifiedTopology: true
})
    .then(res => {
        app.listen(port, hostname, () => {
            console.log(`Server is running at ${hostname}:${port}`)
        });
    })
    .catch(err => console.log(err));

