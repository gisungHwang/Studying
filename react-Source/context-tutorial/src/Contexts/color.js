import {createContext, useState} from 'react';

const ColorContext =createContext({
    state : {color: 'black', subcolor: 'red'},
    actions : {
        setColor: () => {},
        setSubcolor: () => {}
    }
});

const ColorProvider = ({children}) => {
    const [color, setColor] = useState('black');
    const [subcolor, setSubcolor] = useState('red');    

    const value={
        state: {color, subcolor},
        actions: {setColor, setSubcolor}
    };
    return(
        <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
    );
};

const {Consumer: ColorConsumer} = ColorContext;
//const ColorConsumer = ColorContext.Consumer 과 같은 의미

export {ColorProvider, ColorConsumer}; //{}로 묶으면 안의 변수이름 밖에 못씀

export default ColorContext;  // default를 사용하면 변수이름 변경가능