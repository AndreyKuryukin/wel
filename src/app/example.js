import React from "react";
import styles from './example.scss';
import classnames from 'classnames';

function shouldAdd (text) {
    return text.length > 0;
}

export default function Example(props) {
    return <div className={classnames({
        [styles.example]: shouldAdd(props.text)
    })}>
        Parents
        <span className="child">Child</span>
    </div>
}