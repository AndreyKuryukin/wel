import React from "react";
import './styles.scss';

const PredictedScores = (props) => {
    const {scores} = props;

    const renderCompletionBar = (completion) => {
        return <div className="completion-bar">
            <span className="completion-label">{completion}</span>
            <div className="bar">
                <div style={{
                    height: `${completion}%`,
                    background: 'red'
                }}/>
            </div>
        </div>
    };

    const renderScoreBar = (range) => {
        const [min, max] = range;
        const height = max - min;
        return <div className="score-bar">
            <span>{`${min} - ${max}`}</span>
            <div className="score">
                <div style={{
                    height: `${height}%`,
                    marginBottom: `${min}px`,
                    marginTop: `${max}px`,
                }} className="score-indicator"/>
            </div>
        </div>
    };

    const renderTopic = (topic) => {
        const {name, range, completion} = topic;
        return <div className="topic-score">
            <div className="topic-chart">
                {renderCompletionBar(completion)}
                {renderScoreBar(range)}
            </div>
            <span className="topic-name">{name}</span>
        </div>
    };

    return <div className="knewton-topics">
        <div className="chart-axis-y" max={100}>Score</div>
        <div className="topics-container">
            {scores.map(topic => renderTopic(topic))}
        </div>
    </div>
};

export default PredictedScores;