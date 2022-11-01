import { useSelector, useDispatch } from 'react-redux'
import { addTodo } from './todoSlice'
import { useState } from 'react'
import SingleTodo from './SingleTodo'

const AllTodos = () => {

    const allTodos = useSelector((state) => state.todo)
    const dispatch = useDispatch()

    const [newTodo, setNewTodo] = useState('')
    const [newStack, setNewStack] = useState(false)
    const [newStackText, setNewStackText] = useState('')

    const handleNewTodo = (e) => {
        setNewTodo(e.target.value)
    }
    const handleNewStackText = (e) => {
        setNewStackText(e.target.value)
    }
   
    const handleAddTodo = (e) => {
        e.preventDefault()
        dispatch(addTodo({ text: newTodo, stack: newStack, stackText: newStackText }))
        setNewTodo('')
        setNewStack(false)
        setNewStackText('')
    }

    const handleNewStack = () => {
        setNewStack(prev => !prev)
    }

    
    const list = allTodos.map(todo => {
        return (
            <div className="md:container md:mx-auto" key={todo.id}>
            <SingleTodo 
                text={todo.text}
                stack={todo.stack}
                done={todo.done}
                id={todo.id}
                stackText={todo.stackText}                
            />
            </div>
        )
    })

    return (
        <div>
            <form onSubmit={handleAddTodo} className='flex flex-col my-5'>
                <div className='flex justify-center items-center mx-3 flex-col md:flex-row'>
                    <input className="input input-bordered input-accent w-full max-w-lg my-3" value={newTodo} onChange={handleNewTodo} />
                    {newStack && <div className="text-center italic mx-2">then</div>}
                    {newStack && <input className="input input-bordered input-accent w-full max-w-lg my-3" value={newStackText} onChange={handleNewStackText} />}
                </div>
                <div className='flex items-center justify-between sm:justify-center'>
                    <div className='flex items-center ml-4'>
                        
                        {newStack || <span className="badge badge-ghost">STACKED</span>}
                        {newStack && <span className="badge badge-primary">STACKED</span>}
                        <input type="checkbox" className="checkbox checkbox-accent mx-2 checkbox-lg" value={newStack} onChange={handleNewStack}
                            checked={newStack ? "checked" : ""}/>
                    </div>
                    <div className='flex items-center mx-5'>
                        <button className="btn btn-outline">Add Todo</button>
                    </div>                                   
                    
                </div>
                
            </form>
            <div className="divider"></div> 
            {list}
        </div>
    )
}

export default AllTodos