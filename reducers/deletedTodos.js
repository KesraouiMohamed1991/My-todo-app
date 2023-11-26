// deletedTodos.js
import { createSlice } from '@reduxjs/toolkit';

const persistedDeletedTodos = localStorage.getItem('deletedTodos');
const initialState = {
    deletedTodos: persistedDeletedTodos ? JSON.parse(persistedDeletedTodos) : [],
};

export const deletedTodoSlice = createSlice({
    name: 'deletedTodo',
    initialState,
    reducers: {
        addToDeletedTodos: (state, action) => {
            const { id, content } = action.payload;

            // Make sure deletedTodos is initialized as an array
            state.deletedTodos = state.deletedTodos || [];

            // Now you can safely push to it
            state.deletedTodos.push({ id, content });

            // Update local storage
            localStorage.setItem('deletedTodos', JSON.stringify(state.deletedTodos));
        },
        clearDeletedTodos: (state) => {
            state.deletedTodos = [];
            localStorage.setItem('deletedTodos', JSON.stringify(state.deletedTodos));
        },
    },
});

export const { addToDeletedTodos, clearDeletedTodos } = deletedTodoSlice.actions;
export default deletedTodoSlice.reducer;
