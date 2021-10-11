//How to replace characters in String => Example:
let txt = "This code is TRASH"
let newGreeting = txt.replace("TRASH", "quite nice, and easy to follow. Keep practicing!")

console.log(newGreeting)

//Converting text in String to upper-case
// - let str = "This should all be upper-case don't you think?"
// - let bgStr = str.toUpperCase()
// - console.log(bgStr)
//Creating a function that takes a string and returns it in uppercase
 const turnToUpper = (str) => {
     return str.toUpperCase()
 }

 const turnToLower = (str) => {
    return str.toLowerCase()
}

 console.log(turnToUpper("This function is working correctly"))
 console.log(turnToUpper("An i can repeat it as many times as I please and it will work"))
 console.log(turnToLower("This function is working correctly, in the case of lower-casing"))
 console.log(turnToLower("AND THE SAME IS TRUE ABOUT IT'S REUSABILITY"))
 


