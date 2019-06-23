import React from 'react';
import { async } from 'q';
import Ssticker from './stiker';
import axios from 'axios';


class Stickers extends React.Component {

    state = {
        works : []
    }

    componentDidMount () {
        axios.get('http://localhost:30012/works').then(({ data }) => {
          this.state = {
            works : data
          };
        })
      }

    sticker() {  
        //const works = this.state.works.map((work) =>
        //console.log(this.state.works);
        
        return(
            <div className="sticker" > 
                <div className="stickerHeader">
                    <div className="stickerName">Блок авторизации и регистрации пользователя</div>
                    <div className="stickerAuthor"></div>
                    <div className="stickerDate">22.06.2019</div>
                </div>
                <ul className="stikerWorkList"> 
                    <li><label className="stikerWorkListText"><input type="checkbox" className="stickerCB"></input>Регистрация</label></li>
                    <li><label className="stikerWorkListText"><input type="checkbox" className="stickerCB"></input>Верстка</label></li>
                    <li><label className="stikerWorkListText"><input type="checkbox" className="stickerCB"></input>Авторизация</label></li>
                    <li><label className="stikerWorkListText"><input type="checkbox" className="stickerCB"></input>Востановление пароля</label></li>
                </ul>
            </div>
        );
    }

    huender() {
        return <h1>kek</h1>;
    }

    render() {
        return (
        //
            <div className="stickerBlock">
                <this.sticker />
            </div>
        )
    }
}

export default Stickers;