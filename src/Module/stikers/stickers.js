import React from 'react';
import { async } from 'q';
import Sticker from './stiker';


class Stickers extends React.Component {

    getWorks = async (e) => {
        e.preventDefault();
        const apiUrl = await fetch(`http://localhost:30012/works`, {mode: 'cors'});
        const data = await apiUrl.json();
        console.log(data);
        
    }

    render() {
        return (
            <div className="stickerBlock">
                <Sticker getMethod={this.getWorks} />
            </div>
        )
    }
}

export default Stickers;