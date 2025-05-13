<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $filename = basename($_POST['filename']); // tylko nazwa pliku, żadnych ../

    $filepath = __DIR__ . '/posts/' . $filename;

    if (file_exists($filepath)) {
        unlink($filepath);
        header("Location: admin.php?deleted=1");
        exit;
    } else {
        echo "Plik nie istnieje.";
    }
} else {
    echo "Nieprawidłowe żądanie.";
}
