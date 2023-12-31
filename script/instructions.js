 //Answer make sure to answer all of the questions between the questions that follow

// The following exercise consists of DOM manipulation, variables, conditional statements, loops, arrays and objects Everything you have covered so far.
// The questions will vary with difficulty and you may be required to combine more than one topic to complete a certain exercise. 
// ***You will not be allowed to use Youtube solutions if you are unable to explain your solutions that follow. After I check your answer and you cannot explain your code, I will mark it as a strike against your name.
// AIM: To complete the exercise fully without any assistance as much as possible.
// REMEMBER:   The feeling for anxiousness and excitement is that of a fine line...Physiologically they are almost identical. 
//             The feeling you're feeling is excitement not nervousness. I know you got this! I believe in you even if you don't believe in yourself!:)


// 1. Use the following id="heading" to change the heading(This is the main heading) of the html to 'Javascript', DO NOT USE QUERY SELECTOR
let header = document.getElementById('heading')
header.innerText = ("Javascript")

// 2. Use the class='paragraph' and change the information to 'This is a language I have mastered and I am proud of myself. I complished this because I believed in myself'
document.querySelector('.paragraph').textContent = "This is a language I have mastered and I am proud of myself. I complished this because I believed in myself";

// 3. Use the h3 element and change the heading(Subheading) to 'Things I've accomplished so far'. Hint: use querySelector
let h3 = document.querySelector("h3")
h3.innerText = ("Things I've accomplished so far")

// 4. Change the paragraph below Question3(above) to 'I have discovered that I can accomplish anything I put my mind to'Hint: Use querySelectorAll and index or use getElementByTagName and index
document.getElementsByTagName('p')[1]
.innerText = "I have discovered that I can accomplish anything I put my mind to"




// So far you have hints, however the hints have lessened.
// 5.1. Attach the first input to a variable
let input1 = document.querySelector('[data-firstMultiply]').value

// 5.2. Attach the second input to a variable
let input2 = document.querySelector('[data-secondMultiply]').value

// 5.3. Attach the FIRST button to a variable(going to add an eventListener to button)
const multiply =
document.querySelector('[data-calculate1]')

// 5.4. Attach the FIRST span element to a variable(To display the information to)
//         P.S. for the next step make use of console.log() to keep track of where data is going
let result1 = document.querySelector('[data-first]')

// 5.5. Create a normal function that allows us to multiply the 2 inputs together and writes the information to the FIRST span element.
function multiplyBy() {
    num1 = document.querySelector('[data-firstMultiply]').value;
    num2 = document.querySelector('[data-secondMultiply]').value;
    document.querySelector('[data-first]').innerText = num1 * num2;
}

// 5.6. Add an event listener to the button that runs the function that tyou created
multiply.addEventListener('click', multiplyBy)


// 5.7 Hmm......Did you forget to make your input tags return a value instead of the element? (0.0)
//     Or did you forget we are writing to an element not an input?....which means your answer will be displayed with innerText

// Okay, that was pretty awesome...not too bad when you have the steps?

// 6. Now you will have to return the calculation of the 2 numbers from the modulus input for eg.......4....%....2....= 0
// 6.1 Set the first modulus input to a variable 
let input3 = document.querySelector('[data-firstModulus]').value

// 6.2 Set the send modulud input to a variable
let input4 = document.querySelector('[data-secondModulus]').value

// 6.3 Set the SECOND span to a varable(will display answer)
let result2 = document.querySelector('[data-second]')

// 6.4 Set the SECOND button to a variable(to run event listener)
const divide = document.getElementById('calculate2')

// 6.5 Create a normal function to calculate the modulus of the inputs
function divideBy() {
    num1 = document.querySelector('[data-firstModulus]').value;
    num2 = document.querySelector('[data-secondModulus]').value;
    document.querySelector('[data-second]').innerHTML = num1 / num2;
}

// 6.6 Add an event listener to the button which will run the function you created
divide.addEventListener('click', divideBy)

// Hmmm......That wasn't too bad....I knew you could do it! I believe in you.
// You should now have an idea of the steps neccesary to complete actions using DOM manipulation.

