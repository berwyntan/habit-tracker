import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit';

const initialState = [
    {
        id: "1",
        text: "Learn Redux",
        done: false,
        stack: false
    },
    {
        id: "2",
        text: "Learn RTK Query",
        done: false,
        stack: false
    },
    {
        id: "3",
        text: "Buy eggs",
        done: false,
        stack: false
    },
    {
        id: "4",
        text: "Exercise then watch Netflix",
        done: false,
        stack: true
    },

]

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {

            // console.log(action.payload);
            
            const { text, stack } = action.payload;
            // console.log(newTodo);
            state.unshift({
                id: nanoid(),
                text: text,
                done: false,
                stack: stack
            });
            return state
            
        },
        deleteTodo: (state, action) => {
            
            const { id } = action.payload;
            // console.log(id);
            // state = state.filter((todo) => todo.id !== id); // filter does not work 
            state.splice(state.findIndex((todo) => todo.id === id), 1)
            
        },
        checkTodo: (state, action) => {

            // console.log(action)
            state.map(todo => {
                if (todo.id !== action.payload.id) {                    
                    return todo
                } else {
                    todo.done = action.payload.done;                    
                    return todo
                }
            })
        },
        editTodo: (state, action) => {
            // console.log(action)
            const { id, text, stack } = action.payload
            let edit = state.find(todo => todo.id === id)
            edit = {
                ...edit,
                text: text,
                stack: stack
            }
            state.splice(state.findIndex((todo) => todo.id === id), 1)
            state.unshift(edit)
        }
    }
})

export const { addTodo, deleteTodo, checkTodo, editTodo } = todoSlice.actions

export default todoSlice.reducer