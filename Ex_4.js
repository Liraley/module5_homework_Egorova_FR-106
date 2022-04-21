// Задание 4.
// Записать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math.
let x = Math.random() * 101;
let xStr = x.toString();
let result;

for (let i = 0; i < xStr.length; i++) {
  if (xStr.slice(i, i + 1) === ".") {
    result = xStr.slice(0, i);
    break;
  }
}

console.log(result);

