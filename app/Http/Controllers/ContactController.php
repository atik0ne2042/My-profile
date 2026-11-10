<?php

namespace App\Http\Controllers;

use App\Models\ContactMessage;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;

class ContactController extends Controller
{
    /**
     * Handle incoming contact form submissions.
     */
    public function submit(Request $request): RedirectResponse
    {
        $ip = $request->ip() ?? 'unknown';
        $key = 'contact-submission:' . $ip;

        // Rate limiting: maximum 5 messages per 10 minutes per IP
        if (RateLimiter::tooManyAttempts($key, 5)) {
            $seconds = RateLimiter::availableIn($key);
            return back()->withErrors([
                'rate_limit' => "Too many messages sent. Please wait {$seconds} seconds before trying again.",
            ]);
        }

        $validated = $request->validate([
            'name' => ['required', 'string', 'min:2', 'max:100'],
            'email' => ['required', 'email', 'max:150'],
            'subject' => ['nullable', 'string', 'max:150'],
            'message' => ['required', 'string', 'min:10', 'max:3000'],
        ]);

        RateLimiter::hit($key, 600);

        ContactMessage::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'subject' => $validated['subject'] ?? 'General Portfolio Inquiry',
            'message' => $validated['message'],
            'ip_address' => $ip,
            'is_read' => false,
        ]);

        return back()->with('success', 'Thank you, your message has been received! I will reply to you as soon as possible.');
    }
}

