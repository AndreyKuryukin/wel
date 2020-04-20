import React from "react";

class Example extends React.Component {

    constructor() {
        super();
        this.state = {};

        Promise.all([
            this.getData('/user'),
            this.getData('/userInfo'),
            this.getData('/userStatus')
        ]).then(([user, info, status]) => this.setState({...user, ...info, ...status}));
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
