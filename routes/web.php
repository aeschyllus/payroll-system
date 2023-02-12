<?php

use App\Http\Controllers\AttendanceController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\PositionController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect('login');
});

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->middleware('admin')->name('dashboard');

    Route::get('/attendance', [AttendanceController::class, 'index'])->name('attendance');
    Route::post('/attendance', [AttendanceController::class, 'store'])->name('attendance.store');
    Route::patch('/attendance/{attendance}', [AttendanceController::class, 'update'])->name('attendance.update');

    Route::get('/employees', [EmployeeController::class, 'index'])->name('employees');
    Route::get('/employees/{id}', [EmployeeController::class, 'edit'])->name('employees.edit');
    Route::patch('/employees/{id}', [EmployeeController::class, 'update'])->name('employees.update');

    Route::get('/positions', [PositionController::class, 'index'])->name('positions');
    Route::get('/positions/{position}', [PositionController::class, 'edit'])->name('positions.edit');
    Route::patch('/positions/{position}', [PositionController::class, 'update'])->name('positions.update');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
