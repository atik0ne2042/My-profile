<?php

namespace App\Http\Controllers;

use App\Models\Experience;
use App\Models\GalleryPhoto;
use App\Models\PersonalProfile;
use App\Models\Project;
use App\Models\Skill;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PortfolioController extends Controller
{
    /**
     * Display the portfolio homepage.
     */
    public function index(): Response
    {
        $profile = PersonalProfile::first();

        $featuredProjects = Project::with('images')
            ->where('is_featured', true)
            ->orderBy('sort_order', 'asc')
            ->get();

        $allProjects = Project::with('images')
            ->orderBy('sort_order', 'asc')
            ->get();

        $skills = Skill::orderBy('sort_order', 'asc')->get();

        $experiences = Experience::orderBy('sort_order', 'asc')->get();

        $galleryPhotos = GalleryPhoto::orderBy('sort_order', 'asc')->get();

        return Inertia::render('Home', [
            'profile' => $profile,
            'featuredProjects' => $featuredProjects,
            'allProjects' => $allProjects,
            'skills' => $skills,
            'experiences' => $experiences,
            'galleryPhotos' => $galleryPhotos,
        ]);
    }

    /**
     * Display an individual project showcase page.
     */
    public function showProject(string $slug): Response
    {
        $project = Project::with('images')
            ->where('slug', $slug)
            ->firstOrFail();

        $relatedProjects = Project::with('images')
            ->where('id', '!=', $project->id)
            ->orderBy('sort_order', 'asc')
            ->take(3)
            ->get();

        $profile = PersonalProfile::first();

        return Inertia::render('ProjectDetail', [
            'project' => $project,
            'relatedProjects' => $relatedProjects,
            'profile' => $profile,
        ]);
    }

    /**
     * Display the full event photo and memory archives.
     */
    public function gallery(): Response
    {
        $photos = GalleryPhoto::orderBy('sort_order', 'asc')->get();
        $profile = PersonalProfile::first();

        return Inertia::render('GalleryArchive', [
            'photos' => $photos,
            'profile' => $profile,
        ]);
    }
}

