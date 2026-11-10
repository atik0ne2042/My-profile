<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Project extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $casts = [
        'features' => 'array',
        'technologies' => 'array',
        'is_featured' => 'boolean',
    ];

    public function images(): HasMany
    {
        return $this->hasMany(ProjectImage::class)->orderBy('sort_order', 'asc');
    }

    public function appImages(): HasMany
    {
        return $this->hasMany(ProjectImage::class)
            ->whereIn('image_type', ['app_screen', 'admin_screen'])
            ->orderBy('sort_order', 'asc');
    }

    public function websiteImages(): HasMany
    {
        return $this->hasMany(ProjectImage::class)
            ->where('image_type', 'website_screen')
            ->orderBy('sort_order', 'asc');
    }
}

