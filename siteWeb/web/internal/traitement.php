<?php

$sql = 'select * from books where nom=? and prenom=?';
//echo $sql;
try {
	$dsn = 'mysql:host=mysql;dbname=test;charset=utf8;port=3306';
	$pdo = new PDO($dsn, 'dev','dev');
	//echo "Connected to database<br>"; 
	
	$std = $pdo->prepare($sql);
	$std->bindParam(1, $_POST['nom']);
	$std->bindParam(2, $_POST['prenom']);
	$std->execute();
	$res = $std->fetch(PDO::FETCH_ASSOC);
	if(!$res){
		die('vous n\'êtes pas le bienvenue ici');
	}else {
		die('Bienvenue dans l\'intranet');
	}
	
	foreach($pdo->query($sql, PDO::FETCH_ASSOC) as $row) {
			if($row['nom'] == null){echo 'truc';}
			echo "<pre>".print_r($row,true)."</pre>";
	}

	$pdo = null;

} catch(PDOException $e) {echo $e->getMessage();}

?>
