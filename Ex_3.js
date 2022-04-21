// Задание 3.
// Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".
let str = "Hello";
let result = "";

for (i = str.length; i >= 0; i--) {
  result += str.charAt(i);
}

console.log(result);

