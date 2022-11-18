<!-- https://localhost/challange/?TEST=test -->


<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title></title>
</head>
<body onload="loadDoc()">
	<H1 id="demo"></H1>
</body>
<script type="text/javascript">
	function loadDoc() {
	  const xhttp = new XMLHttpRequest();
	  xhttp.onload = function() {
	    document.getElementById("demo").innerHTML = JSON.parse(this.responseText);
	    }
	  xhttp.open("GET", "https://wwapp.joeypfoster.nl/?TEST=test");
	  xhttp.send();
	}
</script>
</html>