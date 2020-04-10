import React from 'react';
import ReactDOM from 'react-dom';

const topics = [{
  name: 'topic name',
  completion: 80,
  range: [50, 60]
}];

class Completion extends React.Component {
  render() {
    const completion = this.props.completion;
    return <div>
      <span>{completion}</span>
      <div style={{height: 140, width: 18, background: "#cecece", display: "flex", flexDirection: "column-reverse"}}>
        <div style={{height: `${completion}%`, background: "#24a202"}}/>
      </div>
    </div>
  }
}

class Topic extends React.Component {
  render() {
    const {name, completion, range} = this.props;
    return <div>
      <div className="charts">
        <Completion completion={completion}/>
        {/*<Range range={range}/>*/}
      </div>
      <span>{name}</span>
    </div>
  }
}

class TopicScore extends React.Component {
  render() {
    return <div>
      {topics.map(topic => <Topic {...topic}/>)}
    </div>
  }
}

ReactDOM.render(<TopicScore/>, document.getElementById('root'));
