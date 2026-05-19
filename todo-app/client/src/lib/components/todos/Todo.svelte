<script>
    import TaskList from "$lib/components/todos/TaskList.svelte";

    import { useTodoState } from "$lib/states/todoState.svelte.js";
    let { todoId } = $props();
    let todoState = useTodoState();
    
    let todo = $derived(todoState.todos.find((todo) => todo.id === todoId));

    const renamedTodo = (e) => {
        e.preventDefault();

        const renamedTodo = Object.fromEntries(new FormData(e.target));
        todoState.updateTodo({ id: todo.id, ...renamedTodo });
        e.target.reset();
    };
</script>

<h1>{todo ? todo.name : "Loading..."}</h1> 
<form onsubmit={renamedTodo}>
  <label>
    <input
      name="name"
      type="text"
      placeholder="Rename todo"
    />
  </label>
  <input type="submit" value="Rename Todo" />
</form>

<TaskList todoId={todoId} />