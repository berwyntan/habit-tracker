import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { editTodo } from './todoSlice'

const EditTodo = () => {

    const allTodos = useSelector((state) => state.todo)
    const dispatch = useDispatch()
    const { id } = useParams()
    const navigate = useNavigate()
    

    // console.log(allTodos)
    const found = allTodos.find(todo => todo.id === id)
    // console.log(found)
    const [todoText, setTodoText] = useState(found.text)
    const [newStack, setNewStack] = useState(found.stack)

    const handleTodoText = (e) => {
        setTodoText(e.target.value)
    }

    const handleEditTodo = (e) => {
        e.preventDefault()
        dispatch(editTodo({id: id, text: todoText, stack: newStack}))
        navigate(-1)
    }

    const handleNewStack = () => {
        setNewStack(prev => !prev)
    }

    return (
        <div>
            EDIT
            <form onSubmit={handleEditTodo}>

                <span> Stacked</span>
                <input type="checkbox" value={newStack} onChange={handleNewStack} 
                    checked={newStack ? "checked" : ""}/>
                <input value={todoText} onChange={handleTodoText} className="input input-bordered input-accent w-full max-w-xs"/>
                
                <button>Update Todo</button>
            </form>
            
        </div>
    )
}

export default EditTodo