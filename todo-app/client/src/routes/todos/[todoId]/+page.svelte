<script>
  import {initTodo} from "$lib/states/todoState.svelte.js";
  import {initTodoTasks} from "$lib/states/taskState.svelte.js";
  import TaskForm from "$lib/components/todos/TaskForm.svelte";
  import Todo from "$lib/components/todos/Todo.svelte";

  let {data} = $props();
  let todoId = parseInt(data.todoId);

  $effect(() => {
    initTodo(todoId);
    initTodoTasks(todoId);
  });
</script>
<Todo todoId={todoId} />
<TaskForm todoId={todoId}/>

<a href="/todos">Go back</a>