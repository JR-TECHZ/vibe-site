function generate() {
  const prompt = document.getElementById("prompt").value;
  const output = document.getElementById("output");

  if (!prompt.trim()) {
    output.textContent = "// Please enter a vibe first.";
    return;
  }

  output.textContent =
`// Vibe Mode Activated 🚀

You asked:
"${prompt}"

✨ This is where AI-generated code will appear in the future.`;
}
