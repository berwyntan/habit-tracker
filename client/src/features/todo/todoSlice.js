import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit';

const initialState = [
    {
        id: 1,
        text: "Learn Redux",
        done: false
    },
    {
        id: 2,
        text: "Learn RTK Query",
        done: false
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
            console.log(id);
            // state = state.filter((todo) => todo.id !== id); // filter does not work 
            state.splice(state.findIndex((todo) => todo.id === id), 1)
            
        },
        checkTodo: (state, action) => {

            console.log(action)
            state.map(todo => {
                if (todo.id !== action.payload.id) {                    
                    return todo
                } else {
                    todo.done = action.payload.done;                    
                    return todo
                }
            })
            
        }
    }
})

export const { addTodo, deleteTodo, checkTodo } = todoSlice.actions

export default todoSlice.reducer