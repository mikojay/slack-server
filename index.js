const express = require('express')

const app = express()

app.get('/messages', (req,res) => {
	res.send('hello')
})
app.listen(4000,() => {
	console.log('Server listening on Port 4000');
})
