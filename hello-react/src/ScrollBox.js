import { Component } from "react";

class ScrollBox extends Component{
    scrollToBottom = () => {
        const{scrollHeight, clientHeight} = this.box;
        this.box.scrollTop = scrollHeight - clientHeight;
    }
    render() {
        const style = {            //div에 대한 스타일
            border: '1px solid black',
            height: '300px',
            width: '300px',
            overflow: 'auto',
            position: 'relative' 
        };

        const innerStyle = {    //div의 안에 대한 스타일
            width : "100%",
            height : '650px',
            background: 'linear-gradient(white, black, red, skyblue)'
        }

        return (
            < div
            style={style}
            ref={(ref) => {this.box=ref}}> 
            <div style= {innerStyle}/>
            </div>
        );

    }

}

export default ScrollBox;