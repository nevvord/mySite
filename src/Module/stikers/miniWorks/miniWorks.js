import React from 'react';
import axios from 'axios';

let MiniWorks = props =>{
    let list = props.miniWorks.map((item, index) => { 
      
    return (
        <li key={index} id={props.id}>
            <label className="stikerWorkListText" >
                <input 
                    
                    type="checkbox" 
                    className="stickerCB"
                    value={index}
                    id={props.id}
                    index={index}
                    defaultChecked={item.checked}
                    onChange={props.ChangeMiniWorks}   
                >
                </input>
                <span>{item.title}</span>
            </label>
        </li>
    )
})
    
    return list;
    
}
export default MiniWorks;