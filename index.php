<?php
	
	// sets header to json
	header('Access-Control-Allow-Origin: *');
	header('Content-type: application/json');

	$TESTGET = $_GET['TEST'];

	$test = 'Hello world';

	if($_GET != null){
		if($TESTGET == 'test'){
			echo json_encode($test);
		}
	}


?>