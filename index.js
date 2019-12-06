const server = require('./server');
const port = process.env.PORT;

server.listen(port, () => console.log('server is listening, my guy! check it out at port ' + port) );