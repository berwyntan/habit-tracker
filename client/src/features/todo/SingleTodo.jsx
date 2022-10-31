import { useDispatch } from 'react-redux'
import { deleteTodo, checkTodo } from './todoSlice'
import { useNavigate } from 'react-router-dom'


const SingleTodo = ({ text, stack, done, id }) => {

    
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
        <div className='flex flex-col my-2'>  
            <div className='flex items-center justify-between my-2 sm:justify-center'>
                              
                <span className='ml-6 text-xl font-semibold'>{text}</span>
                
                <input 
                    type="checkbox" 
                    className="checkbox checkbox-accent checkbox-lg mx-4"
                    checked={done ? "checked" : ""} 
                    onChange={(e) => handleCheck(e, id)} //
                />   
            </div>
            <div className='flex items-center ml-4 sm:justify-center'>
                {stack && <span className="badge badge-primary">STACKED</span>}
                <button onClick={() => handleEditTodo(id)} className="btn btn-outline btn-sm mx-2">edit</button>             
                <button onClick={() => handleDelete(id)} className="btn btn-outline btn-sm">delete</button>
            </div>
            
        </div>
    )
}

export default SingleTodo