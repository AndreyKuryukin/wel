import React from 'react';
import ReactDOM from 'react-dom';

// import PredictedScores from './chart';
import Example from './example';

const topicsScores = [
    {
        name: 'Topic name 1',
        range: [10, 20],
        completion: 60
    },
    {
        name: 'Topic name 2',
        range: [50, 60],
        completion: 80
    },
    {
        name: 'Topic name 3',
        range: [30, 50],
        completion: 70
    },
];

ReactDOM.render(<Example text="sdf"/>, document.getElementById('root'));
