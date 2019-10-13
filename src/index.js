module.exports = function multiply(first, second) {
  
  let first_array = first.split('').reverse();
  let second_array = second.split('').reverse();
  let stack = [];

  for (let i = 0; i < first_array.length; i++) {
    for (let j = 0; j < second_array.length; j++) {
      let multiply = first_array[i] * second_array[j];
      stack[i + j] = (stack[i + j]) ? stack[i + j] + multiply : multiply;
    }
  }

  for (let i = 0; i < stack.length; i++) {
    let numerical_digit = stack[i] % 10;
    let move_in_next_discharge = Math.floor(stack[i] / 10);
    stack[i] = numerical_digit;

    if (stack[i + 1])
      stack[i + 1] += move_in_next_discharge;
    else if (move_in_next_discharge != 0)
      stack[i + 1] = move_in_next_discharge;
  }

  return stack.reverse().join('');
}
