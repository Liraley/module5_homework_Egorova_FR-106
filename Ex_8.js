// Задание 8.
// Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
// Используйте шаблонные строки.
let map = new Map();

map.set('one', 'один');
map.set('два', 'two');
map.set('три', 'three');

for (let key of map.keys()){
    console.log(`Ключ - ${key}, значение - ${map.get(key)}`)
}