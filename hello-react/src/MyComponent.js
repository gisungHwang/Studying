import PropTypes from 'prop-types';
import {Component} from 'react';
 // //88p
// const MyComponent = () => {
//     return <div>리액트 어렵다</div>;
// };

class MyComponent extends Component {
    render() {
        const {children, name, favoriteNumber} = this.props;
    return( 
    <div>
    안녕 내 이름은 {name}
    <br/>
    chlidren 값은 {children}입니다.
    <br/>
    제가 좋아하는 숫자는 {favoriteNumber}입니다.
    </div>
    );
}
}



// const MyComponent = ({children, name, favoriteNumber}) => {
//     // const {children, name, favoriteNumber} = props;
//     // console.log(props);
//     return( 
//     <div>
//     안녕 내 이름은 {name}
//     <br/>
//     chlidren 값은 {children}입니다.
//     <br/>
//     제가 좋아하는 숫자는 {favoriteNumber}입니다.
//     </div>
//     );
// };
// const MyComponent2 = ({children, name, favoriteNumber}) => {
//     // const {children, name, favoriteNumber} = props;
//     // console.log(props);
//     return( 
//     <div>
//     ㄴ안녕 내 성명은 {name}
//     <br/>
//     chlidren 값은 {children}입니다.
//     <br/>
//     제가 좋아하는 숫자는 {favoriteNumber}입니다.
//     </div>
//     );
// };
// const MyComponent3 = ({children, name, favoriteNumber}) => {
//     // const {children, name, favoriteNumber} = props;
//     // console.log(props);
//     return( 
//     <div>
//     ㄴ안녕 내 존함은 {name}
//     <br/>
//     chlidren 값은 {children}입니다.
//     <br/>
//     제가 좋아하는 숫자는 {favoriteNumber}입니다.
//     </div>
//     );
// };

MyComponent.defaultProps = {
    name : "기본 이름",
};
MyComponent.prototype = {
    name: PropTypes.string,
    favoriteNumber : PropTypes.number.isRequired
};

export default MyComponent; //
// export { MyComponent2, MyComponent3};