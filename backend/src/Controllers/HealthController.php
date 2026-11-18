
<?php

class HealthController
{
    public function index(): void
    {
        echo json_encode([
            'status' => 'success',
            'message' => 'PHP backend elérhető!',
            'php_version' => PHP_VERSION,
        ]);
    }
}
