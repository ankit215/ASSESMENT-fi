var router=require('./router');
var express = require('express');
var app = express();
const bodyParser = require('body-parser');
//var urlencodedParser=bodyParser.urlencoded({extended: false});

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//app.use(bodyParser.json())
app.use(bodyParser.json());
app.use('/router',router);

app.listen(1454,()=>{
console.log('server is running on port no 4000');

})