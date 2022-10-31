import { useParams } from "react-router-dom"
import { useSelector } from 'react-redux'
import SingleTodo from "./SingleTodo"

const List = () => {

    const { list } = useParams()
    const allTodos = useSelector((state) => state.todo)

    const filteredList = allTodos.filter(todo => todo.list === list)    
    // console.log(filteredList)

    const renderedList = filteredList.map(todo => {
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
        <>
            <div>{list}</div>
            <div>{renderedList}</div>
        </>
        
    )
}

export default List