const 	express = require('express') // is the server itself // allows the client to connect to the server
		//session = require('express-sessions')
		bodyParser = require('body-parser') // Parses data to and from USER - db
		massive = require('massive')  // allows you to connect to db's
		cors = require('cors')
		port = 3000

//middleware

const app = module.exports = express();
app.use(bodyParser.json())
//app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('../frontend/public'))                             // <---- static allows you serve static files from your server to the client
app.use(cors())

//db connection

const conn = massive.connectSync({
	connectionString : "SandBox://postgres:password@localhost/postgres"
});
app.set('db', conn);
var db = app.get('db');




app.get('/api/products', function(req,res){
		
		console.log('from server')
	
	db.run("select * from products", function(err,responce){
		if(err){
			console.log(err)
		}else{
			console.log(responce)
			res.send(responce)
		}
	})
});












app.listen(port, function() {
	console.log("Alive and kicking on port ", port)
})