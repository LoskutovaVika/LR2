let numberOne = Number(prompt('Введите первое чиcло', 0)), numberTwo = Number(prompt("Введите второе число", 0)), numberThree = Number(prompt("Введите третье число",0)), middle;
if  (((numberOne < numberTwo) && (numberTwo< numberThree)) || ((numberThree < numberTwo) &&(numberTwo < numberOne))){
    middle = numberTwo;
} else if (((numberTwo < numberOne) && (numberOne< numberThree)) || ((numberThree < numberOne) && (numberOne< numberTwo))) {
    middle = numberOne;
}else {
    middle = numberThree;
}
alert(`Введенные числа: ${numberOne}, ${numberTwo},  ${numberThree}`+'\n'
+ `Среднее из них: ${midle}`);