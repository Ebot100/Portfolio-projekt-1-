<?php
session_start();
require 'conn.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $login = $_POST['login'];
    $password = $_POST['password'];

    $stmt = $pdo->prepare("SELECT * FROM users WHERE login = ? AND password = ?");
    $stmt->execute([$login, $password]);
    $user = $stmt->fetch();

    if ($user) {
        $_SESSION['logged_in'] = true;
        header('Location: ../admin.php');
        exit;
    } else {
        $error = "Nieprawidłowy login lub hasło.";
    }
}
?>

<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Logowanie</title>
    <link rel="stylesheet" href="../../common-style.css">
    <link rel="stylesheet" href="login&register-style.css">
    <link rel="icon" href="../favicon.ico" type="image/png">
</head>
<body>
    <section class="login-form-section">
        <h1>Witaj ponownie w panelu admina</h1>
        <?php if (isset($error)) echo "<p style='color:red;'>$error</p>"; ?>
        <form method="POST">
            <label>Login:</label>
            <input type="text" name="login" required><br>
            <label>Hasło:</label>
            <input type="password" name="password" required><br>
            <button type="submit">Zaloguj</button>
        </form>
    </section>
</body>
</html>
