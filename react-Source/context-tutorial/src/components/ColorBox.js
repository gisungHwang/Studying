import ColorConsumer from '../Contexts/color';
import { useContext } from 'react';
import ColorContext from '../Contexts/color';

const ColorBox = () => {
    const {state} = useContext(ColorContext);  //비구조화 할당 방식, / color.js에서 state만 할당하는 방식
    return (
        <>  
            <div
            style={{
                width: '150px',
                height: '150px',
                background: state.color
            }}
            />
            <div
            style={{
                width: '75px',
                height: '75px',
                background: state.subcolor
            }}
            />
        </>
    );
};

export default ColorBox;