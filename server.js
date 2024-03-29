require('dotenv').config();
const http = require('http');
const PORT = process.env.PORT || 3000

const server = http.createServer(require('./app'))

server.listen(PORT,
    () =>
        console.log(`server listening on http://localhost:${PORT}`)
)