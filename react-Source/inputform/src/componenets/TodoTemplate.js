import './TodoTemplate.scss';
// import {BsArrowDownCircleFill} from 'react-icons/md';
const TodoTemplate = ({children}) => {
    return (
        <div className = "TodoTemplate"> 
        <div className = "app-title"> 회원 관리</div>
        <div className = "content">{children}</div>    
        </div>
    );
};

export default TodoTemplate;