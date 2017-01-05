<!DOCTYPE html>
<html>
<body>
<p>Protodesk</p>
<form>
Username <input type='text' name='user'><br>
Password <input type='password' name='pass'><br>
<input type='submit' value='Login'><br>
<?php

$user = 'root';
$pass = '';
$db = 'base';

$conn = new mysqli('localhost',$user,$pass,$db);
if(!$conn)
	echo "shit";

$sql = "SELECT * FROM users";
$result = $conn->query($sql);


$pinch = [];
while($pinch[] = $result->fetch_assoc()){	
}

?>
<script>
alert("hi");
//var point = "<?php echo $pinch;?>";

</script>
</body>
</html>