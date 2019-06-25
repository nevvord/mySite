import React from 'react';
import MiniWorks from './miniWorks/miniWorks';

class Sticker extends React.Component {
    /*constructor (props) {
        super(props);
        
    }*/

    kek (event)  {
        //let changed = [event.target.id, event.target.defaultChecked];
        console.log(event.target.p);
        
        if (event.target.checked) {
            console.log('checked');
            
        } else {
            console.log('unChecked');
            
        }
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
                        <form id={this.props.id} onChange={this.kek}>
                            <MiniWorks miniWorks = {this.props.miniWork} id={this.props.id}/>
                        </form>
                </ul>
            </div>
        )
    }
} 

export default Sticker;