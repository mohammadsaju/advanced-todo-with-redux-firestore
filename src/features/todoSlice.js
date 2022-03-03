import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        displayTodos: []
    },
    reducers: {
        fetchTodo: (state, action) => {
            state.todos = [...action.payload];
            state.displayTodos = [...action.payload]
        },
        addTodo: (state, action) => {
            const todo = action.payload;
            state.todos = [...state.todos, todo]
            state.displayTodos = [...state.displayTodos, todo]
        },
        filterTodo: (state, action) => {
            const text = action.payload;
            if(text === 'all') {
                state.todos = [...state.displayTodos]
            } else if (text === 'running') {
                const todos = state.displayTodos.filter(todo => !todo.iscompleted)
                state.todos = [...todos]
            } else {
                const todos = state.displayTodos.filter(todo => todo.iscompleted)
                state.todos = [...todos]
            }
        },
        searchTodo: (state, action) => {
            const todos = state.displayTodos.filter(todo => todo.title.toLowerCase().includes(action.payload));
            state.todos = [...todos];
        },
        todoIsCompleted: (state, action) => {
            const todo = state.todos.find(item => item.id === action.payload);
            todo.iscompleted = !todo.iscompleted
        },
        deleteTodo: (state,action) => {
            const todos = state.todos.filter(item => item.id !== action.payload);
            state.todos = [...todos];
        }
    }
});

export const { fetchTodo, filterTodo, searchTodo, todoIsCompleted, deleteTodo, addTodo } = todoSlice.actions;

export default todoSlice.reducer;