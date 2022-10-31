import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link, Outlet } from 'react-router-dom'
import { useState } from 'react'



const AllLists = () => {

    const allTodos = useSelector((state) => state.todo)
    const dispatch = useDispatch()

    // get all lists, then remove duplicates
    const allLists = allTodos.map(todo => todo.list)
    const uniqueLists = [...new Set(allLists)]
    // console.log(uniqueLists)
    const lists = uniqueLists.map(list => {
        return (
            <div key={list}>
            <Link to={`${list}`}>{list}</Link>
            </div>
        )
        
    })

    return (
        <>
        <div>Lists</div>
        {lists}
        <Outlet />
        </>
    )
}

export default AllLists