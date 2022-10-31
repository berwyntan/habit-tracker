import { useDispatch } from 'react-redux'
import { deleteTodo, checkTodo } from './todoSlice'
import { useNavigate } from 'react-router-dom'

const SingleTodo = ({ text, list, done, id }) => {

    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleCheck = (e, id) => {
        
        const done = e.target.checked;
        dispatch(checkTodo({ id: id, done: done }))
    }

    const handleDelete = (id) => {
        dispatch(deleteTodo({ id: id }));
    }

    const handleEditTodo = (id) => {
        navigate(`/${id}`)
    }

    return (
        <div>                
            <span>{text} |</span>
            <span> {list} |</span>
            <input 
                type="checkbox" 
                checked={done ? "checked" : ""} 
                onChange={(e) => handleCheck(e, id)} //
            />   
            <button onClick={() => handleEditTodo(id)}>edit</button>             
            <button onClick={() => handleDelete(id)}>delete</button>
        </div>
    )
}

export default SingleTodo