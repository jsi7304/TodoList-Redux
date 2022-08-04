// src/redux/modules/counter.js
// Action Value

const ADD_TODO = "ADD_TODO"
const DELETE_TODO = "DELETE_TODO"
const DONE_TODO = "DONE_TODO"

// Action Creator

export const addTodo = (todo) => {
    return { type: ADD_TODO, todo }
}

export const deleteTodo = (id) => {
    return { type: DELETE_TODO, id }
}

export const doneTodo = (id) => {
    return { type: DONE_TODO, id }
}

// Initial State

const initialState = [];

// Reducer

const todos = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.todo]
        case DELETE_TODO:
            const deleteTodo = state.filter((todo) => todo.id !== action.id)
            return deleteTodo

        case DONE_TODO:

            const doneTodo = state.map((todo) =>
                todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo)
                //중복된 key를 가지고 있으면 뒤에 오는 객체의 value로 덮어 씌워진다.
            return doneTodo;
        default:
            return state;
    }
}

// export default reducer

export default todos;