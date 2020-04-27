<?php
require  'vendor/autoload.php';
use Google\Spreadsheet\DefaultServiceRequest;
use Google\Spreadsheet\ServiceRequestFactory;
putenv('GOOGLE_APPLICATION_CREDENTIALS=' . __DIR__ . '/gglshts2.json');

$method = $_SERVER['REQUEST_METHOD'];

//Script Foreach
$c = true;
if ( $method === 'POST' ) {
   
	$project_name = trim($_POST["project_name"]);
	$admin_email  = trim($_POST["admin_email"]);
	$form_subject = trim($_POST["form_subject"]);

	foreach ( $_POST as $key => $value ) {
		if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
			$message .= "
			" . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
				<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
				<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
			</tr>
			";
		}
	}
} else if ( $method === 'GET' ) {

	$project_name = trim($_GET["project_name"]);
	$admin_email  = trim($_GET["admin_email"]);
	$form_subject = trim($_GET["form_subject"]);

	foreach ( $_GET as $key => $value ) {
		if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
			$message .= "
			" . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
				<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
				<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
			</tr>
			";
		}
	}
}

$message = "<table style='width: 100%;'>$message</table>";

function adopt($text) {
	return '=?UTF-8?B?'.Base64_encode($text).'?=';
}

$headers = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type: text/html; charset=utf-8" . PHP_EOL .
'From: '.adopt($project_name).' <'.$admin_email.'>' . PHP_EOL .
'Reply-To: '.$admin_email.'' . PHP_EOL;

//$fd = fopen("numbers.txt", 'a');    
//fwrite($fd, $value."\r\n");   
//fclose($fd);

/*mail($admin_email, adopt($form_subject), $message, $headers );*/

/*  SEND TO GOOGLE SHEETS */
 $client = new Google_Client;
	try{
		$client->useApplicationDefaultCredentials();
	  $client->setApplicationName("Something to do with my representatives");
		$client->setScopes(['https://www.googleapis.com/auth/drive','https://spreadsheets.google.com/feeds']);
	   if ($client->isAccessTokenExpired()) {
			$client->refreshTokenWithAssertion();
		}
		$accessToken = $client->fetchAccessTokenWithAssertion()["access_token"];
		ServiceRequestFactory::setInstance(
			new DefaultServiceRequest($accessToken)
		);
	   // Get our spreadsheet
		$spreadsheet = (new Google\Spreadsheet\SpreadsheetService)
			->getSpreadsheetFeed()
			->getByTitle('AntiOne');
		// Get the first worksheet (tab)
		$worksheets = $spreadsheet->getWorksheetFeed()->getEntries();
		$worksheet = $worksheets[0];
		$listFeed = $worksheet->getListFeed();
		$listFeed->insert([
			'name' => "'". $_POST['name'],
			'email' => "'". $_POST['email'],
			'age' => "'". $_POST['age'],
			'gender' => "'". $_POST['gender'],
			'prizes' => "'". $_POST['prizes'],
			'date' => date_create('now')->format('Y-m-d H:i:s')
		]);
	}catch(Exception $e){
	  echo $e->getMessage() . ' ' . $e->getLine() . ' ' . $e->getFile() . ' ' . $e->getCode;
	}
	/*  SEND TO GOOGLE SHEETS */





