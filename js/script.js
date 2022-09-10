//Login Validation
function logvalid(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if(username== '' && password == ''){
        alert('Both field are required');
        return false;
    }
    if(username==''){
        alert('Username field is required');
        return false;
    }
    if(password==""){
        alert('Password field is required');
        return false;
    }
    if(username==password){
        alert('Both fields cannot be same');
        return false;
    }
}

//Contact Validation
function conValid(){
    var firstName = document.getElementById('fname').value;
    var lastName = document.getElementById('lname').value;
    var email =document.getElementById('mail').value;
    var msg = document.getElementById('msg').value;

    if(firstName==''){
        alert('First name field is required');
        return false;
    }

    if(lastName==''){
        alert('Last name field is required');
        return false;
    }

    if(email==''){
        alert('Email field is required');
        return false;
    }

    if(msg==''){
        alert('Message field is required');
        return false;
    }
}
