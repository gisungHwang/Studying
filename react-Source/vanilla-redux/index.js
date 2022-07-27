import {legacy_createStore as createStore} from 'redux';

const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

const toggleSwitch = () => ({type: TOGGLE_SWITCH});
const increase = diff => ({type: INCREASE, diff});
const decrease = minus => ({type: DECREASE, minus});

const initialState = {
    toggle : false,
    counter: 0
};

function reducer(state = initialState, action) {  //state가 undefined일 때는 initialState가 기본값
    switch(action.type) {
        case TOGGLE_SWITCH:
            return {
                ...state,
                toggle: !state.toggle
            };
        case INCREASE:
            return {
                ...state,
                counter: state.counter + action.diff
            };
        case DECREASE:
            return {
                ...state,
                counter: state.counter - action.minus
            };
        default:
        return state;
}
}

const store = createStore(reducer);

const render = () => {
    const state = store.getState(); //현재 상태를 불러온다

    if (state.toggle) {
        divToggle.classList.add('active');
    } else {
        divToggle.classList.remove('active');
    }
    counter.innerText = state.counter;
};

render();
store.subscribe(render);

divToggle.onclick = () => {
    store.dispatch(toggleSwitch());
};

btnIncrease.onclick = () => {
    store.dispatch(increase(1));
};

btnDecrease.onclick = () => {
    store.dispatch(decrease(1));
};