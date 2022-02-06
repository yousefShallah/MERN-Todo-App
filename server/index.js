const express = require("express")
const mongoose = require("mongoose") // new
const app = express()
const dotenv = require('dotenv');
const MainRouter = require('./routes/index');
const cors = require('cors');
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});
app.use(cors())

dotenv.config();
const port = 5000
mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.once('open', () => console.log('Successfully connected to MongoDB'));
db.on('error', (e) => console.log(e));
    

app.use('/', MainRouter);


app.listen(port, (req, res) => {
	console.log(`Server has started on: https://localhost:${port}`)
})