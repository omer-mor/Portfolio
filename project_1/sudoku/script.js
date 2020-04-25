function logInIdent(){ // function that check if the user name and the password are correct.
    let userName= document.getElementById("login_user").value;
    let password=document.getElementById("login_pass").value;
    
    if(userName =='abcd' && password =='1234'){ // 
        location.assign("difficulty.html");
    }
    if(userName != 'abcd'){// condition for the username
        document.getElementById("error-name").innerHTML="wrong user name";
    }
    if(password != '1234'){ // condition fot the password
        document.getElementById("error-pass").innerHTML="wrong password";

    }
    
}


