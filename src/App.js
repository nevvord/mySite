import React from 'react';
import './App.css';
import Header from './Module/header';
import Stickers from './Module/stikers/stickers';




class Apps extends React.Component {
  render() {    
      return (
          <div className="wreapper">
              <Header />
              <Stickers state={this.props.state} getStickers={this.props.getStickers} removeSticker={this.props.removeSticker}/>
          </div>
      )
  }
}

export default Apps;
