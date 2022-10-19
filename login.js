$(document).ready(function(){
    $("#submit").click(function(){
    var inputName = $("#inputname").val();
    var password = $("#password").val();
    // Checking for blank fields.
    if( inputName =='' || password ==''){
        $('input[type="text"],input[type="password"]');
        $('input[type="text"],input[type="password"]');
        alert("Please fill all fields...!!!!!!");
    }else {
        $.post("login.php",{ inputname1: inputName, password1:password},
        function(data) {
        if(data=='Invalid UserName.......') {
            $('input[type="text"]');
            $('input[type="password"]');
        alert(data);
        }else if(data=='Email or Password is wrong...!!!!'){
            $('input[type="text"],input[type="password"]');
            alert(data);
        } else if(data=='Successfully Logged in...'){
            $("form")[0].reset();
            $('input[type="text"],input[type="password"]');
        alert(data);
    } else{
        alert(data);
    }
    });
    }
    });
    });