server.listen('4865')

const http = require('http')
const express = require('express')

const app = express()
app.use(express.static('public'))

app.set('port', '4865')

const server = http.createServer(app)
server.on('listening', () => {
 console.log('Listening on port 4865')
})

// Web sockets
const io = require('socket.io')(server)

io.sockets.on('connection', (socket) => {
	console.log('This Mothafucka here! : ' + socket.id)

	socket.on('mouse', (data) => socket.broadcast.emit('mouse', data))

	socket.on('disconnect', () => console.log('That Fool Bounced...'))
})

server.listen('4865')