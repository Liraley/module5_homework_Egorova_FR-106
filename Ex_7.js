// Задание 7.
// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.
let arr = [0,0, 2, 2, 1, -1];
let countZero = 0;
let countOdd = 0;
let countEven = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 0) {
    countZero++;
  } else {
    let parityСhecker = arr[i] % 2;
    if (parityСhecker === 0) {
      countEven++;
    } else {
      countOdd++;
    }
  }
}
  
console.log(countZero, countOdd, countEven);

onsole.log(`Ключ - ${key}, значение - ${map.get(key)}`)
}