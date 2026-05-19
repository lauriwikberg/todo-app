import {browser} from "$app/environment";
import * as todosApi from "$lib/apis/todosApi.js";


let todoState = $state([]);

const initTodos = async () => {
  if (browser) {
    todoState = await todosApi.readTodos();
  }
};

const initTodo = async (todoId) => {
  if (browser) {
    const todo = await todosApi.readTodo(todoId);
    if (todo && !todoState.find((t) => t.id === todo.id)) {
      todoState.push(todo);
    }
  }
};


const useTodoState = () => {
    return {
        get todos () {
            return todoState
        },
        addTodo: (todo) => {
          todosApi.createTodo(todo).then((newTodo) => {
            todoState.push(newTodo);
          });
        },
        removeTodo: (todo) => {
          todosApi.deleteTodo(todo.id).then((removed) => {
            todoState = todoState.filter((t) => t.id !== removed.id);
          });
        },
        updateTodo: (todo) => {
          todosApi.updateTodo(todo.id, todo).then((updatedTodo) => {
            const index = todoState.findIndex((t) => t.id === updatedTodo.id);
            if (index !== -1) {
              todoState[index] = updatedTodo;
            }
          });
        },

}};
export { initTodos, initTodo, useTodoState };