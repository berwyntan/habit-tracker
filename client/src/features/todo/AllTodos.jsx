import { useSelector, useDispatch } from 'react-redux'
import { addTodo, deleteTodo, checkTodo } from './todoSlice'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SingleTodo from './SingleTodo'

const AllTodos = () => {

    const allTodos = useSelector((state) => state.todo)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [newTodo, setNewTodo] = useState('')

    const handleNewTodo = (e) => {
        setNewTodo(e.target.value)
    }

    // const handleCheck = (e, id) => {
        
    //     const done = e.target.checked;
    //     dispatch(checkTodo({ id: id, done: done }))
    // }

    // const handleDelete = (id) => {
    //     dispatch(deleteTodo({ id: id }));
    // }

    const handleAddTodo = (e) => {
        e.preventDefault();
        dispatch(addTodo({ text: {newTodo} }));
        setNewTodo('');
    }

    // const handleEditTodo = (id) => {
    //     console.log(id)
    //     navigate(`${id}`)
    // }


    // const list = allTodos.map(todo => {

    //     return (
    //         <div key={todo.id}>
                
    //             <span>{todo.text} |</span>
    //             <span> {todo.list} |</span>
    //             <input 
    //                 type="checkbox" 
    //                 checked={todo.done ? "checked" : ""} 
    //                 onChange={(e) => handleCheck(e, todo.id)} //
    //             />   
    //             <button onClick={() => handleEditTodo(todo.id)}>edit</button>             
    //             <button onClick={() => handleDelete(todo.id)}>delete</button>
    //         </div>
    //     )
    // })

    const list = allTodos.map(todo => {
        return (
            <SingleTodo 
                text={todo.text}
                list={todo.list}
                done={todo.done}
                id={todo.id}
                key={todo.id}
            />
        )
    })

    return (
        <div>
            <form onSubmit={handleAddTodo}>
                
                <input value={newTodo} onChange={handleNewTodo} />
                <span> list: </span>
                <span>dropdown </span>
                <button>Add Todo</button>
            </form>
            {list}
        </div>
    )
}

export default AllTodos