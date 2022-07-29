import {createAction, handleActions} from 'redux-actions';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';


export const increase = () => ({type : INCREASE});
export const decrease = () => ({type : DECREASE});


const initialState = {
    number : 0
};

const counter = handleActions(  //아래 주석처리한것을 이렇게 간단하게 만들 수 있다.
    {
    [INCREASE]: (state, action) => ({number: state.number + 1}),
    [DECREASE]: (state, action) => ({number: state.number - 1}),
    },
    initialState,
);

// function counter(state = initialState, action) {
//     switch (action.type) {
//         case INCREASE:
//             return{
//                 number : state.number + 1
//             };
//             case DECREASE:
//                 return {
//                     number: state.number - 1
//                 };
//             default:
//                 return state;
//     }
// }

export default counter;