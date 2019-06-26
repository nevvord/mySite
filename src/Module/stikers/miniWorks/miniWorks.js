import React from 'react';
import axios from 'axios';


let postData = (event) => {
    let url = `http://localhost:30012/work/mini/${event.target.id}/${event.target.value}`;
    let bodyJson = event.target.checked ? {"checked": true} : {"checked": false};
    console.log(bodyJson);
    
    axios
        .put(url, bodyJson)
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
}


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
                    onChange={postData}   
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