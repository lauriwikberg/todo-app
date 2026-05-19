<script>
  import Task from "$lib/components/todos/Task.svelte";
  import {initTodoTask} from "$lib/states/taskState.svelte.js";
  let {data} = $props();
  let todoId = parseInt(data.todoId);
  let taskId = parseInt(data.taskId);


  $effect(() => {
    initTodoTask(todoId, taskId);
  });
</script>

<Task todoId={todoId} taskId={taskId} />

<a href={`/todos/${todoId}`}>Go back</a>
