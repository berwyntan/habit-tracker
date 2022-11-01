import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit';

const initialState = [
    {
        id: nanoid(),
        text: "Learn Redux",
        done: false,
        stack: false,
        stackText: "",
        repeat: false
    },
    {
        id: nanoid(),
        text: "Learn RTK Query",
        done: false,
        stack: false,
        stackText: "",
        repeat: false
    },
    {
        id: nanoid(),
        text: "Buy eggs",
        done: false,
        stack: false,
        stackText: "",
        repeat: false
    },
    {
        id: nanoid(),
        text: "Exercise",
        done: false,
        stack: true,
        stackText: "Watch Netflix",
        repeat: false
    },

]

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {

            // console.log(action.payload);
            
            const { text, stack, stackText } = action.payload;
            // console.log(newTodo);
            state.unshift({
                id: nanoid(),
                text: text,
                done: false,
                stack: stack,
                stackText: stackText
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
            const { id, text, stack, stackText, done, repeat } = action.payload
            let edit = state.find(todo => todo.id === id)
            edit = {
                ...edit,
                text: text,
                stack: stack,
                stackText: stackText,
                done: done,
                repeat: repeat
            }
            state.splice(state.findIndex((todo) => todo.id === id), 1)
            state.unshift(edit)
        }
    }
})

export const { addTodo, deleteTodo, checkTodo, editTodo } = todoSlice.actions

export default todoSlice.reducer