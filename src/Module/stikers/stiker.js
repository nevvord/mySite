import React from 'react';
import MiniWorks from './miniWorks/miniWorks';
import axios from 'axios';

class Sticker extends React.Component {
    constructor (props) {
        super(props);
        
    }

    

    removeSticker (event) {
        const stickerId = event.target.id;
        console.log(stickerId);
        
        axios.delete('http://localhost:30012/work/' + stickerId).then(() => {
            console.log(stickerId);
          
        });
    }

   
    
    
    kek (event)  {
        //let changed = [event.target.id, event.target.defaultChecked];
        console.log(event.target.id);
        
        event.target.checked ? console.log('checked') : console.log('unChecked');
            
        
    }

    render() {
        
        return (
            <div className="sticker">
                <div className="stickerHeader">
                    <div className="stickerName">{this.props.title}</div>
                    <div className="stickerAuthor">{this.props.author}</div>
                    <div className="stickerDate">{this.props.date}</div>
                </div>
                <ul className="stikerWorkList">
                    <MiniWorks miniWorks = {this.props.miniWork} id={this.props.id}/>
                </ul>
                <button id={this.props.id} onClick={this.removeSticker.bind(this)}>Удалить</button>
            </div>
        )
    }
} 

export default Sticker;