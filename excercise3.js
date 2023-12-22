let x = Number(prompt("Введите x", 0)), a = 4.8 , b = 0.51, y;

switch(x){
    case(-2):
        y = Math.log(Math.abs(x) + ((a*x**2)+1)**(1/2));
        alert(y);
        break
    case(8):
        y = Math.asin(b/((x**2)+ 1));
        alert(y);
        break
    case(1):
        y = ((x**2) + (a**2))**(1/2);
        alert(y);
        break
    default:
        alert(" ")
}
