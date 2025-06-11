// // This is ex1.js 

// Variables
var firstName = "Mahamuda";
var lastName = "Sultana Mumu";
var yearOfBirth = 2004;

// Calculate age
var currentYear = new Date().getFullYear();
var age = currentYear - yearOfBirth;

// Display the message in the HTML element
var message = "Hi, my name is " + firstName + " " + lastName + ". I'm " + age + " years old and I'm learning Javascript.";
document.getElementById("student_message").innerText = message;


//  division part 
let num_1 = 101; 
let num_2 = 7;

let result = (num_1/num_2);
 
console.log(result);


document.getElementById("result").innerText = result .toFixed(2) ;


var phone1 = "988866552";
var phone2 = "99087612366";
var phone3 = 876543123;

phone3.toString ();
if (phone1.length ===9){
    console.log("phone1 is valid");
    
}
else if (phone2.length ===9){
    console.log("phone1 is valid");
    
}
else if (phone3.length ===9) {
    console.log("phone3 is valid"); 
}

else {
    console.log("No valid phone number found");
    
}

// part 5
var power = Math.pow (32,6) ;
console.log(power);

// part 6 
let url1 = "www.udemy.com";
// "https://" add kora
let fullsite = "http://" + url1 ;

document.getElementById("url_2"). innerText = fullsite;

let url3 = "https://www.google.com";

// "https://" remove kora
let sites = url3.replace("https://", "");

document.getElementById("url_4").innerText = sites;





// part 7
  var quantity = "25";
    var number = 6;
    var pressure;
    var temperature = null;

    console.log(quantity += quantity);   /* 2525*/
    console.log( (7+5) / number + 2 ); /* 4 */
    console.log(pressure); /* undefined */
    console.log(temperature); /*null*/ 
    console.log(typeof pressure); /* undefined*/
    console.log(typeof temperature); /* object */



    // part 8 
 



