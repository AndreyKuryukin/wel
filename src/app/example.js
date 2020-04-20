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
        this.initPromise('user').then(body => this.setState({name: body.name}));
        this.initPromise('userInfo').then(body => this.setState({tel: body.tel, address: body.address}));
    }

    initPromise(url) {
        return fetch(`/${url}`)
            .then(data => data.json())
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
