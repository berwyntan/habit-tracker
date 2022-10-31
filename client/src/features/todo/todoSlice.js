import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit';

const initialState = [
    {
        id: "1",
        text: "Learn Redux",
        done: false,
        list: "web dev"
    },
    {
        id: "2",
        text: "Learn RTK Query",
        done: false,
        list: "web dev"
    },
    {
        id: "3",
        text: "Buy eggs",
        done: false,
        list: "groceries"
    },

]

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {

            // console.log(action.payload);
            
            const { newTodo } = action.payload.text;
            // console.log(newTodo);
            state.unshift({
                id: nanoid(),
                text: newTodo,
                done: false
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
            const { id, text } = action.payload
            let edit = state.find(todo => todo.id === id)
            edit = {
                ...edit,
                text: text,
            }
            state.splice(state.findIndex((todo) => todo.id === id), 1)
            state.unshift(edit)
        }
    }
})

export const { addTodo, deleteTodo, checkTodo, editTodo } = todoSlice.actions

export default todoSlice.reducer