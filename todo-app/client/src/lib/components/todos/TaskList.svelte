<script>
  import {useTaskState} from "$lib/states/taskState.svelte.js";
  let taskState = useTaskState();
  let {todoId} = $props();
</script>

<ul>
  {#each taskState.tasks[todoId] as t}
    <li>
      {#if t.is_done}
        <s>{t.description}</s>
      {:else}
      <a href={`/todos/${todoId}/tasks/${t.id}`}>{t.description}</a>
      {/if}
      <button onclick={() => taskState.updateTask(todoId, t.id, t)}>
      {t.is_done ? 'Mark not done' : 'Mark done'}
      </button>
      <button onclick={() => taskState.removeTask(todoId, t.id)}>Remove</button>
    </li>
  {/each}
</ul>