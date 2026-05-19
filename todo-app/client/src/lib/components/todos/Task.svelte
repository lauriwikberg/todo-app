<script>
    let {todoId, taskId} = $props();
    import {useTaskState} from "$lib/states/taskState.svelte.js";
    import {useTodoState} from "$lib/states/todoState.svelte.js";
    import {ollama} from "$lib/apis/ollamaApi.js";

    const taskState = useTaskState();
    const taskList = taskState.tasks[todoId] || [];
    const task = taskList.find((t) => t.id === Number(taskId));

    const todoState = useTodoState();
    const todos = todoState.todos || [];
    const todo = todos.find((t) => t.id === Number(todoId));

    let advice = $state("");
    let loading = $state(false);
    let error = $state("");

    const askAdvice = async () => {
        loading = true;
        advice = "";
        error = "";
        try {
            advice = await ollama(`[CONTEXT: THE FOLLOWING IS A TASK INSIDE TODO: ${todo?.name ?? ""}] Give a quick short tip on how to do this task efficiently: ${task?.description ?? ""}`);
        } catch (err) {
            error = "Could not reach Ollama.";
        } finally {
            loading = false;
        }
    }
</script>

<h1>{task?.description}</h1>

<button onclick={askAdvice} disabled={loading}>
    {loading ? "Thinking…" : "Ask for advice"}
</button>

<p>{advice}</p>