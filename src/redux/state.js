import axios from 'axios';
import {Rendering} from '../rendering';

let state = {
    stickers : []
}

export let getStickers = () => {
    axios.get(`http://localhost:30012/works`).then(res => {
            state.stickers = res.data;
            Rendering(state);
        });
}

export let removeSticker = (event) => { 
    const stickerId = event.target.id;
    axios.delete('http://localhost:30012/work/' + stickerId)
        .then(() => {  
            state.stickers = state.stickers.filter( u => u._id !== stickerId);    
            Rendering(state);
        }
    )
}

export default state;
