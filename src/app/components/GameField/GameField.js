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
            if (speed && !this.state.rotating) {
                if (this.props.button) {
                    this.rotate(speed);
                    this.setState({rotating: true});
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
            const video = _.get(this.props.receive, 'video');
            if (video && !this.props.button) {
                if (video === this.state.video) {
                    this.setState({video: null});  
                } else {
                    this.setState({video});  
                }
                            
            }
        }
    }
   
    startRotate = (speed = randomizeSpeed()) => {
        if (this.props.button && !this.state.rotating) {
            this.props.send({ rotate: speed })
        } else if (!this.state.rotating){
            Player.play();
            this.rotate(speed);
            this.setState({rotating: true});
        }
    }

    stopRotate = () => {
        console.log('stop');
        if (!this.props.button) {
            Player.stopPlay();
            this.setState({sound: null})
        } 
        this.setState({rotating: false})
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
        return <React.Fragment>
                <div className='game-field'>
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
            {this.state.video && <div className="video-player">
                <video height="800" width="1200" autoPlay controls onEnded={() => this.setState({video: null})}>
                    <source src="video/bb.mp4" type="video/mp4"></source>
                </video>
                </div>}   
        </React.Fragment>
    }
}

export default GameField;