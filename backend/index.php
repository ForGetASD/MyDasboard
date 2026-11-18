
<?php

header('Content-Type: application/json; charset=utf-8');

require_once __DIR__ . '/src/Router.php';
require_once __DIR__ . '/src/Controllers/HealthController.php';

$router = new Router();

require_once __DIR__ . '/routes/api.php';

$router->dispatch();
