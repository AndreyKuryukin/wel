import React from "react";
import "babel-polyfill";

class Example extends React.Component {

    constructor() {
        super();
        this.state = {};
        this.fetchData().then((data) => this.setState(data));
        console.log('constructor');
    }

    async fetchData() {
        /*Promise.all([
            this.getData('/user'),
            this.getData('/userInfo'),
            this.getData('/userStatus')
        ]).then(([user, info, status]) => this.setState({...user, ...info, ...status}));*/
        const user = await this.getData('/user');
        console.log(user);
        const userInfo = await this.getData(`/userInfo?infoId=${user.infoId}`);
        console.log(userInfo);
        const userStatus = await this.getData('/userStatus');
        console.log(userStatus);
        return {...user, ...userInfo, ...userStatus};
    }

    getData(url) {
        return fetch(url).then(data => data.json());
    }

    getColor() {
        if (this.state.status === undefined) {
            return 'white';
        } else if (this.state.status === 'OK') {
            return 'green';
        } else return 'red';
    }

    render() {
        return <div style={{backgroundColor: this.getColor()}}>
            <div>User Name: {this.state.name}</div>
            <div>User Tel: {this.state.tel}</div>
            <div>User Address: {this.state.address}</div>
            <div>User Status: {this.state.status}</div>
        </div>
    }
}

export default Example;
