import React from 'react';
import { Component } from 'react';
import ColorContext from '../Contexts/color';
import { ColorConsumer } from '../Contexts/color';

// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// const SelectColors = () => {  // 함수버전
//     return (
//         <div>
//             <h2>색상을 선택해보쇼</h2>
//             <ColorConsumer>
//             {({ actions }) => (
//                 <div style={{display: 'flex'}}>
//                 {colors.map(color => (
//                     <div
//                     key={color}
//                     style={{
//                         background: color,
//                         width: '24px',
//                         height: '24px',
//                         cursor: 'pointer'
//                     }}
//                     onClick={() => actions.setColor(color)}
//                     onContextMenu={e => {
//                         e.preventDefault();
//                         actions.setSubcolor(color);
//                     }}
//                     />
//                     ))}
//                     </div>
//             )}
//             </ColorConsumer>
//             <hr/>
//         </div>
//     );
// };


// export default SelectColors;



//--------------------------------------------------------------------------------------


const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

class SelectColors extends Component{                //클래스버전
    static contextType = ColorContext;               //static contextType 이건 클래스기반에서만 사용가능

    handleSetColor = color => {
        this.context.actions.setColor(color);
    };

    handleSetSubcolor = subcolor => {
        this.context.actions.setSubcolor(subcolor);
    };

    render() {
        return (
        <div>
            <h2>색상을 선택해보쇼</h2>
                <div style={{display: 'flex'}}>
                {colors.map(color => (
                    <div
                    key={color}
                    style={{
                        background: color,
                        width: '24px',
                        height: '24px',
                        cursor: 'pointer'
                    }}
                    onClick={() => this.handleSetColor(color)}
                    onContextMenu={e => {
                        e.preventDefault();
                        this.handleSetSubcolor(color);
                    }}
                    />
                    ))}
                    </div>
            <hr />
        </div>
        );
    }
}


export default SelectColors;