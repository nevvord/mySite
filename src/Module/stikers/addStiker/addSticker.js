import React from 'react';
class Adder extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            lines: [
                {title: "", checked: false}
            ],
            title: ""
        }
    }
    render() {
        let sendSticker = () => {
            let bodyJson = {
                title: this.state.title,
                miniWork: this.state.lines
            }
            this.props.sendNewStiker(bodyJson)
        }

        let addLine = () => {
            this.setState({
                lines: [...this.state.lines, {title: ""} ]
            })
        }
        let inpTitleToState = (event) => {
            this.setState({
                title: event.target.value
            })   
        }
        let inpToState = (event) => {
            let arr = this.state.lines;;
            arr[event.target.name].title = event.target.value;
            this.setState({
                lines: [...arr]
            })  
        }

        let lines = this.state.lines.map((item, index) => {
                return <input onChange={inpToState} key={index} name={index} placeholder="WORK" required/>;
            })
        return(
            <div>
                <input onChange={inpTitleToState} name="title" pattern="kek" placeholder="TITLE" required/>
                {lines}

                <div className="blockAddMiniWork">
                    <button className="addMiniWorks" onClick={addLine}>ADD WORK</button>
                    <button className="sendMiniWorks" onClick={sendSticker.bind(this)}>SEND STICKER</button>
                </div>
            </div>
        )
    }
}
/*
for (let index = 0; index < 3; index++) {
    return <input name="mimiWorks" placeholder="WORK" required/>;
    
}
                {this.state.lines > 1 && <input name="mimiWorks" placeholder="WORK" required/>}
                {this.state.lines > 2 && <input name="mimiWorks" placeholder="WORK" required/>}
                {this.state.lines > 3 && <input name="mimiWorks" placeholder="WORK" required/>}
                {this.state.lines > 4 && <input name="mimiWorks" placeholder="WORK" required/>}
                {this.state.lines > 5 && <input name="mimiWorks" placeholder="WORK" required/>}
                {this.state.lines > 6 && <input name="mimiWorks" placeholder="WORK" required/>}
                {this.state.lines > 7 && <input name="mimiWorks" placeholder="WORK" required/>}
                {this.state.lines > 8 && <input name="mimiWorks" placeholder="WORK" required/>}
                {this.state.lines > 9 && <input name="mimiWorks" placeholder="WORK" required/>}
*/
export default Adder;