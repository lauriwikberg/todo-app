import { PUBLIC_API_URL } from "$env/static/public";

const readTodos = async () => {
  const response = await fetch(`${PUBLIC_API_URL}/api/todos`);
  return await response.json();
};

const readTodo = async (todoId) => {
  const response = await fetch(`${PUBLIC_API_URL}/api/todos/${todoId}`);
  return await response.json();
};

const createTodo = async (todo) => {
  const response = await fetch(`${PUBLIC_API_URL}/api/todos`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(todo),
  });

  return await response.json();
};

const updateTodo = async (todoId, todo) => {
  const response = await fetch(`${PUBLIC_API_URL}/api/todos/${todoId}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify(todo),
  });

  return await response.json();
};

const deleteTodo = async (todoId) => {
  const response = await fetch(`${PUBLIC_API_URL}/api/todos/${todoId}`, {
    method: "DELETE",
  });

  return await response.json();
};

export { createTodo, deleteTodo, readTodo, readTodos, updateTodo };