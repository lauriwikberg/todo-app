<script>
  import {initTodos} from "$lib/states/todoState.svelte.js";
  import TodoList from "$lib/components/todos/TodoList.svelte";
  import TodoForm from "$lib/components/todos/TodoForm.svelte";

  $effect(() => {
    initTodos();
  });
</script>



<TodoList />
<TodoForm />