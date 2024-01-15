//Create a mouse object that has four properties and three methods

```
// Define a mouse object
mouse = new object

// Assign four properties to the mouse object: name, color, weight, and speed
mouse.name = "Mickey"
mouse.color = "black"
mouse.weight = 0.5 // in kilograms
mouse.speed = 10 // in meters per second

// Define three methods for the mouse object: run, squeak, and eat
mouse.run = function
    // Increase the speed of the mouse by 5 meters per second
    mouse.speed = mouse.speed + 5
    // Print a message that shows the new speed of the mouse
    print "The mouse is running at " + mouse.speed + " meters per second."
end function

mouse.squeak = function
    // Print a message that makes a squeaking sound
    print "Squeak squeak!"
end function

mouse.eat = function
    // Take a parameter called food that represents what the mouse is eating
    parameter food
    // Increase the weight of the mouse by 0.1 kilograms
    mouse.weight = mouse.weight + 0.1
    // Print a message that shows what the mouse is eating and its new weight
    print "The mouse is eating " + food + " and now weighs " + mouse.weight + " kilograms."
// end function