<?php

// Forward Vercel Serverless requests to standard Laravel public/index.php
// Prepare writable /tmp storage directories (since AWS Lambda/Vercel functions have a read-only root FS)
$directories = [
    '/tmp/storage/framework/views',
    '/tmp/storage/framework/cache/data',
    '/tmp/storage/framework/sessions',
    '/tmp/storage/logs',
];

foreach ($directories as $dir) {
    if (!is_dir($dir)) {
        @mkdir($dir, 0755, true);
    }
}

require __DIR__ . '/../public/index.php';

