import { useDispatch } from 'react-redux'
import { deleteTodo, checkTodo, editTodo } from './todoSlice'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

const SingleTodo = ({ text, stack, done, id, stackText }) => {

    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isChecked, setIsChecked] = useState(false)

    
    const handleCheck = (e, id) => {
        
        const done = e.target.checked;
        dispatch(checkTodo({ id: id, done: done }))
        setIsChecked(prev => !prev)
    }

    const handleDelete = (id) => {
        dispatch(deleteTodo({ id: id }));
    }

    const handleEditTodo = (id) => {
        navigate(`/${id}`)
    }

    const handleRepeatTodo = (id) => {
        dispatch(editTodo({ id: id, done: false, text: text, stack: stack, stackText: stackText }))
        setIsChecked(prev => !prev)
    }

       

    return (
        <div className='flex flex-col my-2'>  
            <div className='flex items-center justify-between sm:justify-center'>

                <div className='flex justify-start ml-6'>
                    <span className='text-xl font-semibold'>
                            {text}
                    </span>
                    <span className='text-lg font-normal italic mx-2'>
                            {stack && "then"}
                    </span>
                    <span className='text-xl font-semibold'>
                            {stack && stackText}
                    </span>
                </div>            
                
                <input 
                    type="checkbox" 
                    className="checkbox checkbox-accent checkbox-lg mx-4 active:scale-150 duration-1000"
                    checked={done ? "checked" : ""} 
                    onChange={(e) => handleCheck(e, id)} //
                />   
            </div>
            <div className='flex items-center ml-4 mt-2 sm:justify-center'>
                {stack && <span className="badge badge-primary">STACKED</span>}

                {isChecked || <button onClick={() => handleEditTodo(id)} className="btn btn-outline btn-sm mx-2">edit</button>} 
                {isChecked && <button onClick={() => handleRepeatTodo(id)} className="btn btn-outline btn-sm mx-2">repeat</button>} 

                <button onClick={() => handleDelete(id)} className="btn btn-outline btn-sm mx-2">delete</button>
            </div>
            <div className="divider"></div> 
        </div>
    )
}

export default SingleTodo