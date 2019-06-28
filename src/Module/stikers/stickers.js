import React from 'react';
import Sticker from './stiker';
import AddSticker from './addStiker/addSticker';
import './Stikers.css';


class Stickers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {rightBoxTugle: false, addBoxTugle: false};
    }

    

    componentDidMount () {
        this.props.getStickers();  
    }
   
    render() {
        const openRightBarBox = () => {
            if (this.state.rightBoxTugle === true) {
                    this.setState({
                        rightBoxTugle : false
                    })
                }else{
                    this.setState({
                        rightBoxTugle : true
                    })  
            }           
        }

        const openBoxAddSticker = () => {
            if (this.state.openBoxAddSticker === true) {
                this.setState({
                    openBoxAddSticker : false
                })
            }else{
                this.setState({
                    rightBoxTugle : false,
                    openBoxAddSticker : true
                })  
        }
            
        }
        const list = this.props.state.stickers.map((item, index) => { 
                 
            return  <Sticker 
                        key={index}
                        id={item._id} 
                        title={item.title}  
                        author={item.author} 
                        date={item.date} 
                        miniWork={item.miniWork}
                        removeSticker={this.props.removeSticker}

                    />
        })
        
        return(        
            <div className="stickerBlock">
                <div className="stickerNav">
                    <div className="stickerNavBox" onClick={openRightBarBox}>
                        <div className="leer1"></div>
                        <div className="leer2"></div>
                        <div className="leer3"></div>
                    </div>
                    {this.state.rightBoxTugle === true &&
                        <div className="stikerNavFun">
                        <ul>
                            <li onClick={openBoxAddSticker}>Add</li>
                        </ul>
                    </div>
                    } 
                </div>
                {list}
                {this.state.openBoxAddSticker === true &&
                <div>
                    <div className="addStickerBlock" onClick={openBoxAddSticker}></div>
                    <div className="addStickerBox">
                        <AddSticker />
                    </div>
                </div>
                }
            </div>
        )
    }
}

export default Stickers;