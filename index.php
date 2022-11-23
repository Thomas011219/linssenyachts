<?php
	
	// sets header so everyone has access
	header('Access-Control-Allow-Origin: *');
	// sets header to json
	header('Content-type: application/json');
	
	// Get data thats in link.nl/?TEST=
	$TESTGET = $_GET['TEST'];
	// variable test set 'Hello world'
	$test = 'Hello world';
	
	// checks if there is a get
	if($_GET != null){
		// checks if the TESTGET has value 'test'
		if($TESTGET == 'test'){
			// echo in json 'Hello world'
			echo json_encode($test);
		}
	}


?>
