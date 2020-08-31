const express = require('express');
const cors = require('cors');
const path = require('path')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

//use bodyParser to support app/json post data
app.use(express.static(path.join(__dirname, '/client/build')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const uri = process.env.ATLAS_URI 
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
    );
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully!")
});

// sets up page requests
//const articleRouter = require('./routes/articles');
//const minutesRouter = require('./routes/minutes');
//const resourcesRouter = require('./routes/resources')

const getPage = async (req, res) => {
    console.log("getting page request")
    console.log(req.params.id)
    res.send(report)
}

//app.use('/articles', articleRouter);
//app.use('/minutes', minutesRouter);
//app.use('/resources', resourcesRouter)
app.get('/article_page/:id', getPage)
app.get('*', (req, res) => {
    res.sendFile(path.resolve('./client/build/index.html'))
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
});