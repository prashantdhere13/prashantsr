<?php
    $connection = mysql_connect("localhost", "root", "");
    $db = mysql_select_db("sign", $connection); 
    $inputName=$_POST['inputName1']; 
    $password= $_POST['password1'];

    $inputName = filter_var($inputName, FILTER_SANITIZE_inputName);
    if (!filter_var($inputName, FILTER_VALIDATE_inputName)){
        echo "Invalid Username.......";
    }else{

        $result = mysql_query("SELECT * FROM registration WHERE inputName='$inputName' AND password='$password'");
        $data = mysql_num_rows($result);
        if($data==1){
        //echo "Successfully Logged in...";
        header("Location: userHome.html");
        }else{
            echo "Username or Password is wrong...!!!!";
            header("Location: index.html");
        }
}
mysql_close ($connection); 
?>