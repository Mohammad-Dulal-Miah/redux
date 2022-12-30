const {createStore} = require("redux");

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
//create state
const numbers = {
    number:0
};

//actions
const incrementNumberAction = () =>{

    return{
        type: INCREMENT,
        payload:2
    }
}

const decrementNumberAction = () =>{

    return{
        type: DECREMENT,
        payload:1
    }
}


const reducer = (state=numbers , action)=>{

    switch(action.type){

        case INCREMENT:
            return {
                number:state.number+action.payload
            }
            break;
        case DECREMENT:
            return{
                number:state.number-action.payload
            }
            break;
        default:
            return {
                number:state.number
            }
    }
}


const store = createStore(reducer);

store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(incrementNumberAction())
store.dispatch(incrementNumberAction())
store.dispatch(incrementNumberAction())
store.dispatch(incrementNumberAction())
store.dispatch(decrementNumberAction())