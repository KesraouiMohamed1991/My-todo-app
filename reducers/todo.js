// todo.js

import { createSlice } from '@reduxjs/toolkit';

// Load state from localStorage on app initialization
const persistedState = localStorage.getItem('todos');
const initialState = {
    value: persistedState ? JSON.parse(persistedState) : [],
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        add: (state, action) => {
            state.value.push(action.payload);
            localStorage.setItem('todos', JSON.stringify(state.value));
        },

        deleteTodo: (state, action) => {
            state.value = state.value.filter((e) => e.id !== action.payload);
            localStorage.setItem('todos', JSON.stringify(state.value));
        },




        check: (state, action) => {
            const todoToCheck = state.value.find((todo) => todo.id === action.payload);
            if (todoToCheck) {
                todoToCheck.checked = !todoToCheck.checked;
            }
            localStorage.setItem('todos', JSON.stringify(state.value));
        },
    },
});

export const { add, deleteTodo, check } = todoSlice.actions;
export default todoSlice.reducer;




