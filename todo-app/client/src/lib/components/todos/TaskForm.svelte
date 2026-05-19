<script>
  import { useTaskState } from "$lib/states/taskState.svelte.js";
  let { todoId } = $props();
  let taskState = useTaskState();

  const addTask = (e) => {
    e.preventDefault();

    const task = Object.fromEntries(new FormData(e.target));
    taskState.addTask(todoId, task);
    e.target.reset();
  };
</script>

<form onsubmit={addTask}>
  <label>
    Task description
    <input
      name="description"
      type="text"
      placeholder="Task description"
    />
  </label>
  <input type="submit" value="Add Task" />
</form>