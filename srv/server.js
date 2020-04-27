// содежимое index.js
const http = require('http')
const port = 8081;

const User = {
    name: 'Ivan Ivanovich Ivanov',
    infoId: 1
};

const UserInfo = [{
    id: 1,
    tel: '89998887766',
    address: '123456, Russia, Nizhegorodskaya obl, Nizhniy Novgorod, Varvarskaya 40'
}, {
    id: 2,
    tel: '74658734685',
    address: '345344, Russia, Nizhegorodskaya obl, Nizhniy Novgorod, Gagarina 40'
}];

const requestHandler = (request, response) => {
    switch (request.url) {
        case '/user': {
            // Why there is a need in arrow function to get result from 'response.end(JSON.stringify(User))'?
            setTimeout(() => response.end(JSON.stringify(User)), 2000);
            break;
        }
        case '/userInfo?infoId=1': {
            const infoId = 1;
            const resBody = UserInfo.find(info => info.id === infoId)
            setTimeout(() => response.end(JSON.stringify(resBody)), 4000);
            break;
        }
        case '/userStatus': {
            const status = Math.random() < 0.5 ? 'OK' : 'NOK';
            setTimeout(() => response.end(JSON.stringify({status})), 6000);
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
