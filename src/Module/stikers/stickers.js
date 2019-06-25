import React from 'react';
//import { async } from 'q';
import Sticker from './stiker';
//import axios from 'axios';


class Stickers extends React.Component {
    /*constructor(props) {
        super(props);
    }*/

    state = {
        id:     undefined,
        author: undefined,
        title:  undefined,
        date:   undefined,
        miniWork: [],
        data: []
    }
    
    
    
    getWorks = async () => {
        const apiUrl = await fetch('http://localhost:30012/works');
        const data = await apiUrl.json();        
        this.setState({
            data: data
        })
    }
    componentDidMount () {
        this.getWorks();
    }
   
    render() {
        
        const list = this.state.data.map((item, index) => { 
            
                       
            return  <Sticker 
                        key={index} 
                        id={item._id} 
                        title={item.title}  
                        author={item.author} 
                        date={item.date} 
                        miniWork={item.miniWork}
                    />
        })
        
        return(        
            <div className="stickerBlock">
                {list}
            </div>
        )
    }
}

export default Stickers;