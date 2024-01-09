let expr: string | null = prompt("Type an arithmetic expression?", "2*3+2");

if (expr !== null) {
  alert(eval(expr));
}

// Test
function testEval() {
  let testExpr = "5 + 5";
  let result = eval(testExpr);
  if (result !== 10) {
    console.error("Test failed");
  } else {
    console.log("Test passed!");
  }
}

testEval();
