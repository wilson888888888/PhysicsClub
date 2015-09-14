<?php
$email_to = "rahul.tewari@warriorlife.net";
$email_subject = "Physics club project suggestion";

function died($error){
      echo $error."<br /><br />";
      die();
}

if(!isset($_POST['name']) || !isset($_POST['project'])){
      died("All fields are required.");
}

$name = $_POST['name'];
$project = $_POST['project'];

$email_message = "This is automated email, for make inform you of project suggestion.\n\n";

function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);    
}

$email_message .= "Name: ".clean_string($name)."\n";
$email_message .= "Project Suggestion: ".clean_string($project)."\n";

$headers = 'From: '.$email_from."\r\n".'Reply-To: '.$email_from."\r\n" .'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);  
?>