const ollama = async (prompt) => {
    const response = await fetch("http://localhost:11434/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            model: "gemma4",
            prompt,
            stream: false,
        }),
    });

    if (!response.ok) throw new Error("Ollama request failed");

    const result = await response.json();
    return result.response;
}
export{ollama}