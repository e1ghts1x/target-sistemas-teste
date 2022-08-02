var fibo = 13
var a = 0
var b = 1
var aux = 0 

console.log(1)

for(i=0; i<fibo; i++){
    aux = a + b;
    a = b
    b = aux

    console.log(aux);
}