<?php

use Illuminate\Contracts\Http\Kernel;
use Illuminate\Http\Request;

define('LARAVEL_START', microtime(true));
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');

//header('Access-Control-Allow-Origin', '*');
//header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
//header('Access-Control-Allow-Headers',' Origin, Content-Type, Accept, Authorization, X-Request-With');
//header('Access-Control-Allow-Credentials',' true');

//header('Access-Control-Allow-Origin: http://127.0.0.1:8000');
//header('Access-Control-Allow-Credentials: true');
//header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS, HEAD');
//header('Access-Control-Max-Age: 1728000');
//header('Content-Type: application/json');
//header('cors-enabled: false');
//header('mode: no-cors');
//header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

/*
|--------------------------------------------------------------------------
| Check If The Application Is Under Maintenance
|--------------------------------------------------------------------------
|
| If the application is in maintenance / demo mode via the "down" command
| we will load this file so that any pre-rendered content can be shown
| instead of starting the framework, which could cause an exception.
|
*/

if (file_exists($maintenance = __DIR__.'/../storage/framework/maintenance.php')) {
    require $maintenance;
}

/*
|--------------------------------------------------------------------------
| Register The Auto Loader
|--------------------------------------------------------------------------
|
| Composer provides a convenient, automatically generated class loader for
| this application. We just need to utilize it! We'll simply require it
| into the script here so we don't need to manually load our classes.
|
*/

require __DIR__.'/../vendor/autoload.php';

/*
|--------------------------------------------------------------------------
| Run The Application
|--------------------------------------------------------------------------
|
| Once we have the application, we can handle the incoming request using
| the application's HTTP kernel. Then, we will send the response back
| to this client's browser, allowing them to enjoy our application.
|
*/

$app = require_once __DIR__.'/../bootstrap/app.php';

$kernel = $app->make(Kernel::class);

$response = $kernel->handle(
    $request = Request::capture()
)->send();

$kernel->terminate($request, $response);
