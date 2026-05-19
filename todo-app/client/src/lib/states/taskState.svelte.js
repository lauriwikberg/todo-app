import {browser} from "$app/environment";
import * as tasksApi from "$lib/apis/tasksApi.js";


let taskState = $state({});

const initTodoTasks = async (todoId) => {
  if (!browser) {
    return;
  }

  taskState[todoId] = await tasksApi.readTasks(todoId);
};

const initTodoTask = async (todoId, taskId) => {
  if (!browser) return;

  const task = await tasksApi.readTask(todoId, taskId);
  if (!task) return;

  const tasks = taskState[todoId] || [];          

  if (!tasks.find(t => t.id === task.id)) {
    tasks.push(task);                              
    taskState[todoId] = tasks;                     
  }
};

const useTaskState = () => {
  return {
    get tasks() {
      return taskState;
    },
    addTask: (todoId, task) => {
      tasksApi.createTask(todoId, task).then((newTask) => {
        const tasks = taskState[todoId] || [];
        tasks.push(newTask);
        taskState[todoId] = tasks;
      });
    },
    updateTask: (todoId, taskId, task) => {
        task.is_done = !task.is_done;

        tasksApi.updateTask(todoId, taskId, task).then((updatedTask) => {
            const tasks = taskState[todoId] || [];
            const index = tasks.findIndex((t) => t.id === updatedTask.id);

        if (index !== -1) {
        tasks[index] = updatedTask;      
        taskState[todoId] = tasks;         
        }
        });
    },
    removeTask: (todoId, taskId) => {
       if (!taskState[todoId]) return;
       tasksApi.deleteTask(todoId, taskId);
        taskState[todoId] = taskState[todoId].filter((t) => t.id !== taskId);
    },
  };
};

export { useTaskState, initTodoTasks, initTodoTask };