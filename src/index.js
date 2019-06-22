import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock from './App';
import Button from './button';
import * as serviceWorker from './serviceWorker';


class Apps extends React.Component {
    render() {
        return (
            <div className="wreapper">
                <Clock />
                <Button />
            </div>
        )
    }
}

ReactDOM.render(<Apps />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
