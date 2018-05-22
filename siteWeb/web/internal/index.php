<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
	<title>Docker <?php echo 'PHP' ?></title>
    </head>
    <body>
	<form method="post" name="formNom" id="formNom" action="traitement.php">
		<label for="nom">Nom :</label>
		<input type="text" name="nom" id="nom" required>
		<label for="prenom">Prénom :</label>
		<input type="text" name="prenom" id="prenom" required>
		<input type="submit" value="envoi"> 
	</form>
    </body>
</html>
