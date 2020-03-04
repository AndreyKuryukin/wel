import React from 'react';
import _ from 'lodash';

import { randomizeSpeed } from '../../util';

import Player from '../Player';

import './styles.scss';


class GameField extends React.PureComponent {

    state = {
        position: 0,
    }

    componentDidUpdate(prevProps) {
        if (prevProps.receive !== this.props.receive) {
            const speed = _.get(this.props.receive, 'rotate');
            if (speed) {
                if (this.props.button) {
                    this.rotate(speed);
                } else {
                    this.startRotate(speed);
                }
            }
            const sound = _.get(this.props.receive, 'sound');
            if (sound && !this.props.button) {
                if (sound !== this.state.sound) {
                    Player.play(sound, () => {
                        this.setState({sound: null});
                    });
                    this.setState({sound});
                } else {
                    Player.stopPlay();
                    this.setState({sound: null});
                }              
            }
        }
    }

   
    startRotate = (speed = randomizeSpeed()) => {
        if (this.props.button) {
            this.props.send({ rotate: speed })
        } else {
            Player.play();
            this.rotate(speed);
        }
    }

    stopRotate = () => {
        console.log('stop');
        if (!this.props.button) {
            Player.stopPlay();
            this.setState({sound: null})
        }
    }

    rotate = (speed = 100) => {
        if (speed > 1) {
            setTimeout(() => {
                speed = speed - 1;
                this.setState({ position: this.state.position + 0.2 * speed });
                this.rotate(speed);
            }, 100)
        } else {
            this.stopRotate();
        }
    }

    renderSector = (index) => {
        return <div className='slice' key={index}>
            <span className="sector-contents"
            >
                {index}
            </span>
            <div className='slice-contents'
                {...(index === 0 ? { style: { background: '#000000' } } : {})} />
        </div>
    }

    renderSectors = () => {
        const sectors = [];
        for (let i = 0; i < 12; i++) {
            sectors.push(this.renderSector(i))
        }
        return sectors
    }

    render() {
        return <div className='game-field'>
            <div className='game-circle'
                onClick={() => {
                    if (!this.clicked) {
                        this.clicked = true;
                    } else {
                        this.startRotate()
                    }
                }}
            >
                {this.renderSectors()}
            </div>
            <div className="arrow" style={{ transform: `rotate(${this.state.position}deg)` }}></div>
        </div>
    }
}

export default GameField;