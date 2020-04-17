// содежимое index.js
const http = require('http')
const port = 8081;

const User = {
    name: 'Ivan Ivanovich Ivanov'
};
const UserInfo = {
    tel: '89998887766',
    address: '123456, Russia, Nizhegorodskaya obl, Nizhniy Novgorod, Varvarskaya 40'
};

const requestHandler = (request, response) => {
    switch (request.url) {
        case '/user': {
            response.end(JSON.stringify(User));
            break;
        }
        case '/userInfo': {
            response.end(JSON.stringify(UserInfo));
            break;
        }
    }
}
const server = http.createServer(requestHandler)
server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})