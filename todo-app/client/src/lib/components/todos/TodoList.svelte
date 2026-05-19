<script>
  import {useTodoState} from "$lib/states/todoState.svelte.js";
  let todoState = useTodoState();
</script>

<h1>Todos</h1>

<ul>
  {#each todoState.todos as t}
    <li>
      <a href={`/todos/${t.id}`}>{t.name}</a><button onclick={() => todoState.removeTodo(t)}>Remove</button>
    </li>
  {/each}
</ul>
