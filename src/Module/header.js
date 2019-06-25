import React from 'react';

class Header extends React.Component {
    kek() {
        console.log('hi')
    }


    render() {
        return (
            <div className="header"> 
                <div className="virtButton" onClick={this.kek}>Стикеры</div>
            </div>
        )
    }
}

export default Header;