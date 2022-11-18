var arr = ["Primero", "Segundo", "Tercero", "Cuarto", "Soy el último elemento"];
var newArray = ["Quinto", "Sexto"];
var i = 0;
arr.splice(4, 0, newArray[0]);
arr.splice(5, 0, newArray[1]);


for (i = 0; i < arr.length; i++ ) {
  console.log(arr[i]);
}

