import React from 'react';
import MiniWorks from './miniWorks/miniWorks';


class Sticker extends React.Component {
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
                <button id={this.props.id} onClick={this.props.removeSticker.bind(this)} >Удалить</button>
            </div>
        )
    }
} 

export default Sticker;