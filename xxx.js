const inputANode = document.querySelector('.js-input-a');
const inputBNode = document.querySelector('.js-input-b');
const selectOperationNode = document.querySelector('.js-select-operation');
const btnresultNode = document.querySelector('.js-btn-result');
const outputNode = document.querySelector('.js-output');


btnresultNode.addEventListener('click', function () {
   const a = Number(inputANode.value);
   const b = Number(inputBNode.value);
   const operation = selectOperationNode.value;

   const result = calculate({
      a,
      b,
      operation
   });

   console.log(result);
})

function sum(a, b) {
   return a + b;
}
function substract(a, b) {
   return a - b
}
function multiply(a, b) {
   return a * b
}
function divison(a, b) {
   return a / b
}

const OPERATIONS = {
   sum: '+',
   substract: '-',
   multiply: '*',
   divison: '/',
}

function calculate({ a, b, operation }) {
   let result = null;

   switch (operation) {
      case OPERATIONS.sum:
         result = sum(a, b);
         break

      case OPERATIONS.substract:
         result = substract(a, b);
         break

      case OPERATIONS.multiply:
         result = multiply(a, b);
         break

      case OPERATIONS.divison:
         result = divison(a, b);
         break
      default:
         break;
   }

   return result;
}