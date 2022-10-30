import { useSelector, useDispatch } from 'react-redux'
import { addTodo, deleteTodo, checkTodo } from './todoSlice'
import { useState } from 'react'

const AllLists = () => {

    const allTodos = useSelector((state) => state.todo)
    const dispatch = useDispatch()

    const [newTodo, setNewTodo] = useState('')

    const handleNewTodo = (e) => {
        setNewTodo(e.target.value)
        console.log(newTodo)
    }

    const handleCheck = (e, id) => {
        
        const done = e.target.checked;
        dispatch(checkTodo({ id: id, done: done }))
    }

    const handleDelete = (id) => {
        dispatch(deleteTodo({ id: id }));
    }

    const handleAddTodo = (e) => {
        e.preventDefault();
        dispatch(addTodo({ text: {newTodo} }));
        setNewTodo('');
    }

    const list = allTodos.map(todo => {
        return (
            <div key={todo.id}>
                {/* <span>{todo.id}. </span> */}
                <span>{todo.text} </span>
                <input 
                    type="checkbox" 
                    checked={todo.done ? "checked" : ""} 
                    onChange={(e) => handleCheck(e, todo.id)} //
                />
                <button onClick={() => handleDelete(todo.id)}>delete</button>
            </div>
        )
    })

    return (
        <div>
            <form onSubmit={handleAddTodo}>
                <input value={newTodo} onChange={handleNewTodo} />
                <button>Add Todo</button>
            </form>
            {list}
        </div>
    )
}

export default AllLists