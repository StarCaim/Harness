<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
<?php
 
 $serverName = "PC22\SQLEXPRESS01";
 $database = "php_test";
 $uid = 'Admin';
 $pwd = 'Password1';
 try {
    $conn = new PDO(
        "sqlsrv:server=$serverName;Database=$database",
        $uid,
        $pwd,
        array(
            //PDO::ATTR_PERSISTENT => true,
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
        )
    );
}
catch(PDOException $e) {
    die("Error connecting to SQL Server: " . $e->getMessage());
}
         
        // Taking all 5 values from the form data(input)
        $FirstName =  $_REQUEST['FirstName'];
        $LastName = $_REQUEST['LastName'];
        $PhoneNumber = $_REQUEST['PhoneNumber'];
         
        // Performing insert query execution
        // here our table name is college
        $query = "INSERT INTO PersonPhone  VALUES ('$FirstName',
            '$LastName',$PhoneNumber)";
        $stmt = $conn->query( $query );
         
        if($query){
            echo "<h3>data stored in a database successfully."
                . " Please click here to go back </h3>"
                . " <a href='php.php'>Click Me!</a>";
        }
        ?>









</body>
</html>