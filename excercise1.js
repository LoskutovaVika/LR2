let a = Number(prompt('Введите чиcло А', 0)), b = Number(prompt("Введите число B", 0)), c = Number(prompt("Введите число С",0));
if ((a > 0) || (b > 0) || (c> 0)) {
    alert('Хотя бы одно из чисел A, B, C положительно');
} else {
    alert('Числа A, B и C отрицательные');
}