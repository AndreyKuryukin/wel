import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';

class Button extends React.Component {
  constructor() {
    super(...arguments);
                }
   render() {
   return <button className='clickButton' onClick={() => {this.props.callBack()}}> {this.props.title} </button>
   }
}

class HelloWorld extends React.Component {
    constructor() {
    super(...arguments);
    this.state = {text: 'HELLO WORLD', buttonProps: {callBack: () => this.setState({text: 'Clicked'})}};
    }
    render() {
        return <div>
        <span> {this.state.text} </span>
        <Button title={this.state.text} {...this.state.buttonProps}/>
        </div>
    }
}




ReactDOM.render(<HelloWorld/>, document.getElementById('root'));
