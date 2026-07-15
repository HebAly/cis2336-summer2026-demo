// make sure DOM is loaded
document.addEventListener('DOMContentLoaded', function(){

    // add all logics here afrter DOM is loaded.
    // eg.1: log a message everytime the user input the value
    /*
    document.getElementById('name').addEventListener('input',function(){
        console.log('The name input is:' + this.value);
    })
        */

    //eg. 2: log a message everytime the user finish the name input
    document.getElementById('name').addEventListener('change',function(){
        console.log('The name input is:' + this.value);
    })

    // eg. 3. interact with all input areas
    let inputs = document.querySelectorAll('input');
    for (let i = 0; i < inputs.length; i++){
        inputs[i].addEventListener('focus',function(){
            this.style.backgroundColor = 'yellow';
        })
        inputs[i].addEventListener('blur',function(){
            this.style.backgroundColor = '';
        })
    }

    // student practice mouse events: mouseenter & mouseleave
   

    // eg. 4. add event listen to "submit" button to log a message when 
    //        it is clicked.
    document.querySelector('button').addEventListener('click', function(e){
        e.preventDefault(); // prevent the form from submitting to the server
        // add all your validation code here
        alert('Submit the form for processing now?');

        if (confirm('Submit the form for processing now?')){
            document.querySelector('form').submit();
        }
    })
    
    // e.g. 5. check if the password length is 8
    document.getElementById('password').addEventListener('blur', function(){
        let password = this.value;
        if (password.length !==8){
            // alert('Password must be 8 characters!');
            document.getElementById('error-msg-1').textContent = 'Password must be 8 characters!';
        }
    })
     
    document.getElementById('repeatPassword').addEventListener('blur', function(){
        let repeatPassword = this.value;
        let password = document.getElementById('password').value;
        // compare two values
        if(repeatPassword !== password){
            document.getElementById('error-msg-2').textContent = 'Password does not match!';
        }
    })
   

    // password at least 8 characters and at least one number and one letter.
    document.getElementById('password').addEventListener('blur', function(){
        let password = this.value;
        let hasNumber = /\d/.test(password); // regular expression
        let hasLetter = /[a-zA-Z]/.test(password); // regular expression
        let errorMsg = '';
        
        if (password.length < 8) {
            errorMsg = 'Password must be at least 8 characters!';
        } else if (!hasNumber) {
            errorMsg = 'Password must contain at least one number!';
        } else if (!hasLetter) {
            errorMsg = 'Password must contain at least one letter!';
        }
        
        document.getElementById('error-msg-1').textContent = errorMsg;
    })
    





})