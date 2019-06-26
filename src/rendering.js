import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {getStickers} from './redux/state';
import {removeSticker} from './redux/state';

export let Rendering = (state) => {
    return ReactDOM.render(<App state={state} getStickers={getStickers} removeSticker={removeSticker} />, document.getElementById('root'));
}