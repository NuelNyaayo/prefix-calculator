exports.calculate = function(expression) {
  const tokens = expression.trim().split(/\s+/);
  let index = 0;

  function evaluate() {
    let token = tokens[index++];
    
    if (!isNaN(token)) {
      return Number(token);
    }

    let a = evaluate();
    let b = evaluate();

    switch (token) {
      case '+': return a + b;
      case '-': return a - b;
      case '*': return a * b;
      case '/': return a / b;
      default: throw new Error("Unknown operator: " + token);
    }
  }

  return evaluate();
};

