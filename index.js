const express = require('express')

const app = express()

app.get('/api/messages', require('./controllers/get_messages'))

app.post('/api/messages', require('./controllers/post_messages'))

app.listen(4000,() => {
	console.log('Server listening on Port 4000');
})
