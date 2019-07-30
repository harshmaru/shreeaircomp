<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'cors.php';
require 'PHPMailer-6.0.6/src/Exception.php';
require 'PHPMailer-6.0.6/src/PHPMailer.php';
require 'PHPMailer-6.0.6/src/SMTP.php';
// var_dump(json_decode(file_get_contents('php://input'),TRUE));
$_POST=json_decode(file_get_contents('php://input'),TRUE);
if( checkIsset($_POST["phone"]) && checkIsset($_POST["email"]) && checkIsset($_POST["subject"])){
    $toAddress = "contact@shreeaircompressors.in"; //To whom you are sending the mail.
    $message  = $_POST["message"]."<br><br><br>"."<h5>Complete Info : <br>Name : ".$_POST["name"]."<br>Email : ".$_POST["email"]."<br>Phone : ".$_POST["phone"]."</h5>";
    $mail = new PHPMailer();
    $mail->IsSMTP();
    $mail->SMTPAuth    = true;
    $mail->Host        = "smtp.hostinger.in";
    $mail->Port        = 587;
    $mail->SMTPOptions = array(
        'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        )
    );
    $mail->IsHTML(true);
    $mail->Username = "admin@shreeaircompressors.in"; // your gmail address
    $mail->Password = "passwd@123"; // password
    $mail->Sender='admin@shreeaircompressors.in';
    $mail->SetFrom($_POST["email"], $_POST["name"], FALSE);
    $mail->Subject = $_POST["subject"]; // Mail subject
    $mail->Body    = $message;
    $mail->XMailer = ' ';
    $mail->AddAddress($toAddress);
    if (!$mail->Send()) {
        $out = array('status'=>'error','error'=>$mail);
        echo json_encode($out);
    } else {
        $out = array('status'=>'success');
        echo json_encode($out);
    }
}
else{
    $out = array('status'=>'error','error'=>array('ErrorInfo','Values Missing / Un-Authorized Request'));
    echo json_encode($out);
}
function checkIsset($var){
    if(isset($var) && $var != ""){
        return true;
    }
    else{
        return false;
    }
}
?>