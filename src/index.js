import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Store from './redux/state';
import App from './App';

const tempRen = () => {
    return ReactDOM.render(
        <App 
            state={Store.GetState()} 
            getStickers={Store.GetStickers} 
            removeSticker={Store.RemoveSticker}
            sendNewStiker={Store.SendNewStiker}
            ChangeMiniWorks={Store.ChangeMiniWorks}
        />, 
        document.getElementById('root')
    );
}

Store.Subscribe(tempRen);


Store.Rendering();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
