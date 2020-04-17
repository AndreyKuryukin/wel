import React from "react";
import styles from './example.scss';
import classnames from 'classnames';

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

        this.initPromise()
            .then(result => `${result}-PROCCESSED`)
            .then(this.processPromise)
            .then(console.log)
            .catch((e) => {

            })
        this.state = {};
    }

    initPromise() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('RESOLVED');
            }, 5000);
        });
    }


    render() {
        const {result} = this.state
        console.log('Render');
        return <div>
            <span>{result}</span>
        </div>
    }

}

export default Example;