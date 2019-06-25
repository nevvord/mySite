import React from 'react';
//import { async } from 'q';
import Sticker from './stiker';
import axios from 'axios';


class Stickers extends React.Component {
    /*constructor(props) {
        super(props);
    }*/

    state = {
        data: []
    }

    componentDidMount () {
        axios.get(`http://localhost:30012/works`).then(res => {
            console.log(res);;
            this.setState({data: res.data})
            
        })  
    }
   
    render() {
        const list = this.state.data.map((item, index) => {         
            return  <Sticker 
                        key={item._id} 
                        id={item._id} 
                        title={item.title}  
                        author={item.author} 
                        date={item.date} 
                        miniWork={item.miniWork}
                    />
        })
        
        return(        
            <div key={this.state.data.id} className="stickerBlock">
                {list}
            </div>
        )
    }
}

export default Stickers;