// Okay now that you are aware of the steps needed, try no 7
// 7.1 Change the text of 'Bubble Tea' to 'White Tea'
document.getElementById('bubbleTea').innerText = "White Tea";

// 7.2 Change the text of 'Green Tea' to 'Black tea'
document.getElementsByClassName('greenTea')[0].innerText = "Black Tea";

// 7.3 Change the text of 'Iced Tea' to 'Herbal Tea'
let tea = document.querySelector('[data-icedTea]').innerText = "Herbal Tea";

// You're eating Javascript, and again....I'm proud of you!

// 8. Declare a variable called lastName and add a value to it(value must be a string)
let lastName = 'Jones'
console.log(lastName);

// 9. Declare a variable called parentsAge and give it a value of 20(value must be a number)
let parentsAge = 20
console.log(parentsAge);

// 10. Create an array with called coolCars and give it the following value: ['BMW','Bugati','Ferrari','McLaren', 'Mercedes']
let coolCars = [
    'BMW',
    'Bugatti',
    'Ferrari',
    'McLaren',
    'Mercedes'
]
console.log(coolCars);

//             Now to manipulate the arrays. ;)
// 11. Write the code to change the 'McLaren' value to 'Lamborghini' in the array Hint: use indexing to access different values in arrays
coolCars[3] = "Lamborghini";
console.log(coolCars);

// 12. Use a for loop to loop through the array, and console.log every value inside of the array.


// 13. Reverse the array and console.log the reversed array.
console.log(coolCars.reverse());

// 14. Write the code to remove the last item in the array(coolCars not the reversed array) and store it in a variable....which means your array of coolCars must look like : ['BMW','Bugati','Ferrari','Lamborghini]
console.log(coolCars.reverse());
coolCars.splice(4, 1)
console.log(coolCars);

// 15. Now write the code to use the variable you made in no.14 and add it to the FRONT of the array. Your coolCars array should now look like:
// [ 'Mercedes', 'BMW', 'Bugati', 'Ferrari', 'Lamborghini']
coolCars.splice(0, 0, 'Mercedes')
console.log(coolCars);

//             Time to SWITCH it up a bit
// 16. Write a simple conditional statement that will check if someone is younger than 18 or older than 18. The variable will be called age = 18 then a=17 to check

// 17. Make use of a switch statement and create a possible soultion for no.16
let age = 18;
if(age > 17){
  console.log("You are 18!");
} else {
  console.log("You are younger than 18");
}

// 18.     USE A SWITCH statement!!!!!
// A students Maths mark was 77%,their Physics marks was 70% and their English was 50%. You are required to calculate their average mark. Then we can check the average mark and return a messageto the console, if averageMark is :
//         100%-80%(message = "You did well your average was ..."), 
//         79%-70%(message="You average was good, it was ..."),
//         69%-50%(message='Your average was okay, it was ..'), 
//         49%-0% (message ='You must work harder next time')
let marks = [77, 70, 50]
let sum = 0;
marks.forEach(function(num) {sum += num});
let average = sum / marks.length;
console.log(average);

let averageMark = 66
switch (true){
    case averageMark <= 49:
        console.log(`You must work harder next time ${averageMark}`);
        break;
    case averageMark <= 69:
        console.log(`Your average was okay, it was ${averageMark}`);
    break;
    case averageMark <= 79:
        console.log(`You average was good, it was ${averageMark}`);
    break;
    case averageMark <= 100:
        console.log(`You did well your average was ${averageMark}`);
    break;
    default: 
        console.log('enter a valid number');
    break;
}

// 19. USE the variable that you created in question 9 and use a while loop to print each iteration to the console and at that same instance, increase the variable used by 1


// 20. USE while or a do while loop to print out the array of Question15(coolCars).


// 21. Create an object called chair and give it a 
//         property of legs and a value of 4,
//         a secondProperty of material with a value of plastic
let chair = {
    legs: 4,
    material: 'plastic'
}
console.log(chair);

// 22. Write the code that adds a property of 
//         'armRestBars' with a value of 'none' 
//         to the chair object.
chair['armRestBars'] = 'none';

