<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('personal_profiles', function (Blueprint $table) {
            $table->id();
            $table->string('full_name');
            $table->string('bengali_name')->nullable();
            $table->string('professional_title');
            $table->string('hero_badge')->default('Available for Freelance & App Development');
            $table->string('hero_headline');
            $table->string('hero_italic_phrase');
            $table->text('hero_description');
            $table->text('about_story');
            $table->string('email');
            $table->string('phone')->nullable();
            $table->string('location')->default('Dhaka, Bangladesh');
            $table->string('university')->default('Northern University Bangladesh');
            $table->string('degree')->default('B.Sc. in Computer Science & Engineering');
            $table->string('github_url')->nullable();
            $table->string('linkedin_url')->nullable();
            $table->string('facebook_url')->nullable();
            $table->string('resume_url')->nullable();
            $table->string('cv_url')->nullable();
            $table->string('years_experience')->default('3+');
            $table->string('apps_shipped')->default('10+');
            $table->string('happy_clients')->default('20+');
            $table->string('profile_image')->default('/images/profile/atik-portrait.jpg');
            $table->string('campus_image')->default('/images/profile/atik-portrait-old.jpg');
            $table->timestamps();
        });

        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique();
            $table->string('title');
            $table->string('subtitle');
            $table->string('category');
            $table->text('overview');
            $table->text('description');
            $table->text('objective');
            $table->json('features');
            $table->json('technologies');
            $table->string('my_role');
            $table->string('live_url')->nullable();
            $table->string('github_url')->nullable();
            $table->boolean('is_featured')->default(false);
            $table->string('accent_gradient')->default('from-[#F07832] to-[#F6D5CB]');
            $table->string('display_type')->default('mobile_device');
            $table->integer('sort_order')->default(0);
            $table->timestamps();
        });

        Schema::create('project_images', function (Blueprint $table) {
            $table->id();
            $table->foreignId('project_id')->constrained('projects')->onDelete('cascade');
            $table->string('file_path');
            $table->string('caption');
            $table->string('screen_label');
            $table->string('image_type')->default('app_screen'); // app_screen, website_screen, admin_screen, preview
            $table->string('orientation')->default('portrait');
            $table->integer('sort_order')->default(0);
            $table->timestamps();
        });

        Schema::create('skills', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('category'); // mobile, backend, languages, design
            $table->integer('level');
            $table->string('rating'); // Expert, Advanced, Proficient
            $table->string('icon_name');
            $table->string('color_gradient');
            $table->integer('sort_order')->default(0);
            $table->timestamps();
        });

        Schema::create('experiences', function (Blueprint $table) {
            $table->id();
            $table->string('type'); // experience, education, leadership
            $table->string('period');
            $table->string('title');
            $table->string('organization');
            $table->text('description');
            $table->boolean('is_current')->default(false);
            $table->integer('sort_order')->default(0);
            $table->timestamps();
        });

        Schema::create('gallery_photos', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('category'); // campus, workshops, community
            $table->string('category_label');
            $table->string('date');
            $table->text('description');
            $table->string('file_path');
            $table->integer('sort_order')->default(0);
            $table->timestamps();
        });

        Schema::create('contact_messages', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email');
            $table->string('subject')->nullable();
            $table->text('message');
            $table->string('ip_address')->nullable();
            $table->boolean('is_read')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contact_messages');
        Schema::dropIfExists('gallery_photos');
        Schema::dropIfExists('experiences');
        Schema::dropIfExists('skills');
        Schema::dropIfExists('project_images');
        Schema::dropIfExists('projects');
        Schema::dropIfExists('personal_profiles');
    }
};

