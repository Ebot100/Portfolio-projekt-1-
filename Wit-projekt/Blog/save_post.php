<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $title = trim($_POST['title']);
    $content = trim($_POST['content']);

    if (!empty($title) && !empty($content)) {
        $filename = 'post_' . time() . '.txt';
        $filepath = __DIR__ . '/posts/' . $filename;

        $postData = $title . "\n" . $content;

        file_put_contents($filepath, $postData);
        header("Location: admin.php?success=1");
        exit;
    } else {
        echo "Tytuł i treść są wymagane!";
    }
} else {
    echo "Nieprawidłowe żądanie.";
}
