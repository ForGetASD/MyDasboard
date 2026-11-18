<?php

$healthController = new HealthController();

$router->get('/api/health', [$healthController, 'index']);
