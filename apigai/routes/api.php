<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/car',[\App\Http\Controllers\Api\CarController::class, 'index']);
Route::get('/mark',[\App\Http\Controllers\Api\CarController::class, 'getModel']);
Route::get('/mark/model',[\App\Http\Controllers\Api\CarController::class, 'getCar']);
