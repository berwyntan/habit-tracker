import { useSelector, useDispatch } from 'react-redux'
import { addTodo } from './todoSlice'
import { useState } from 'react'
import SingleTodo from './SingleTodo'

const AllTodos = () => {

    const allTodos = useSelector((state) => state.todo)
    const dispatch = useDispatch()

    const [newTodo, setNewTodo] = useState('')
    const [newStack, setNewStack] = useState(false)

    const handleNewTodo = (e) => {
        setNewTodo(e.target.value)
    }
   
    const handleAddTodo = (e) => {
        e.preventDefault()
        dispatch(addTodo({ text: newTodo, stack: newStack }))
        setNewTodo('')
        setNewStack(false)
    }

    const handleNewStack = () => {
        setNewStack(prev => !prev)
    }

    
    const list = allTodos.map(todo => {
        return (
            <div className="md:container md:mx-auto">
            <SingleTodo 
                text={todo.text}
                stack={todo.stack}
                done={todo.done}
                id={todo.id}
                key={todo.id}
            />
            </div>
        )
    })

    return (
        <div>
            <form onSubmit={handleAddTodo} className='flex flex-col my-5'>
                <div className='flex justify-center mx-3'>
                    <input className="input input-bordered input-accent w-full max-w-lg my-3" value={newTodo} onChange={handleNewTodo} />
                </div>
                <div className='flex items-center justify-between sm:justify-center'>
                    <div className='flex items-center'>
                        <span className='ml-5'>Stacked?</span>
                        <input type="checkbox" className="checkbox checkbox-accent mx-2 checkbox-lg" value={newStack} onChange={handleNewStack}
                            checked={newStack ? "checked" : ""}/>
                    </div>
                    <div className='flex items-center mx-5'>
                        <button className="btn btn-outline">Add Todo</button>
                    </div>                                   
                    
                </div>
                
            </form>
            {list}
        </div>
    )
}

export default AllTodos