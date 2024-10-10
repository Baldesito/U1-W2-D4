        // RISPOSTA 1.

function area(l1, l2) {
    return l1 * l2;
  }
  console.log(area(5, 10));

        // RISPOSTA 2.

function crazySum(num1, num2) {
    if (num1 === num2) {
      return (num1 + num2) * 3;
    } else {
      return num1 + num2;
    }
  }
  console.log(crazySum(3, 3));
  console.log(crazySum(3, 4));

        // RISPOSTA 3.

function crazyDiff(num) {
    let diff = Math.abs(num - 19);
    if (num > 19) {
      return diff * 3;
    } else {
      return diff;
    }
  }
  console.log(crazyDiff(10));
  console.log(crazyDiff(25));

        // RISPOSTA 4.

function boundary(n) {
    return (n >= 20 && n <= 100) || n === 400;
  }
  console.log(boundary(25));
  console.log(boundary(10));
  console.log(boundary(400));

        // RISPOSTA 5.

function epify(str) {
    if (str.startsWith("EPICODE")) {
      return str;
    } else {
      return "EPICODE " + str;
    }
  }
  console.log(epify("Hello"));
  console.log(epify("EPICODE World")); 

        // RISPOSTA 6.

function check3and7(num) {
    return num % 3 === 0 || num % 7 === 0;
  }
  console.log(check3and7(9));
  console.log(check3and7(10));
  console.log(check3and7(14));

        // RISPOSTA 7.

function reverseString(str) {
    return str.split("").reverse().join("");
  }
 
  console.log(reverseString("EPICODE"));

        // RISPOSTA 8.

function upperFirst(str) {
    return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  }
  console.log(upperFirst("hello world from epicode"));  

        // RISPOSTA 9.

function cutString(str) {
    return str.slice(1, -1);
  }
  console.log(cutString("EPICODE"));  

        // RISPOSTA 10.

function giveMeRandom(n) {
    let randomArray = [];
    for (let i = 0; i < n; i++) {
      randomArray.push(Math.floor(Math.random() * 11));
    }
    return randomArray;
  }
  console.log(giveMeRandom(5));