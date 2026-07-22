// Wait until the HTML document has completely loaded
document.addEventListener('DOMContentLoaded', function () {

let node = document.getElementById('fullname');

node.style.border = '2px solid blue';

console.log(node);
console.log(node.tagName);


// Select another element by ID
node = document.getElementById('emailadd');

node.style.border = '2px solid red';


// ----------------------------------------
// 2. Select elements by class name
// ----------------------------------------

let navigation = document.getElementsByClassName('topnav');

console.log(navigation);


// getElementsByClassName returns a collection.
// Select the first element using [0].
navigation[0].style.backgroundColor = 'lightgray';


// ----------------------------------------
// 3. Select elements by tag name
// ----------------------------------------

let links = document.getElementsByTagName('a');

console.log(links);


// Change the color of all navigation links
for (let link of links) {
    link.style.color = 'black';
}


// Select all labels
let labels = document.getElementsByTagName('label');

for (let label of labels) {
    label.style.color = 'darkred';
}


// ----------------------------------------
// 4. querySelector
// Selects the first matching element
// ----------------------------------------

let firstLink = document.querySelector('a');

firstLink.style.fontWeight = 'bold';


// Select an element using its ID
let introMessage = document.querySelector('#intro-message');

introMessage.style.fontStyle = 'italic';


// Select an element using a CSS attribute selector
let requiredInput = document.querySelector('input[required]');

requiredInput.style.backgroundColor = 'lightyellow';


// ----------------------------------------
// 5. querySelectorAll
// Selects all matching elements
// ----------------------------------------

let allLinks = document.querySelectorAll('.topnav a');

for (let link of allLinks) {
    link.style.textDecoration = 'none';
}


// Select all checkboxes
let checkboxes = document.querySelectorAll(
    'input[type="checkbox"]'
);

for (let checkbox of checkboxes) {
    checkbox.style.accentColor = 'green';
}


// ----------------------------------------
// 6. Change text content
// ----------------------------------------

let pageHeading = document.querySelector('h1');

pageHeading.textContent = 'Contact Me Today';


let informationHeading =
    document.getElementById('information-heading');

informationHeading.textContent = 'Your Contact Information';


// ----------------------------------------
// 7. Create and insert a new element
// ----------------------------------------

// Step 1: Create a new paragraph element
const newParagraph = document.createElement('p');

// Step 2: Add text to the paragraph
newParagraph.textContent =
    'I will respond to your message as soon as possible.';

// Step 3: Add an ID
newParagraph.id = 'response-message';

// Step 4: Change its style
newParagraph.style.color = 'green';
newParagraph.style.fontWeight = 'bold';

// Step 5: Insert it after the introductory paragraph
introMessage.after(newParagraph);


// ----------------------------------------
// 8. Add an item to the select menu
// ----------------------------------------

const reasonMenu = document.getElementById('reason');

const newOption = document.createElement('option');

newOption.value = 'other';
newOption.textContent = 'Other';

reasonMenu.appendChild(newOption);


// ----------------------------------------
// 9. Button event listeners
// ----------------------------------------

const alertButton =document.getElementById('alert-button');

alertButton.addEventListener('click', function () {
    alert('Welcome to my website!');
});


const windowAlertButton =document.getElementById('window-alert-button');

windowAlertButton.addEventListener('click', function () {
    window.alert('This is window.alert()');
});


const confirmButton =document.getElementById('confirm-button');

confirmButton.addEventListener('click', function () {
    const answer = confirm(
        'Do you really want to submit the form?'
    );

    if (answer) {
        alert('You selected OK.');
    } else {
        alert('You selected Cancel.');
    }
});


//focus and blur events
const fields = document.querySelectorAll(
    "input[type=text], input[type=password]"
);

for (let field of fields) {

    field.addEventListener("focus", function () {
        field.style.backgroundColor = "#FFE393";
    });

    field.addEventListener("blur", function () {
        field.style.backgroundColor = "white";
    });

}

    // eg. 4. add event listen to "submit" button to log a message when 
    //        it is clicked.
    document.querySelector('#submit-button').addEventListener('click', function(e){
        e.preventDefault(); // prevent the form from submitting to the server
        // add all your validation code here
        alert('Submit the form for processing now?');

      //  if (confirm('Submit the form for processing now?')){
           //                document.querySelector('form').submit();
        //}
    })

// Validation of Form 


 const form = document.querySelector("#contact-form");

    form.addEventListener("submit", function (e) {
    // const fullName =  document.querySelector("#fullname").value;
        const fullName = e.target.fullname.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const repeatPassword =e.target.repeatPassword.value;
        const message = e.target.message.value;

        const passwordError =document.querySelector("#error-msg-1");
        const repeatPasswordError =document.querySelector("#error-msg-2");

        passwordError.textContent = "";
        repeatPasswordError.textContent = "";

        let formIsValid = true;

        if (fullName.trim() === "") {
            console.log("You must enter your full name.");
            formIsValid = false;
        }

        if (email.trim() === "") {
            console.log("You must enter your email.");
            formIsValid = false;
        }

        if (password === "") {
            passwordError.textContent =
                "You must enter a password.";

            formIsValid = false;
        }

        if (repeatPassword === "") {
            repeatPasswordError.textContent =
                "You must repeat your password.";

            formIsValid = false;
        }
        else if (password !== repeatPassword) {
            repeatPasswordError.textContent =
                "The passwords do not match.";

            formIsValid = false;
        }

        if (message.trim() === "") {
            console.log("You must enter a message.");
            formIsValid = false;
        }

        if (!formIsValid) {
            e.preventDefault();
        }

    });







});