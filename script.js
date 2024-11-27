

let ism = prompt("ismingizni kiriting")
let yow = +prompt("yowingizni kiriting")

while (yow == "" || yow == 0 || isNaN(yow)) {
  yow = +prompt("iltimos yowingizni kiriting")
}

while (ism == "" ) {
  ism = +prompt("iltimos ismingizni kiriting")
}

let misol = +prompt("5 + 6 = ?")
let misol2 = +prompt("2 * 10 = ?")
let misol3 = +prompt("9 / 4 = ?")
let misol4 = +prompt("35 - 12 = ?")
let misol5 = +prompt("13 % 12 = ?")

while (misol == "" ) {
  misol = +prompt("iltimos jovobni son koriniwida yozing")
}

while (misol2 == "" ) {
  misol2 = +prompt("iltimos jovobni son koriniwida yozing")
}

while (misol3 == "" ) {
  misol3 = +prompt("iltimos jovobni son koriniwida yozing")
}

while (misol4 == "" ) {
  misol4 = +prompt("iltimos jovobni son koriniwida yozing")
}

while (misol5 == "" ) {
  misol5 = +prompt("iltimos jovobni son koriniwida yozing")
}


console.log(ism);
console.log(yow);

if (misol == "11") {
  console.log("sizning jovob togri " + misol);
}else{
  console.log("sizning jovob notogri: " + misol + " togri jovob: 11");
}

if (misol2 == "20") {
  console.log("sizning jovob togri " + misol2);
}else{
  console.log("sizning jovob notogri: " + misol2 + " togri jovob: 20");
}


if (misol3 == "2") {
  console.log("sizning jovob togri " + misol3);
}else{
  console.log("sizning jovob notogri: " + misol3 + " togri jovob: 2");
}


if (misol4 == "23") {
  console.log("sizning jovob togri " + misol4);
}else{
  console.log("sizning jovob notogri: " + misol4 + " togri jovob: 23");
}

if (misol5 == "1") {
  console.log("sizning jovob togri " + misol5);
}else{
  console.log("sizning jovob notogri: " + misol5 + " togri jovob: 1");
}