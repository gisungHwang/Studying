import {useState,useRef, useCallback} from 'react';
import cn from 'classnames';
import './TodoListItem.scss';



// const update = (props) => {
//     const [username, setId] = useState(props.username);
//     const [pwd, setPwd] = useState(props.pwd);
//     const [mail1, setMail] = useState(props.mail1);
//     const [mail2, setMail2] = useState(props.mail2);
//     const [gender, setGender] = useState(props.gender);
// }
    const TodoListItem = ({todo, onRemove, onUpdate}) => {
    const {id, text, checked} = todo;

    
    return(
        <div className = "TodoListItem">
        <div className={cn('checked', {checked})} onClick = {() => onUpdate(todo)}></div>
        <div className='text'>{text}</div><button>수정</button>
        <div className="remove" onClick={() => onRemove(id)}><button >삭제</button>
        </div>
        </div>
        
    );
};

export default TodoListItem;