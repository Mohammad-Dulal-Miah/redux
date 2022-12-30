const {createStore} = require("redux");


//state
const counter = {
    count:0
}

//increment and decrement action --> In function --> return object
const incrementCount = ()=>{
    return {
        type:'INCREMENT'
    }
};

const decrementCount = ()=>{
    return {
        type:'DECREMENT'
    }
}

//reducer --> pure function

const reducer = (state=counter , action)=>{

    switch(action.type){
        case 'INCREMENT':
            return{
                ...state,
                count:state.count+1
            };
             break;

        case 'DECREMENT':
            return {
                ...state,
                count:state.count-1
            };
            break;
        default:
            return{
                ...state,
                count:state.count+0
            }
    }
}


//create store

const store = createStore(reducer);


store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(incrementCount())
store.dispatch(incrementCount())
store.dispatch(incrementCount())
store.dispatch(decrementCount())