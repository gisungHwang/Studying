import abc from './ab.jpg';
import abcd from './jeju1.jpg';
import abcde from './jeju2.jpg';
import './App.css';
import {useState} from 'react';

function Wanted() {
    const[pic, setPic,] = useState([
        <img src ={abc} alt='asd' className="App-logo" ></img>
    ]);
    const onClickEnter = () => setPic(
        <img src ={abcd} alt = "loge" className="App-logo1"/>
    );
    // const onClickEnter2 = () => setPick(
    //     <img src ={abcde} alt = "loge" className="App-logo2"/>
    // );

    const onClickEnter1 = () => setPic(
        <img src ={abc} alt = "loge" className="App-logo1"/>
    );
    return (
        <div className="App">
            {pic}
        <header className="App-header1">
            {/* <img src={abc} className="App-logo" alt="logo" /> */}
        </header><br/><br/><br/><br/><br/><br/><br/><br/>
        <button onClick = {onClickEnter} > 사진 바꾸기</button>
        <button onClick = {onClickEnter1}> 뒤로가기</button>
        </div>
    );
    }
export default Wanted;


