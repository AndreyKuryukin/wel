import React from 'react';

class Connector extends React.PureComponent {

    state = {};

    componentDidMount() {
        this.connect();
    }

    connect = () => {
        const socket = new WebSocket(`ws://${location.hostname}:8001`);

        socket.onopen = (e) => {
            this.setState({ connected: true });
            this.socket = socket;
        };

        socket.onmessage =  (event) => {
            this.setState({ receive: JSON.parse(event.data) });
        };

        socket.onclose =  (event) => {
            console.log(event);
            this.setState({ connected: false });
            setTimeout(() => {
                this.connect();
            }, 5000);
        };

        socket.onerror = (error) => {
            console.log(error);
            this.setState({ connected: false });
            setTimeout(() => {
                this.connect();
            }, 5000);
        };
    }

    send = (event) => {
        this.socket.send(JSON.stringify(event));
    }

    render() {
        const { send, state } = this;
        const { receive, connected } = state;
        const { children } = this.props;
        const childArray = React.Children.toArray(children).map(function (child) {
            const subChildren = React.Children.toArray(child.props.children).map((subChild) => { 
                return React.cloneElement(subChild, {...subChild.props, send, receive, connected});
            })
            return React.cloneElement(child, child.props, subChildren);
        });
        return <React.Fragment>
            {childArray}
        </React.Fragment>
    }
}

export default Connector;
