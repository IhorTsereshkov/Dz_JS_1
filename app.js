// const a = "10";
// const b = 30;
// const name = "Ihor";
// const profession = "мастер";
// //console.log(`Hello ${profession}`);

// let user = prompt("Ваше имя");
// //console.log("Привет, " + user);
// alert("Hello, " + user);
// const bool = confirm("Вы точно хотите уйти с сайта?");
// console.log(bool);
// console.log(3 < 10);
// console.log(4 === "4");

// const numb = 1;
// if (numb > 10) {
//   console.log("Ваше число больше 10");
// } else {
//   console.log("Ваше число меньше 10");
// }

// const a = 10;
// const b = 14;
// if (a > 11 || b > 10) {
//   console.log("Число верное");
// } else {
//   console.log("Число не верное");
// }

// //Заадание 1
// const name = prompt("Ваше имя");
// alert(`Привет ${name}`);

// //Заадание 2
// const number = prompt("Введите число");
// const step = prompt("Введите степень");
// console.log(number ** step);

//Заадание 4
// let a = "some text";
// if ((a = "some text")) {
//   a = "another text";
//   console.log(a);
// } else {
//   a = "some text";
//   console.log(a);
// }

// //Заадание 5
// let a = 0;
// if (a == 0) {
//   console.log((a = 1));
// } else if (a < 0) {
//   console.log((a = "less then zero"));
// } else if (a > 0) {
//   console.log((a *= 2));
// }

// //Заадание 6
// const numb = +prompt("Введите число");
// let result;
// if (numb < 5) {
//   result = "0";
//   console.log(result);
// } else if (numb > 5) {
//   result = "1";
//   console.log(result);
// }

// //Заадание 7
// let numb = +prompt("Введите первое число: ");
// let numb1 = +prompt("Введите второе число: ");
// if (numb > numb1) {
//   console.log(`Большее число: ${numb}`);
// } else if (numb < numb1) {
//   console.log(`Большее число: ${numb1}`);
// } else {
//   console.log("Вы ввели одинаковые числа");
// }

// // //Заадание 8
// let num1 = +prompt("Введите первое число: ");
// let num2 = +prompt("Введите второе число: ");
// if (num2 % num1 == 0) {
//   console.log(`Число кратно`);
// } else {
//   console.log("Число не кратно");
// }

// //Заадание 9
// const numb = +prompt("Введите средний балл: ");
// if (numb >= 1 && numb <= 4) {
//   console.log("Иди учись дальше");
// } else if (numb >= 5 && numb <= 8) {
//   console.log("Неплохо,  но можно и лучше");
// } else if (numb >= 9 && numb <= 10) {
//   console.log("Отличник");
// } else {
//   console.log("Введите средний балл (от 1 до 10): ");
// }

// //Заадание 10
// const numb = +prompt("Бал за экзамен: ");
// const project = +prompt("Количество выполненных проектов: ");
// if (numb > 90 && numb <= 100 && project > 10) {
//   console.log("100 баллов");
// } else if (numb >= 75 && numb <= 90 && project >= 5) {
//   console.log("90 баллов");
// } else if (numb > 50 && project >= 2) {
//   console.log("75 баллов");
// } else {
//   console.log("0 баллов");
// }

// //Заадание 11
// const day = +prompt("Количество дней аренды автомобиля: ");
// if (day >= 7) {
//   alert("Стоимость аренды составит: " + (day * 40 - 50) + "$");
// } else if (day >= 3 && day < 7) {
//   alert("Стоимость аренды составит: " + (day * 40 - 20) + "$");
// } else if (day < 3 && day > 0) {
//   alert("Стоимость аренды составит: " + day * 40 + "$");
// } else {
//   alert("Введите число больше 0");
// }

const numb = +prompt("Введите число: ");

for (let i = 0; i < 5; i++) {
  if (numb === 10) {
    console.log("Равно 10");
  } else console.log("Не равно 10");
}
