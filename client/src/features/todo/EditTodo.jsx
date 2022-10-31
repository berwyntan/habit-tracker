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

    const handleTodoText = (e) => {
        setTodoText(e.target.value)
    }

    const handleEditTodo = (e) => {
        e.preventDefault()
        dispatch(editTodo({id: id, text: todoText}))
        navigate(-1)
    }

    return (
        <div>
            EDIT
            <form onSubmit={handleEditTodo}>
                <input value={todoText} onChange={handleTodoText} />
                <span> {found.list}</span>
                <button>Update Todo</button>
            </form>
            
        </div>
    )
}

export default EditTodo