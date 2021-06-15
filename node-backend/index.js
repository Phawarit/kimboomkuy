let express = require('express'),
path = require('path'),
mongoose = require('mongoose'),
cors = require('cors'),
bodyParser = require('body-parser'),
mongoDb = require('./database/db')

mongoose.Promise = global.Promise;
mongoose.connect(mongoDb.db,{
    userNewUrlParser:true,
    userFindAndModify:false,
    userUnifiedTopology:true
}).then(() =>{
    console.log('Database successfully connected');
}), error =>{
    console.log('Database error: ' + error)
}
 const productRoute = require('./routes/product.routes')

 const app = express();
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({
     extended: false
 }))
 app.use(cors());

 //static directory path
 app.use(express.static(path.join(__dirname, 'dist/')))
 //base route
 app.get('/', (req,res) =>{
     res.sendFile(path.join(__dirname, 'dist/index.html'))
 })

 //API root
 app.use('/api', productRoute);

 //port
 const port = process.env.POST || 8000;

 app.listen(port, () =>{
     console.log('listening on port ' + port)
 })

 //404 handler
 app.use((req, res, next) =>{
     next(createError(404));
 })

 //error handler
 app.use(function(err, req, res, next){
     console.error(err.message);
     if (!err.statusCode) err.statusCode = 500;
     res.status(err.statusCode).send(err.message)
 })

