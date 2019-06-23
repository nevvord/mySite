import React from 'react';

class Sticker extends React.Component {

    stickers = {
        works: []
    }

    GetImport() {
        
            return <h1>kek</h1>;
        
    }
    render() {
        return (
            <div className="sticker" > 

                <form onSubmit={this.props.getMethod}>
                    <button>Жми</button>
                </form>
                <div className="stickerHeader">
                    <div className="stickerName">Блок авторизации и регистрации пользователя</div>
                    <div className="stickerAuthor">Nevvord</div>
                     <div className="stickerDate">22.06.2019</div>
                </div>
                <ul className="stikerWorkList"> 
                    <li><label className="stikerWorkListText"><input type="checkbox" className="stickerCB"></input>Регистрация</label></li>
                    <li><label className="stikerWorkListText"><input type="checkbox" className="stickerCB"></input>Верстка</label></li>
                    <li><label className="stikerWorkListText"><input type="checkbox" className="stickerCB"></input>Авторизация</label></li>
                    <li><label className="stikerWorkListText"><input type="checkbox" className="stickerCB"></input>Востановление пароля</label></li>
                </ul>
            </div>
        )
    }
} 

export default Sticker;