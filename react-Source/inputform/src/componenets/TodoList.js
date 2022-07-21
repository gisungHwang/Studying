import TodoListItem from './TodoListItem';
import './TodoList.scss'

const TodoList = ({todos, onRemove, onToggle}) => {
    return (
        <div className='TodoList'>
            {todos.map(todo =>(
                <TodoListItem 
                todo={todo} 
                key={todo.id} 
                onRemove={onRemove} 
                onToggle={onToggle}
                />
            ))}
        </div>
        // <table border="1" align='center' width="510">
        //     <tr>
        //         <textarea name="intro" rows="10" cols="60" ></textarea>
        //         <td colspan="2" align="center" >
        //             <input type="button" value="수정" onclick="check_input();" ></input><br/><br/>
        //             <input type="reset" name="reset" value="삭제"></input>
                    
        //         </td>
        //     </tr>
        // </table>

    );
};
export default TodoList;