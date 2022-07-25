// Importing module
const os = require('os');
const path = require('path');
// const { addition } = require ('./myModule');
const file = require('fs');
const { format } = require('date-fns');
const http = require('http'); 
const express = require('express');

// Open your terminal and run npm app
// console.log('Hello There');
// Example 1
// console.log('Global: ');
// console.log(global)
// console.log('__dirname & __filename');
// console.log(__dirname);
// console.log(__filename);
// OS

// console.log('OS');
// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());
// console.log('path');
// console.log(path.extname(__filename));
// console.log(path.parse(__filename));

// Example 2
// const addition = require('./myModule');
// console.log('Addition: ', addition(7, 9));

// Example 3
// file.readFile('./data.txt', 'utf8', (err, data)=>{
//     if(err) throw err;
//     // Display data
//     console.log(data);
// });
// console.log('Reading from a file');
// // Will be executed only if an error occurs
// process.on('uncaughtException', err=> {
//     console.log(err.message);
// });
// // Write to a file
// file.writeFile(path.join(__dirname,'./data.txt'), 'Example 3', err=> {
//     if(err) throw err;
//     console.log('Writing to a file');
// });
// // Append a content to a file
// file.appendFile(path.join(__dirname,'./data.txt'), '\nnew contents', err=> {
//     if(err) throw err;
//     console.log('Append a content to a file');
// });
// console.log('After installing nodemon');

// let currDate = format(new Date(), 'dd/MM/yyyy');
// console.log(currDate);

// Create a server
// const server = http.createServer( (req, res)=> {
//     // What will be the output format
//     res.setHeader('Content-type', 'text/html');
//     // To avoid issues with CORS
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     // All good
//     res.writeHead(200);
//     // When all is done
//     res.end("<p>Well done</p>");
// });
// const port = 3000;

// server.listen(port, ()=> {
//     console.log(`Server is running at port: ${port}`);
// });

// Using express module
// Creating an express web server app
const port = process.env.port || 3000;
const app = express();
// Create a router
const router = express.Router();
// Get method

// router.get('/', (req, res)=> {
//     res.sendFile(path.join(__dirname, 'views', 'index.html'));
// });
/*
We can make use of regular expressions on expressjs.
^/$ = must start and end with a slash
| => or
/index.html
Optional: (.html)?
*/
// router.get('^/$|/index(.html)?', (req, res)=> {
//     res.sendFile(path.join(__dirname, 'views', 'index.html'));
// });
// Next 
// router.get('/about.html', (req, res, next)=> {
//     console.log("Trying to access the about.html");
//     next();
// }, (req, res)=> {
//     res.sendFile(path.join(__dirname, 'views', 'index.html'));
// });
// Not found
// router.get('/*', (req, res)=> {
//     res.sendFile(path.join(__dirname, 'views', 'error.html'));
// });

// router.get('^/$|fetchUsers(.html)?', (req, res)=> {
//     res.sendFile(path.join(__dirname, 'views', 'users', 'fetchUsers.html'));
// });
// router.get('/fetchUsers/:id', (req, res)=> {
//     console.log("Retrieve a single record")
//     res.sendFile(path.join(__dirname, 'views', 'users', 'fetchUsers.html'));
// });
// // Post
// router.post('^/$|newUser(.html)?', (req, res)=> {
//     res.sendFile(path.join(__dirname, 'views', 'users', 'newUser.html'))
// });
// Delete
// router.delete('^/$|deleteRecord(.html)?/:id', (req, res)=> {
//     res.sendFile(path.join(__dirname, 'views', 'users', 'deleteRecord.html'))
// });
// Update
// router.put('^/$|updateUser(.html)?', (req, res)=> {
//     res.sendFile(path.join(__dirname, 'views', 'users', 'updateUser.html'))
// });


app.use(router);
app.listen(port, ()=> {
    console.log(`Server is running on port : ${port}`);
});
