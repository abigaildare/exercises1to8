// Week 2 - Loops

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
let counter1= 1;
while (counter1 <= 5) {
  console.log(counter1);
  counter1++;
}

// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
let counter2 = 1;
do {
  console.log(counter2);
  counter2++;
} while (counter2 <= 5);

// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
for (let counter3 = 1; counter3 <= 5; counter3++) {
  console.log(counter3);
}

// Exercise 4. Now we want a loop that prints the integers
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.
// while loop
let counter4a = 10;
while (counter4a >= 1) {
  console.log(counter4a);
  counter4a--;
}

// do while loop
let counter4b = 10;
do {
  console.log(counter4b);
  counter4b--;
} while (counter4b >= 1);

// for loop
for (let counter4c = 10; counter4c >= 1; counter4c--) {
  console.log(counter4c);
}

// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

// while loop
let counter5a = 7;
while (counter5a <= 27) {
  console.log(counter5a);
  counter5a++;
}

// do while loop
let counter5b = 7;
do {
  console.log(counter5b);
  counter5b++;
} while (counter5b <= 27);

// for loop
for (let counter5c = 7; counter5c <= 27; counter5c++) {
  console.log(counter5c);
}   

// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc.
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

// while loop
let counter6a = 10;
while (counter6a <= 100) {
  console.log(counter6a);
  counter6a += 10;
}

// do while loop
let counter6b = 10;
do {
  console.log(counter6b);
  counter6b += 10;
} while (counter6b <= 100);

// for loop
for (let counter6c = 10; counter6c <= 100; counter6c += 10) {
  console.log(counter6c);
}

// Exercise 7. Add a comment as to why the following loop is an infinite loop (will
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.

let counterFour = 1;
while (counterFour < 2) {
  console.log("HELP ME!");
  counterFour--;
}
// The loop is an infinite loop because the condition `counterFour < 2` will always be true since `counterFour` is being decremented in each iteration. 
// To fix the loop so that it stops when `counterFour` is equal to -100, 
// we can change the condition to `counterFour > -100`.

let counterFourFixed = 1;
while (counterFourFixed > -100) {
  console.log("HELP ME!");
  counterFourFixed--;
}


// Exercise 8. Make a variable that contains your favorite integer. Write a loop
// (your choice which type) that prints the integers from 0 to that number.

let favoriteInteger = 7;
for (let counter8 = 0; counter8 <= favoriteInteger; counter8++) {
  console.log(counter8);
}

// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)

let favoriteNumber = 7
for (let counter9 = 0; counter9 <= 100; counter9++) {
  if (counter9 === favoriteNumber) {
    console.log(counter9, " my favorite number!");
  } else {
    console.log(counter9, " not my favorite number");
  }
}
// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or
// doing some research and write down your thoughts in a comment below:

// I would use a for loop when I know how many times I want to repeat 
// something, such as counting from 1 to 10
// I would use a while loop when I want to repeat something as long 
// as a condition remains true, especialally when I don't know how many times I want to repeat it.
// I would use a do while loop when the code must run at least once, 
// before chechking whether the condition is ture.


// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/

for (let outsideCounter = 0; outsideCounter <= 3 /*???*/; ) {
  console.log("counting down from", outsideCounter);
  for (let insideCounter = outsideCounter /*???*/ /*???*/; ; ) {
    console.log("inside" /*???*/);
  }
  console.log("***********************************");
}

for (let outsideCounter = 0; outsideCounter <= 3; outsideCounter++) {
  console.log("counting down from", outsideCounter);

  for (let insideCounter = outsideCounter; insideCounter >= 1; insideCounter--) {
    console.log("inside", insideCounter);
  }
  console.log("***********************************");
}

// Exercise 12. In your own words, explain what a nested loop is and why you might want to use one.

// A nested loop is a loop that is placed inside another loop. 
// The inner loop will run completely for each iteration of the outer loop. 
// Nested loops are useful when you need to perform a set of operations multiple times for each iteration of an outer loop, 
// such as when working with multi-dimensional data structures like arrays or matrices.

// Nested loops is a loop inside another loop. 
// I might use a nested loop when I want to perform repeated operations and countdowns.
   

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
//

// Commit your file to GitHub.