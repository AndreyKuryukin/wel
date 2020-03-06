import React from 'react';
import './styles.scss';
import { randomizeSpeed } from '../../util';

class ControlPad extends React.PureComponent {

    state = {
        score: {}
    };

    rotate = () => {
        this.props.send && this.props.send({
            rotate: randomizeSpeed()
        })
    }

    playGong = () => {
        this.props.send && this.props.send({
            sound: 'gong'
        })
    }

    playIntro = () => {
        this.props.send && this.props.send({
            sound: 'intro'
        })
    }


    playBlackBox = () => {
        this.props.send && this.props.send({
            sound: 'blackbox'
        })
    }


    playCorrect = () => {
        this.props.send && this.props.send({
            sound: 'correct'
        })
    }


    playIncorrect = () => {
        this.props.send && this.props.send({
            sound: 'incorrect'
        })
    }

    playSound = (sound) => {
        this.props.send && this.props.send({ sound });
    }

    playVideo = (video) => {
        this.props.send && this.props.send({ video });
    }

    playStartTimer = () => {
        this.props.send && this.props.send({ timer: 'start' });
    }

    commitScore = () => {
        this.props.send && this.props.send({ score: this.state.score });
    }

    changeViewersScore = (points) => {
        this.setState({score: {...this.state.score, viewers: points}})
    }
    
    changePlayersScore = (points) => {
        this.setState({score: {...this.state.score, players: points}})
    }

    render() {
        return <div className='control-pad'>
            <div className="general-controls">
                <button onClick={this.rotate}>Rotate</button>
                <button onClick={() => this.playStartTimer()}>START</button>
            </div>
            <div className="sound-controls">
                <button onClick={this.playIntro}>Intro</button>
                <button onClick={this.playGong}>Гонг</button>
                <button onClick={this.playBlackBox}>Черный ящик</button>
                <button onClick={this.playCorrect}>Правильно!</button>
                <button onClick={this.playIncorrect}>Не правильно!</button>
                <button onClick={() => this.playSound('correct_2')}>Правильно 2!</button>
                <button onClick={() => this.playSound('zero')}>ZERO</button>
                <button onClick={() => this.playSound('gameover')}>Game Over</button>
            </div>
            <div className="score-control">
                <input
                    type="number"
                    id="score_viewers" 
                    onChange={(e) => this.changeViewersScore(Number(e.target.value))}
                    />
                <input
                    type="number"
                    id="score_players"
                    onChange={(e) => this.changePlayersScore(Number(e.target.value))}
                />
                <button onClick={() => this.commitScore()}>COMMIT</button>
            </div>
            <div className="video-control">
                <button onClick={() => this.playVideo('bb')}>Video</button>
            </div>
        </div>
    }
}

export default ControlPad;