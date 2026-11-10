<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\PortfolioController;
use Illuminate\Support\Facades\Route;

// Portfolio routes
Route::get('/', [PortfolioController::class, 'index'])->name('home');
Route::get('/work/{slug}', [PortfolioController::class, 'showProject'])->name('project.show');
Route::get('/gallery', [PortfolioController::class, 'gallery'])->name('gallery.index');

// Contact Form submission
Route::post('/contact', [ContactController::class, 'submit'])->name('contact.submit');

// View CV inline (opens in browser with native download/print controls)
Route::get('/resume', function () {
    $path = public_path('cv/Atik_Hasan_CV.pdf');
    if (!file_exists($path)) {
        abort(404);
    }
    return response()->file($path, [
        'Content-Type' => 'application/pdf',
        'Content-Disposition' => 'inline; filename="Atik_Hasan_CV.pdf"',
    ]);
})->name('resume.view');
