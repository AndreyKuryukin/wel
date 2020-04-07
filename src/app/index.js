import React from 'react';
import ReactDOM from 'react-dom';

const Comp = (props) => {
    return <div>
        <span>Hello</span>
        <h2>{props.word}</h2>
    </div>
};

ReactDOM.render(<Comp word="World"/>, document.getElementById('root'));
