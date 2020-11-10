var nombre='malle';
 // imprime el valor de la variable por consola
console.log(nombre);
// tyupeof se utiliza para conocer el tipo de dato que se esta imprimiendo
console.log(typeof nombre);

//variable numerica 
// se utiliza var como palabra reservada para inicializar las variables

var edad = 30;
console.log(edad);
console.log(typeof edad);

var salario = 100.25;
console.log(salario);

// si el numero es un decimal no podra tener como residuo un  cero entonces esto nos muestra un falso
// para el numero que es decimal y un verdadero para el numero entero y
// de esta forma podremos identififcar un numer5o entero y uno decimal 
console.log(edad % 1==0);
console.log(salario % 1==0);

// boolean
var esMayor = false;
console.log(typeof esMayor);

var edad1 ='2';
var salario1 =5.5;

var edadSalario = edad1 + salario1;
console.log(edadSalario);


// entre los datos primitivos tenemos default y undefined
var mascota = null;
console.log(typeof mascota);
console.log(mascota == null);



console.log(typeof casa);