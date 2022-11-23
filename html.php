<!-- https://localhost/challange/?TEST=test -->


<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title></title>
</head>
<!-- calls function -->
<body onload="loadDoc()">
	
	<H1 id="demo"></H1>
</body>
<script type="text/javascript">
	// creates function
	function loadDoc() {
	  // gets library for ajax request
	  const xhttp = new XMLHttpRequest();
	  // calls ajax function
	  xhttp.onload = function() {
            // edits the innerHTML of a element
            // this.responseText to get response from the api
	    document.getElementById("demo").innerHTML = JSON.parse(this.responseText);
	    }
	  // calls the api gets response
	  xhttp.open("GET", "https://wwapp.joeypfoster.nl/?TEST=test");
	  xhttp.send();
	}
</script>
</html>
