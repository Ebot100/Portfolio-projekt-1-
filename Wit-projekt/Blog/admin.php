<?php
session_start();
if (!isset($_SESSION['logged_in']) || $_SESSION['logged_in'] !== true) {
    header('Location: login.php');
    exit;
}
?>



<!DOCTYPE html>
<html lang="pl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Admin - Dodaj Post</title>
    <link rel="stylesheet" href="admin-style.css">
    <link rel="stylesheet" href="../common-style.css">
    <script src="blog-script.js" defer></script>
    <script src="../common-script.js" defer></script>
    <link rel="icon" href="../favicon.ico" type="image/png">
</head>
<header>
        <section class="left-header-section">
            <button id="menu-toggle" class="menu-button"><img src="../Images/Icons/menu.png" alt="menu"></button>
            <nav id="menu" class="menu-burger hidden">
                <a href="../Homepage/index.html">Start</a>
                <a href="../About/index.html">O mnie</a>
                <a href="../Projects/index.html">Portfolio</a>
                <a href="../Blog/index.php">Blog</a>
            </nav>
        </section>
        <section class="middle-header-section">
            <ul class="horizontal-list">
                <li><a href="../Homepage/index.html">Start</a></li>
                <li><a href="../About/index.html">O mnie</a></li>
                <li><a href="../Projects/index.html">Portfolio</a></li>
                <li><a href="../Blog/index.php">Blog</a></li>
            </ul>
        </section>

        <section class="right-header-section">


            <div class="theme-dropdown">
                <button class="theme-dropdown-btn">Wybierz motyw</button>
                <ul class="theme-dropdown-list">
                    <li data-theme="default">Domyślny</li>
                    <li data-theme="light">Jasny</li>
                    <li data-theme="Midnight">Midnight</li>
                </ul>
            </div>

        </section>
    </header>

<body>
<main>
        <h1>Dodaj Nowy Post</h1>
        <form action="save_post.php" method="POST" id="post-form">
            <label>Tytuł:</label><br>
            <input type="text" name="title" required><br>

            <label>Treść:</label><br>
            <textarea name="content" id="content" required></textarea><br>

            <input type="submit" value="Zapisz Post">
        </form>
        <hr>
        <h2>Istniejące posty:</h2>
        <section class="posts">
            <?php
            $posts = glob("posts/*.txt");
            rsort($posts);
            if (count($posts) === 0) {
                echo "<p>Brak postów.</p>";
            } else {
                foreach ($posts as $post) {
                    $filename = basename($post);
                    $title = explode("\n", file_get_contents($post))[0];
                    echo "<div style='margin-bottom:10px;' class='avaible-post'>
                        <strong>$title</strong><br>
                        <form action='delete_post.php' method='POST' onsubmit='return confirm(\"Na pewno usunąć?\");'>
                            <input type='hidden' name='filename' value='" . htmlspecialchars($filename, ENT_QUOTES) . "'>
                            <button type='submit'>Usuń</button>
                        </form>
                    </div>";
                }
            }
            ?>
        </section>
    </main>
    <footer>
        <div class="footer-container">


            <div class="footer-section links">
                <h2>Przydatne linki</h2>
                <ul>
                    <li><a href="../Homepage/index.html">Strona główna</a></li>
                    <li><a href="../About/index.html">O mnie</a></li>
                    <li><a href="../Projects/index.html">Projekty</a></li>
                    <li><a href="../Blog/index.php">Blog</a></li>
                </ul>
            </div>

            <div class="footer-section contact">
                <h2>Kontakt</h2>
                <ul>
                    <li><a href="mailto:sz.kubiak@onet.eu">E-mail</a></li>
                    <li><a href="tel:123456789">Nr telefonu</a></li>
                </ul>
            </div>

            <div class="footer-section social">
                <h2>Obserwuj mnie</h2>
                <div class="social-icons">
                    <a href=""><img src="../Images/Icons/footer-icons/icons8-facebook-50.png" alt="fb"></a>
                    <a href=""><img src="../Images/Icons/footer-icons/icons8-instagram-50.png" alt="instagram"></a>
                    <a href=""><img src="../Images/Icons/footer-icons/icons8-github-50.png" alt="github"></a>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <p>2025-2025 Szymon Kubiak</p>
        </div>
    </footer>
</body>

</html>