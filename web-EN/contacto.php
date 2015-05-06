<?php
if(isset($_POST['email'])) {

$email_to = "ivan.pla.1992@gmail.com";
$email_subject = "Mensaje desde la web";

// Aquí se deberían validar los datos ingresados por el usuario
if(!isset($_POST['nombre']) ||
!isset($_POST['email']) ||
!isset($_POST['mensaje'])) {

echo "<b>There was an error and the form has not been sent. </b><br />";
echo "Please go back and verify the information entered<br />";
die();
}

$email_message = "Detalles del formulario de contacto:\n\n";
$email_message .= "Nombre: " . $_POST['nombre'] . "\n";
$email_message .= "E-mail: " . $_POST['email'] . "\n";
$email_message .= "Mensaje: " . $_POST['mensaje'] . "\n\n";


// Ahora se envía el e-mail usando la función mail() de PHP
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);

echo"<script>alert('Message sent successfully!') ; history.back();</script>";

}

?>