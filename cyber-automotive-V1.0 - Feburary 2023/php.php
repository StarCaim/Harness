
<html>
  <head>
    </head>
    <body>
  <fieldset>
    <legend style="padding: 0px 20px">  Store Information :)  </legend>
  <form action="insert.php" method="get">
    <label for="FirstName">First Name:</label> <input type="text" name="FirstName">
    <label for="LastName">Last Name:</label> <input type="text" name="LastName">
    <label for="PhoneNumber">Phone Number:</label> <input type="number" name="PhoneNumber">
    <button type="submit">SUBMIT</button>
  </form>
  </fieldset>

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



    $query = 'select * from PersonPhone;';
    $stmt = $conn->query( $query );

    echo "<table>
    <tr>
    <th>User ID</th>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Phone Number</th>
    </tr>";
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC))
    {
      echo "<form method='post' action='delete.php'><tr>";  
      echo "<td>" . $row['Id'] . "</td>";
      echo "<td>" . $row['FirstName'] . "</td>";
      echo "<td>" . $row['LastName'] . "</td>";
      echo "<td>" . $row['PhoneNumber'] . "</td>";
      echo "<td><button name='UserID' value=" . $row['Id'] . " type=submit'>Delete</button></td>";
      echo "</tr></form>";  
    }
    echo "</table>";

    // Free statement and connection resources.
    $stmt = null;
    $conn = null;
?>


</body>
</html>