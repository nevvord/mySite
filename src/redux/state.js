import axios from 'axios';

let Store = {
    _state: {
        stickers: [],
        user: []
    },
    GetState(element) {
            return Store._state;
    },
    SetState(body) {
        console.log(body);
    },
    Rendering() {console.log("Rendering started")},
    Subscribe(observer) {
        Store.Rendering = observer;        
    },
    GetStickers() {
        axios.get(`http://localhost:30012/works`).then(res => {
            Store._state.stickers = res.data;
            Store.Rendering();
            }
        )
    },
    RemoveSticker(event) { 
        const stickerId = event.target.id;
        axios.delete('http://localhost:30012/work/' + stickerId)
            .then(() => {  
                Store._state.stickers = Store._state.stickers.filter( u => u._id !== stickerId);    
                Store.Rendering();
            }
        )
    },
    SendNewStiker(bodyJson) {
        axios.post('http://localhost:30012/work', bodyJson)
            .then(res => {
                Store.GetStickers();
            })
    },
    ChangeMiniWorks(event)  {
        let url = `http://localhost:30012/work/mini/${event.target.id}/${event.target.value}`;
        let bodyJson = event.target.checked ? {"checked": true} : {"checked": false};
        axios.put(url, bodyJson)
    }
}
export default Store;