// 23.1.   What code will I write to view the value of the armRestBars.
console.log(chair.armRestBars);

// 23.2    What code can I use to delete the property of legs with the value of 4.
delete chair['legs']
console.log(chair);

// 24. Create an factory function that can be used to return objects of electrical devices.
//         the factory function should include the properties of 
//         name,
//         type,
//         year,
//         description
function device(name, type, year, description) {
    return{
        name, type, year, description
    }
}

// 24. Create 4 objects of your choice using a factory function and console.log() each of them
let device1 = device('Samsung S23 Ultra', 'Cell Phone', 2023, "It's literally just a phone...")
let device2 = device('Samsung Fridge', 'Fridge', 2023, "It's literally just a fridge...")
let device3 = device('Samsung Microwave', 'Microwave', 2023, "It's literally just a microwave...")
let device4 = device('Samsung Laptop', 'Laptop', 2023, "It's literally just a laptop...")
console.log(device1);
console.log(device2);
console.log(device3);
console.log(device4);


// 25. Create a constructor function to make an object of different car, types the properties should include,
//         this.brand,
//         this.model,
//         this.year,
//         this.transmission,
//         this.drivetrains
function car(brand, model, year, transmission, drivetrains) {
    this.brand = brand
    this.model = model
    this.year = year
    this.transmission = transmission
    this.drivetrains = drivetrains
    return this
}

// 26. Create 4 objects of your own and print to the console all of the created objects.
let car1 = new car('Hyundai', 'Grand i10', 2022, 'Manual', 'Front-Wheel Drive')
let car2 = new car('Ford', 'EcoSport', 2019, 'Manual', 'Front-Wheel Drive')
let car3 = new car('Audi', 'R8', 2022, 'Manual', 'Front-Wheel Drive')
let car4 = new car('McLaren', 'Senna', 2019, 'Manual', 'Rear-Wheel Drive')

console.log(car1);
console.log(car2);
console.log(car3);
console.log(car4);

// 27. After, push the 4 objects to an array called 'informationAboutCars'.
let informationAboutCars=[];
let cars = {};
car.brand = 'Hyundai', 'Ford', 'Audi', 'McLaren';
car.model = 'Grand i10', 'EcoSport', 'R8', 'Senna';
car.year = 2022, 2019, 2022, 2019
car.transmission = 'Manual', 'Manual', 'Manual','Manual';
car.drivetrains = 'Front-Wheel Drive', 'Front-Wheel Drive', 'Front-Wheel Drive', 'Rear-Wheel Drive';
informationAboutCars.push(cars);

// 28. Create a function that can be used 'globally', the function should return a sentence containing all the properties used inside the object, eg 'The car brand Ford has a model of a Figo that was produced in 2019. It is a manual and is a front wheel drive'
function carName(brand, model, year, transmission, drivetrains) {
    return{
        brand: brand,
        model: model,
        year: year,
        transmission: transmission,
        drivetrains: drivetrains
    }
}
let hyundai = carName('Hyundai', 'Grand i10', 2022, 'Manual', 'Front-Wheel Drive')
let ford = carName('Ford', 'EcoSport', 2019, 'Manual', 'Front-Wheel Drive')
let audi = carName('Audi', 'R8', 2022, 'Manual', 'Front-Wheel Drive')
let mclaren = carName('McLaren', 'Senna', 2019, 'Manual', 'Rear-Wheel Drive')

console.log(`The car brand ${brand} has a model of a ${model} that was produced in ${year}. It is a ${transmission} and is a ${drivetrains}`);


// 29. Make sure to write the above sentences for each car inside the corresponding h4 elements


// 30. Use the array in question10 that you created and create a conditional statement that check if 'BMW' appears in the array. The console should return 'This item does appear in the array' or 'The item does not appear in the array'


// 31. Declare an array and give it a value of [5, 18, 14, 16, 2, 1].
//     Create a program that returns the middle value of the current array, if array length is even return 2 numbers, if the array lengthis odd return 1 number


// 32. Go back to Question 16 and use the conditional statement you created. The age has to be requested from the user and the message ust be written to the html page in the corresponding element
