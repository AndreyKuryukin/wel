import ReactDOM from 'react-dom';
import React from 'react';
import GameField from './components/GameField';
import ControlPad from './components/ControlPad';
import Connector from './components/Connector';
import Table from './components/Table';

import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './styles.scss';

function Routes() {
    return <Router hashType="slash">
        <Switch>
            <Connector>
                <Route path="/" exact={true}>
                    <GameField />
                    <Table />
                </Route>
                <Route path="/control">
                    <ControlPad />
                </Route>
                <Route path="/button" >
                    <GameField button/>
                </Route>
            </Connector>
        </Switch>
    </Router>
}

ReactDOM.render(<Routes />, document.getElementById('root'));