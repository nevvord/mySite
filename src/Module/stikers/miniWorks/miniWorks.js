import React from 'react';



let MiniWorks = props =>{
    let list = props.miniWorks.map((item, index) => { 
    console.log(item);
    
    
            
    return (
        <li key={index} id={props.id}>
            <label className="stikerWorkListText" >
                <input 
                    type="checkbox" 
                    className="stickerCB"
                    valeu={index}
                    id={props.id}
                    defaultChecked={item.checked}     
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