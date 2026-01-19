<?php

declare(strict_types=1);

// Simple router for PHP built-in server
$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

// Route API requests to the appropriate handler
if (strpos($uri, '/api/tasks.php') !== false) {
    require __DIR__ . '/api/tasks.php';
} else {
    http_response_code(404);
    echo json_encode(['error' => 'Not found']);
}
