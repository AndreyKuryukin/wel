import React from 'react';
import ReactDOM from 'react-dom';

const topics = [
  {
    name: 'Ethical and Professional Standards (1)',
    completion: 90,
    range: [80, 90]
  },
  {
    name: 'Ethical and Professional Standards (2)',
    completion: 75,
    range: [70, 80]
  },
  {
    name: 'Quantitative Methods',
    completion: 40,
    range: [35, 45]
  },
  {
    name: 'Economics',
    completion: 10,
    range: [10, 30]
  },
];

class Range extends React.Component {
  render() {
    const range = this.props.range;
    const bottom_start = 140 * range[0] / 100;
    return <div className="range_container">
      <span className="percentage">{range[0]}-{range[1]}</span>
      <div className="range_bar">
        <div className="range_fill" style={{bottom: `${range[0]}%`, height: `${range[1] - range[0]}%`}}/>
      </div>
    </div>
  }
}

class Completion extends React.Component {
  render() {
    const completion = this.props.completion;
    return <div className="completion_container">
      <span className="percentage">{completion}</span>
      <div className="completion_bar">
        <div className="completion_fill" style={{height: `${completion}%`, background: `${calculateColor(completion)}`}}/>
      </div>
    </div>
  }
}

function calculateColor(percentage) {
  switch (true) {
    case percentage <= 20:
      return "#e94221";
    case percentage <= 50:
      return "#f38a00";
    case percentage <= 75:
      return "#ffd600";
    case percentage <= 100:
      return "#5aba47";
  }
}

class Topic extends React.Component {
  render() {
    const {name, completion, range} = this.props;
    return <div className="topic">
      <div className="charts">
        <Completion completion={completion}/>
        <Range range={range}/>
      </div>
      <span className="title">{name}</span>
    </div>
  }
}

class TopicScore extends React.Component {
  render() {
    return <div className="topics_container">
      {topics.map(topic => <Topic {...topic}/>)}
    </div>
  }
}

ReactDOM.render(<TopicScore/>, document.getElementById('root'));
