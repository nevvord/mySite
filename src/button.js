import React from 'react';
import logo from './logo.svg';
import './App.css';

class Button extends React.Component {
    constructor(props) {
        super(props)
            this.myClick = this.myClick.bind(this);
        
    }

    myClick() {
        document.getElementsByClassName('wreapper')[0].style.backgroundColor = "#952"
    }

    render(){
        return(
            <button onClick={this.myClick} className="clicker">Изменить дизайн</button>
        )
    }
}

export default Button;