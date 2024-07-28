// let a = 5;
// const b = 2;

// const myName = "shaw";
// // 
// console.log(a+b);
// console.log(a*b);
// a = a+b;
// console.log(a/b);
// console.log("hello "+ myName)

//===================================
// 2.4

// const amIfat = null;
// let something;
// console.log(amIfat)
// console.log(something)

//===================================
// 2.5

// const daysofWeek = ["mon", "tue", "wed", "thu", "fri", "sat"]

// // Get Item from Array
// console.log(daysofWeek);

// // Add one more day to the array
// daysofWeek.push("sun")

// console.log(daysofWeek);

//===================================
// 2.6 Objects

// const playerName = "nico";
// const playerPoints = 121212;
// const playerHandsome = true;
// const playerFat = "little bit";

// const playerArray = ["nico", 1212, false, 'little bit']

// const player = {
//     name: "nico",
//     points: 10,
//     Handsome: false,
//     Fat: true
// };
// console.log(player);
// console.log(player.name);

// player.name = "potato";
// player.lastName = "Lee";
// player.points = player.points + 15;

// console.log(player.points);

//===================================
// 2.7 Objects

// function sayHello(name){
//     console.log("Hello! my name is "+name);
// }

// alert();
// console.log()

// sayHello("Shaw");
// sayHello("nico");
// sayHello("press");

//===================================
// 2.8 Objects 2

// function sayHello(nameOfPerson, age){
//     console.log("Hello my name is "+ nameOfPerson + 
//         "and I'm " + age
//     )
// }
// sayHello("shaw", 13)

// function plus(firstNumber, secondNumber){
//     console.log(firstNumber + secondNumber);
// }
// function divide(a, b){
//     console.log(a/b)
// }
// plus(3, 13);
// divide(93, 20);

// const player = {
//     name : "nico",
//     sayHello: function(toSomeone){
//         console.log("Hello! " + toSomeone + " nice to meet you!");
//     }
// };

// console.log(player.name);
// player.sayHello("Shaw");

//===================================
// 2.9~2.10 = Recap

// const player ={
//     name:"Shaw",
//     age:89
// };

// console.log(player, console)

// function minusFive(potato){
//     console.log(potato - 5);
// };

// minusFive(5, 3, 42, 123, 4, 5)

// const calculator = {
//     add: function(a, b){
//         return(a + b);
//     },
//     sub: function(a, b){
//         return(a - b);
//     },
//     divide: function(a, b){
//         return(a/b);
//     },
//     square: function(a,b){
//         return(a**b);
//     }
// };

// const plus = calculator.add(3, 2);
// calculator.sub(6, 2);
// calculator.divide(4, 2);
// calculator.square(5, 2);

// console.log(plus);

//===================================
// 2.11~2.12 Returns

// const age = 65;
// function calculateKrAge(ageOfForeigner){
//     return ageOfForeigner + 2;
// }

// const krAge = calculateKrAge(5);
// console.log(krAge);

//===================================
// 2.13~2.16 Conditionals

// var age = prompt("How old are you?");

// // Int로 바꿔주는 함수
// age = parseInt();

// console.log(age);
// console.log(typeof(age));

// const age = parseInt(prompt("How old are you?"));

// console.log(isNaN(age));

// if(isNaN(age) || age <0){
//     console.log("Please write a real positive number");
// } else if (age<18){
//     console.log("You are too young.")
// } else if (age >= 18 && age <= 50){
//     console.log("You can drink")
// } else if (age >=51 && age <= 80){
//     console.log("You should exercise.")
// } else if (age === 100){
//     console.log("Hello 100!!")
// } else if(age>80){
//     console.log("You can't drink")
// }

