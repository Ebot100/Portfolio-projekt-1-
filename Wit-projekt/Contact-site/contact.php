<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $name = htmlspecialchars(trim($_POST['name']));
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(trim($_POST['message']));


    $to = "szkportfolio@ebocik.ct8.pl"; // <--  prawdziwy e-mail
    $subject = "Wiadomość ze strony kontaktowej";

    $headers = "From: szkportfolio@ebocik.ct8.pl\r\n"; // adres musi istnieć na ct8
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=utf-8\r\n";

    $body = "Imię: $name\n";
    $body .= "Email: $email\n\n";
    $body .= "Wiadomość:\n$message\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "✅ Wiadomość została wysłana.";
    } else {
        echo "❌ Błąd podczas wysyłania wiadomości.";
    }
} else {
    echo "Nieprawidłowe żądanie.";
}
?>
