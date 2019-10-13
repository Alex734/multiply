/*let first = '155';
let second = '522';
multiply(first,second);

function multiply(first, second) {
  
  let product = 0;
  let zeros = '';

  for (let j = 0; j < second.length; j++){
    for(let i = 0; i < second.length - j - 1 ; i++){
      zeros += '0';
    }
    product += first * (second[j] + zeros);
    zeros = '';
    alert(product);
  }

  return `${product}`;
}*/

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
