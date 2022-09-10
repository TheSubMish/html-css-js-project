function validation(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if(username==''){
        alert('Username field is required');
        return false;
    }
    if(password==""){
        alert('Password field is required');
        return false;
    }
    if(username== '' && password == ''){
        alert('Both field are required');
        return false;
    }
    if(username==password){
        alert('Both fields cannot be same');
        return false;
    }
}