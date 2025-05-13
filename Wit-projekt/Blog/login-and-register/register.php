<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rejestracja</title>
    <link rel="stylesheet" href="login&register-style.css">
    <link rel="stylesheet" href="../../common-style.css">
    <script src="check-pass.js"></script>
    <link rel="icon" href="../favicon.ico" type="image/png">
</head>

<body>
    <section class="login-form-section">
        <h1 class="logintxt">Rejestracja</h1>
        <form method="post" action="register.php">
            <br><br>
            <h3>Nazwa</h3>
            <br>
            <input type="text" name="username" class="polelogin"><br><br>
            <h3>Hasło</h3>
            <br>
            <input type="password" name="password" class="polelogin"><br>
            <button type="submit">Zarejestruj</button>
        </form>

        <br>
        <?php
        include 'conn.php';

        $login = "";
        $password = "";

        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            session_start();

            $login = $_POST['username'];
            $password = $_POST['password'];

            if (empty($login) || empty($password)) {
                echo "Proszę wypełnić wszystkie pola.";
            } else {

                $user_ip = $_SERVER['REMOTE_ADDR'];


                $sql = "INSERT INTO loginy (nazwa, haslo, ip) VALUES ('$login', '$password', '$user_ip')";

                if ($conn->query($sql) === TRUE) {
                    $_SESSION['logged_in'] = true;
                    header("location: index.php");
                    exit();
                } else {
                    echo "Błąd podczas rejestracji: ";
                }
            }
        }
        ?>
    </section>


</body>

</html>