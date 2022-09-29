<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EmployeesController;

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/get/employee/list',
                [EmployeesController::class,'getEmployeeList'])->name('employee.list');
Route::post('/get/individual/employee/details',
                [EmployeesController::class,'getEmployeeDetails'])->name('employee.details');