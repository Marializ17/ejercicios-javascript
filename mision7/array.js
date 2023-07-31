let arr = ["Primero", "Segundo", "Tercero", "Cuarto", "Soy el último elemento"];
let newArray = ["Quinto", "Sexto"];

arr.splice(arr.length - 1, 0, ...newArray);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
