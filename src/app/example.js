import React from "react";

//  HOME WORK
// Use lifecycle methods !!!
// fetch('/user'); // {id: '', name: ''};
// fetch('/userInfo'); // {tel, address};
//
// render() {
//     const user = this.state.user;
//     return <div>
//         <span>Name: {`${user.name}`}</span>
//         <span>Tel. :{`${user.tel}`}</span>
//         <span>Address: {`${user.name}`}</span>
//     </div>
// }

class Example extends React.Component {

    constructor() {
        super();
        this.state = {};
        Promise.all([
            this.getUser('user'),
            this.getUserInfo('userInfo')
        ]).then(([body1, body2]) => this.setState({...body1, ...body2}));
    }

    getUser(url) {
        return fetch(`/${url}`)
            .then(data => data.json())
            .then(body => {
                this.setState(body)
                return body;
            })
    }

    getUserInfo(url) {
        return fetch(`/${url}`)
            .then(data => data.json())
            .then((body) => {
               return new Promise((resolve) => {
                   setTimeout(() => {
                       resolve(body);
                   }, 5000)
               });
            })
    }

    render() {
        return <div>
            <div>User Name: {this.state.name}</div>
            <div>User Tel: {this.state.tel}</div>
            <div>User Address: {this.state.address}</div>
        </div>
    }
}

export default Example;
