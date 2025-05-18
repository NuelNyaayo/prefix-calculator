const prompt = require("prompt");
const calculator = require("./app/calculator");

console.log(
  "Alternative calculator\n===\n\n" +
  "Enter an expression to calculate - e.g. '/ - 3 4 + 5 2'.\n" +
  "Type 'exit' to quit.\n"
);

prompt.start();  // ✅ Required to start the prompt

function calculateUserInput() {
  prompt.get("expression", function(err, result) {
    if (err) {
      console.error("Prompt error:", err);
      return;
    }

    if (result.expression.toLowerCase() === "exit") {
      console.log("Goodbye!");
      return;
    }

    try {
      const output = calculator.calculate(result.expression);
      console.log("Result:", output);
    } catch (e) {
      console.error("Error:", e.message);
    }

    calculateUserInput(); // 🔁 Keep prompting
  });
}

calculateUserInput();
