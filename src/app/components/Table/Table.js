import React from 'react';
import './styles.scss';

import Player from '../Player';

class Table extends React.PureComponent {

    state = {};

    componentDidUpdate(prevProps) {
        if (prevProps.receive !== this.props.receive) {
            const timer = _.get(this.props.receive, 'timer');
            if (timer && timer === 'start' && !this.state.timer) {
                this.tick(60);
                this.setState({ timer: true });
            }
            if (timer && timer === 'stop' && this.state.timer) {
                this.tick(0);
                this.setState({ timer: false });
            }
            const score = _.get(this.props.receive, 'score');
            if (score) {
                this.setState({ score });
            }
        }
    }


    tick = (left) => {
        this.setState({ left });
        switch (left) {
            case 60: {
                Player.play('start');
            }
            case 15: {
                Player.play('prepare');
            }
            case 0: {
                Player.play('stop');
                this.setState({ timer: false });
            }
        }
        this.timer = setTimeout(() => {
            if (left > 0) {
                this.tick(left - 1);
            }
        }, 1000);
    }


    render() {
        const {score = {}} = this.state;
        const {players = 0, viewers = 0} = score;
        return <div className="game-table">
            <div className="score">
                <span>
                    {viewers}
                </span>
                <span>
                    {players}
                </span>
            </div>
            <div className="timer">
                <span className="left-label">Осталось:</span>
                {this.state.left}
            </div>
        </div>
    }
}

export default Table;