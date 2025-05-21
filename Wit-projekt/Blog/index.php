<?php
$posts = glob("posts/*.txt");
rsort($posts);
?>

<!DOCTYPE html>
<html lang="pl">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta
      http-equiv="Content-Security-Policy"
      content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; connect-src 'self' http://localhost:* http://127.0.0.1:* https://wit-projekt.pl/;"
    />

    <meta http-equiv="X-Content-Type-Options" content="nosniff" />
    <meta name="referrer" content="no-referrer-when-downgrade" />
    <meta
      name="description"
      content="Wit-projekt to moje portfolio :D"
    />
    <meta
      name="keywords"
      content="Wit-projekt, web development, programming, projects, portfolio"
    />
    <meta name="author" content="Szymon Kubiak" />
    <meta property="og:title" content="Wit-projekt" />
    <meta
      property="og:description"
      content="Wit-projekt to moje portfolio :D"
    />
    <meta property="og:image" content="https://wit-projekt.ct8.pl/favicon.ico" />
    <meta property="og:url" content="https://wit-projekt.pl/" />
    <meta property="og:type" content="website" />
    <title>Blog</title>
    <link rel="stylesheet" href="blog-style.css">
    <link rel="stylesheet" href="../common-style.css">
    <script src="blog-script.js" defer></script>
    <script src="../common-script.js" defer></script>
    <link rel="icon" href="../favicon.ico" type="image/png">
</head>

<body>

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

    <main>
        <a href="login-and-register/login.php" class="go-to-login"><img src="../images/login.png" alt="login"></a>
        <h1>Posty</h1>
        <?php foreach ($posts as $post):
            $lines = file($post);
            $title = htmlspecialchars(trim($lines[0]));
            $content = implode('', array_slice($lines, 1));
            ?>
            <article class="post" data-title="<?= $title ?>" data-content="<?= htmlspecialchars($content) ?>">
                <h2><?= $title ?></h2>
                <p><?= nl2br(htmlspecialchars(substr($content, 0, 20))) . '...' ?></p>
            </article>
        <?php endforeach; ?>
    </main>

    <div id="myModal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2 id="modal-title"></h2>
            <pre id="modal-content" ></pre>
        </div>
    </div>

    <footer>
        <div class="footer-container">


            <div class="footer-section links">
                <h2>Przydatne linki</h2>
                <ul>
                    <li><a href="https://github.com/Ebot100/Portfolio-projekt-1-" target="_blank">Projekt na
                            Githubie</a></li>
                    <li><a href="https://www.figma.com/design/M0zqaAA1Gz6M7PrnAVrrNn/Wit-projekt?m=auto&t=Epjg0hbYXic02nRq-1"
                            target="_blank">Projekt Figma</a></li>
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