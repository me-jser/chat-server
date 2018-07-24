const  app = require('express')();
const http =  require('http').Server(app);
const io = require('socket.io')(http);
// routers
const index = require('./app/routes/index')
const chatting = require('./app/routes/chatting')
const friends = require('./app/routes/friends')
app.use('/', index)
app.use('/chatting', chatting)
app.use('/friends', friends)

io.on('connection', function(socket){
    console.log('a user connected');
});
http.listen(3000, function() {
    console.log('listening on *:3000');
}).on('error', e =>{
    console.log('ops! error:'+e.message)
})