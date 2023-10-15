// import json-server in index.js file
const jsonserver = require('json-server')

// create a srever for the media player
const mediaPlayerServer = jsonserver.create()

// set up path/route from the json file
const router = jsonserver.router("db.json")

// returns middlewares used by json server
const middlewares = jsonserver.defaults()

// setup port for running server 
const port =4000 || process.env.PORT

// use middlewares and router in server
mediaPlayerServer.use(middlewares)
mediaPlayerServer.use(router)

// to listen server fro resolving request from client
mediaPlayerServer.listen(port,()=>{
    console.log(`Media player server started at port ${port}, and waiting for client request!!!`);
})