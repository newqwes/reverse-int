module.exports = function reverse (n) {
    
return String(Math.abs(n)).split('').reverse().join('');

// Math.abs модуль числа;
// string преобразует в строку так как split работает только со строками;
// split разбивает объект String на массив строк путём разделения строки указанной подстрокой;
// reverse первый элемент массива становится последним, а последний — первым;
// join из массива в строку.
}
