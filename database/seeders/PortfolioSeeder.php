<?php

namespace Database\Seeders;

use App\Models\ContactMessage;
use App\Models\Experience;
use App\Models\GalleryPhoto;
use App\Models\PersonalProfile;
use App\Models\Project;
use App\Models\ProjectImage;
use App\Models\Skill;
use Illuminate\Database\Seeder;

class PortfolioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // 1. Personal Profile
        PersonalProfile::truncate();
        PersonalProfile::create([
            'full_name' => 'Atik Hasan',
            'bengali_name' => 'আতিক হাসান',
            'professional_title' => 'Software Developer',
            'hero_badge' => 'Available for Freelance & Software Roles',
            'hero_headline' => 'Atik Hasan',
            'hero_italic_phrase' => '',
            'hero_description' => "Specializing in mobile application and web development with Flutter, Dart, Laravel, and React. Passionate about clean code, efficient problem-solving, application performance, and delivering reliable software through modern development practices.",
            'about_story' => "I am a Software Developer specializing in mobile application and web development, with proficiency in Flutter, Dart, and modern web technologies. Experienced in designing, developing, and optimizing responsive, scalable, and user-friendly software solutions with a strong focus on clean code, efficient problem-solving, and delivering high application performance.\n\nCurrently pursuing my Bachelor of Science in Computer Science and Engineering at Northern University Bangladesh (2024 – Present). In addition to technical engineering, I serve as Senior Graphic Secretary at NUB Computer Club (NUBCC) leading visual design initiatives, and contributed as Junior Software Developer at Neurootix IT.",
            'email' => 'atikhasan.io2042@gmail.com',
            'phone' => '+8801682868870',
            'location' => 'Dhaka, Bangladesh',
            'university' => 'Northern University Bangladesh',
            'degree' => 'B.Sc. in Computer Science & Engineering',
            'github_url' => 'https://github.com/atik0ne2042',
            'linkedin_url' => 'https://www.linkedin.com/in/atik-hasan-b51516331/',
            'facebook_url' => 'https://www.facebook.com/atik.hasan.510156',
            'resume_url' => '/cv/Atik_Hasan_CV.pdf',
            'cv_url' => '/cv/Atik_Hasan_CV.pdf',
            'years_experience' => '3+',
            'apps_shipped' => '10+',
            'happy_clients' => '20+',
            'profile_image' => '/images/profile/atik-portrait.jpg',
            'campus_image' => '/images/profile/atik-portrait-old.jpg',
        ]);

        // 2. Projects & Images
        ProjectImage::truncate();
        Project::truncate();

        // PROJECT 1: PADMA TV (SPECIAL FEATURED)
        $padma = Project::create([
            'slug' => 'padma-tv',
            'title' => 'Padma TV Web App & Digital Newsroom',
            'subtitle' => '24/7 Live Broadcast & Multi-Upazila News Platform',
            'category' => 'Web Applications',
            'overview' => 'A premier 24/7 digital broadcast and news publishing web platform engineered for Padma TV, featuring live television streaming, video journalism, granular regional coverage across all 7 upazilas of Manikganj district, and an executive administration dashboard.',
            'description' => "Padma TV is a complete digital broadcast and regional journalism platform. It bridges high-definition live television streaming with deep local reporting. Viewers can watch 24/7 live streams, explore curated video documentaries, read breaking news updates, and filter regional reports by upazilas (Manikganj Sadar, Singair, Saturia, Shibaloy, Harirampur, Daulatpur, Ghior).\n\nFor editorial staff, Padma TV incorporates a full-featured digital newsroom CMS dashboard welcoming Md. Atik Hasan (Chief Administrator & Editor). This centralized portal enables instant publishing of articles, video broadcasts, breaking news tickers, media library management, and comment moderation.",
            'objective' => 'Build a responsive, zero-latency digital media and broadcasting platform delivering real-time news to readers on any device while giving editorial teams centralized content governance.',
            'features' => [
                '24/7 Low-latency Live TV video stream player integration',
                'Dedicated regional hub covering all 7 upazilas of Manikganj district with interactive filters',
                'Curated video journalism portal with video duration badges and play-on-demand',
                'Live breaking news banner ticker and trending topic hashtags (#মানিকগঞ্জ_আপডেট)',
                'Bilingual interface toggle (বাংলা / ENG) with instant theme switching (Dark / Light)',
                'Executive digital newsroom dashboard with publishing metrics (10 published news, 4 video stories, reader views)',
                'Centralized CMS drawer for articles, media library, upazilas, categories, and security settings',
                'Reader bookmarks and offline reading list (সংরক্ষিত খবর)'
            ],
            'technologies' => ['Laravel', 'PHP', 'React', 'Inertia.js', 'Tailwind CSS', 'REST APIs', 'Video Streaming', 'Responsive CMS'],
            'my_role' => 'Chief Administrator & Lead Full-Stack Architect',
            'live_url' => 'https://padmatv.net',
            'github_url' => 'https://github.com/atik0ne2042',
            'is_featured' => true,
            'accent_gradient' => 'from-rose-500 via-red-600 to-amber-500',
            'display_type' => 'hybrid',
            'sort_order' => 1,
        ]);

        $padmaImages = [
            [
                'file_path' => '/images/projects/padma-tv/padma-tv-01-live-feed.jpg',
                'caption' => 'Public Live News Feed with Live TV button, search bar, language toggle, and Shaheed Rafiq Library featured report',
                'screen_label' => 'Live News & Broadcast Feed',
                'image_type' => 'app_screen',
                'orientation' => 'portrait',
                'sort_order' => 1,
            ],
            [
                'file_path' => '/images/projects/padma-tv/padma-tv-02-video-news.jpg',
                'caption' => 'Video Newsroom & Live Stream hub with duration badges (04:25) and Harirampur documentary story',
                'screen_label' => 'Video Newsroom & Stream Hub',
                'image_type' => 'app_screen',
                'orientation' => 'portrait',
                'sort_order' => 2,
            ],
            [
                'file_path' => '/images/projects/padma-tv/padma-tv-03-upazila-news.jpg',
                'caption' => 'Regional Upazila Directory covering Manikganj 7 Upazilas with interactive filter pills and Paturia ferry service report',
                'screen_label' => 'Regional Upazila Directory',
                'image_type' => 'app_screen',
                'orientation' => 'portrait',
                'sort_order' => 3,
            ],
            [
                'file_path' => '/images/projects/padma-tv/padma-tv-04-newsroom-admin.jpg',
                'caption' => 'Central Digital Newsroom Admin Dashboard welcoming Md. Atik Hasan (Chief Administrator & Editor) with metrics cards',
                'screen_label' => 'Newsroom Admin Dashboard',
                'image_type' => 'admin_screen',
                'orientation' => 'portrait',
                'sort_order' => 4,
            ],
            [
                'file_path' => '/images/projects/padma-tv/padma-tv-05-menu-drawer.jpg',
                'caption' => 'Editorial Management Navigation Drawer showcasing CMS settings, media library, upazilas, and security controls',
                'screen_label' => 'CMS Management Drawer',
                'image_type' => 'admin_screen',
                'orientation' => 'portrait',
                'sort_order' => 5,
            ],
        ];

        foreach ($padmaImages as $img) {
            $padma->images()->create($img);
        }

        // PROJECT 2: TOUR PARTNER
        $tourPartner = Project::create([
            'slug' => 'tour-partner',
            'title' => 'Tour Partner',
            'subtitle' => 'Flagship Travel Companion Mobile App',
            'category' => 'Mobile Applications',
            'overview' => 'A complete travel companion mobile app engineered for exploring destinations, planning multi-day itineraries, tracking shared expenses, and offline trip caching.',
            'description' => "Tour Partner was inspired by frequent journeys exploring the scenic landscapes of Bangladesh. The application solves common travel pain points: organizing multi-day itineraries, locating hidden viewpoints using Google Maps, calculating and splitting shared costs among group members, and caching all itinerary details locally so travelers never get stranded without data in mountainous regions.",
            'objective' => 'Create a fast, 60fps native mobile app unifying trip discovery, GPS waypoint planning, and transparent expense bookkeeping into an offline-first Flutter application.',
            'features' => [
                'Destination discovery feed with high-resolution photography and travel tips',
                'Interactive multi-stop itinerary planner integrated with Google Maps API',
                'Shared travel expense ledger with automatic split calculation and currency conversion',
                'Traveler profile with completed trip history, badges, and passport logs',
                'Offline-first SQLite caching for zero-connectivity journeys',
                'Fluid Material 3 design system with customizable light and dark themes'
            ],
            'technologies' => ['Flutter', 'Dart', 'Firebase', 'Google Maps API', 'Provider', 'Offline-First', 'Material Design'],
            'my_role' => 'Founder & Lead Mobile Engineer',
            'live_url' => null,
            'github_url' => 'https://github.com/atik0ne2042',
            'is_featured' => true,
            'accent_gradient' => 'from-sky-400 via-blue-500 to-cyan-400',
            'display_type' => 'mobile_device',
            'sort_order' => 2,
        ]);

        $tourImages = [
            [
                'file_path' => '/images/projects/tour-partner/tour-partner-01-home.jpg',
                'caption' => 'Explore Feed showing featured travel destinations and trip discovery recommendations',
                'screen_label' => 'Explore & Feed',
                'image_type' => 'app_screen',
                'orientation' => 'portrait',
                'sort_order' => 1,
            ],
            [
                'file_path' => '/images/projects/tour-partner/tour-partner-02-profile.jpg',
                'caption' => 'Traveler Profile showcasing trip statistics, saved itineraries, and travel history',
                'screen_label' => 'Profile & History',
                'image_type' => 'app_screen',
                'orientation' => 'portrait',
                'sort_order' => 2,
            ],
            [
                'file_path' => '/images/projects/tour-partner/tour-partner-03-settings.jpg',
                'caption' => 'Preferences and theme customization panel with dark/light appearance toggles',
                'screen_label' => 'Preferences & Theme',
                'image_type' => 'app_screen',
                'orientation' => 'portrait',
                'sort_order' => 3,
            ],
            [
                'file_path' => '/images/projects/tour-partner/tour-partner-04-about.jpg',
                'caption' => 'System Architecture, developer credits, and versioning info screen',
                'screen_label' => 'Architecture & About',
                'image_type' => 'app_screen',
                'orientation' => 'portrait',
                'sort_order' => 4,
            ],
        ];

        foreach ($tourImages as $img) {
            $tourPartner->images()->create($img);
        }

        // PROJECT 3: HEALTH ASSISTANT
        $health = Project::create([
            'slug' => 'health-assistant',
            'title' => 'Health Assistant',
            'subtitle' => 'Digital Healthcare & Wellness Suite',
            'category' => 'Mobile Applications',
            'overview' => 'A fast medical utility mobile app providing quick access to emergency doctors, verified blood banks, BMI/IBW diagnostics, and healthy nutrition guides.',
            'description' => 'Health Assistant bridges patients with urgent medical utilities through a streamlined Material 3 mobile application. Users can search verified doctors across medical specialties, dial emergency clinics directly, identify compatible blood donors across regional registries, and calculate personal health metrics with instant clinical feedback.',
            'objective' => 'Provide a rapid, life-saving mobile directory and clinical calculator suite that operates smoothly under emergency conditions.',
            'features' => [
                'Medical utility dashboard with one-tap emergency calling',
                'Specialty doctor directory with clinic hours and consultation booking',
                'Verified blood bank registry with blood group compatibility lookup',
                'Integrated BMI and Ideal Body Weight diagnostic calculators',
                'Dietary guidance and preventive health nutrition tips'
            ],
            'technologies' => ['Flutter', 'Dart', 'Material 3', 'Health Suite', 'Clean UI'],
            'my_role' => 'Lead Mobile Developer',
            'live_url' => null,
            'github_url' => 'https://github.com/atik0ne2042',
            'is_featured' => false,
            'accent_gradient' => 'from-emerald-400 via-green-500 to-teal-500',
            'display_type' => 'mobile_device',
            'sort_order' => 3,
        ]);

        $healthImages = [
            [
                'file_path' => '/images/projects/health-assistant/health-assistant-1.jpg',
                'caption' => 'Clinical Dashboard with quick access to doctors, blood donors, and diagnostics',
                'screen_label' => 'Medical Dashboard',
                'image_type' => 'app_screen',
                'orientation' => 'portrait',
                'sort_order' => 1,
            ],
            [
                'file_path' => '/images/projects/health-assistant/health-assistant-2.jpg',
                'caption' => 'Doctor Directory categorized by clinical specialties with consultation booking',
                'screen_label' => 'Find Verified Doctors',
                'image_type' => 'app_screen',
                'orientation' => 'portrait',
                'sort_order' => 2,
            ],
        ];

        foreach ($healthImages as $img) {
            $health->images()->create($img);
        }

        // PROJECT 4: IBW CALCULATOR
        $ibw = Project::create([
            'slug' => 'ibw-calculator',
            'title' => 'IBW Calculator',
            'subtitle' => 'Ideal Body Weight Medical Diagnostics',
            'category' => 'Mobile Applications',
            'overview' => 'Medical ideal weight diagnostics app with support for Imperial & Metric units, custom body frame calculations, and instant clinical dietary advice.',
            'description' => 'Engineered for clinicians and fitness enthusiasts, the IBW Calculator applies clinically validated formulas (Devine and Robinson) to determine exact healthy weight targets. The app accounts for biological gender, height measurements, and bone frame classifications, presenting results alongside supportive lifestyle advice.',
            'objective' => 'Deliver precise, evidence-based weight targets with an intuitive dual-unit interface.',
            'features' => [
                'Imperial (ft/in, lbs) and Metric (cm, kg) unit conversion',
                'Devine and Robinson clinical formula algorithms',
                'Body frame classification adjustments (small, medium, large)',
                'Personalized nutritional recommendation cards'
            ],
            'technologies' => ['Flutter', 'Dart', 'Health Metrics', 'Form Validation', 'Clean UI'],
            'my_role' => 'Developer',
            'live_url' => null,
            'github_url' => 'https://github.com/atik0ne2042',
            'is_featured' => false,
            'accent_gradient' => 'from-teal-400 via-emerald-500 to-cyan-500',
            'display_type' => 'mobile_device',
            'sort_order' => 4,
        ]);

        $ibwImages = [
            [
                'file_path' => '/images/projects/ibw-calculator/ibw-calculator-1.jpg',
                'caption' => 'Diagnostic input form with unit switches and frame size selector',
                'screen_label' => 'Input Diagnostics Form',
                'image_type' => 'app_screen',
                'orientation' => 'portrait',
                'sort_order' => 1,
            ],
            [
                'file_path' => '/images/projects/ibw-calculator/ibw-calculator-2.jpg',
                'caption' => 'Calculated Ideal Weight result range with clinical dietary recommendations',
                'screen_label' => 'Calculated Result & Tips',
                'image_type' => 'app_screen',
                'orientation' => 'portrait',
                'sort_order' => 2,
            ],
        ];

        foreach ($ibwImages as $img) {
            $ibw->images()->create($img);
        }

        // PROJECT 5: SIGN UP / LOGIN UI KIT
        $auth = Project::create([
            'slug' => 'auth-ui',
            'title' => 'Sign Up / Login UI Kit',
            'subtitle' => 'Cyan Flow Mobile Authentication System',
            'category' => 'Mobile Applications',
            'overview' => 'Production-grade mobile authentication system with responsive form validation, biometric login hooks, and session recovery in a high-contrast modern design.',
            'description' => 'A comprehensive UI kit for cross-platform authentication flows. Designed in Flutter with responsive constraints, real-time input validators, password security strength meters, biometric authentication prompts, and social OAuth providers.',
            'objective' => 'Provide a reusable, secure, visually captivating authentication foundation for mobile applications.',
            'features' => [
                'High-contrast cyan flow visual design language',
                'Asynchronous email availability and password complexity validation',
                'Biometric fingerprint and Face ID simulation hooks',
                'Clean separation between auth state and presentation layer'
            ],
            'technologies' => ['Flutter', 'Dart', 'UI Kit', 'Authentication', 'Adaptive'],
            'my_role' => 'UI/UX Designer & Flutter Developer',
            'live_url' => null,
            'github_url' => 'https://github.com/atik0ne2042',
            'is_featured' => false,
            'accent_gradient' => 'from-cyan-400 via-sky-500 to-blue-500',
            'display_type' => 'mobile_device',
            'sort_order' => 5,
        ]);

        $authImages = [
            [
                'file_path' => '/images/projects/auth-ui/login-1.jpg',
                'caption' => 'Create Account registration screen with field validators and social OAuth buttons',
                'screen_label' => 'Create Account',
                'image_type' => 'app_screen',
                'orientation' => 'portrait',
                'sort_order' => 1,
            ],
            [
                'file_path' => '/images/projects/auth-ui/login-2.jpg',
                'caption' => 'Welcome Back login screen with biometric authentication hook',
                'screen_label' => 'Welcome Back',
                'image_type' => 'app_screen',
                'orientation' => 'portrait',
                'sort_order' => 2,
            ],
        ];

        foreach ($authImages as $img) {
            $auth->images()->create($img);
        }

        // PROJECT 6: BMI CALCULATOR
        $bmi = Project::create([
            'slug' => 'bmi-calculator',
            'title' => 'BMI Calculator',
            'subtitle' => 'Interactive Body Mass Index Monitor',
            'category' => 'Mobile Applications',
            'overview' => 'Body mass index monitoring with fluid real-time slider inputs, immediate classification calculations, and supportive health recommendations.',
            'description' => 'An engaging wellness tool that computes Body Mass Index dynamically as users glide fluid sliders. Results are plotted instantly against World Health Organization criteria with visual color meters and supportive exercise tips.',
            'objective' => 'Transform clinical health calculation into a satisfying, tactile interactive user experience.',
            'features' => [
                'Fluid real-time height and weight slider controls',
                'Instant WHO health category calculation (Underweight, Normal, Overweight, Obese)',
                'Visual radial scale gauge indicating health zone',
                'Personalized health and hydration advice'
            ],
            'technologies' => ['Flutter', 'Dart', 'Health Metrics', 'Custom Sliders', 'Reactive UI'],
            'my_role' => 'Developer',
            'live_url' => null,
            'github_url' => 'https://github.com/atik0ne2042',
            'is_featured' => false,
            'accent_gradient' => 'from-emerald-400 via-teal-500 to-green-500',
            'display_type' => 'mobile_device',
            'sort_order' => 6,
        ]);

        $bmiImages = [
            [
                'file_path' => '/images/projects/bmi-calculator/bmi-1.jpg',
                'caption' => 'Interactive Slider Screen for real-time height and weight adjustments',
                'screen_label' => 'Interactive Sliders',
                'image_type' => 'app_screen',
                'orientation' => 'portrait',
                'sort_order' => 1,
            ],
            [
                'file_path' => '/images/projects/bmi-calculator/bmi-2.jpg',
                'caption' => 'WHO Health Category Analysis result card with supportive lifestyle tips',
                'screen_label' => 'Health Category Analysis',
                'image_type' => 'app_screen',
                'orientation' => 'portrait',
                'sort_order' => 2,
            ],
        ];

        foreach ($bmiImages as $img) {
            $bmi->images()->create($img);
        }

        // 3. Skills
        Skill::truncate();
        $skills = [
            // Mobile
            [
                'name' => 'Flutter',
                'category' => 'mobile',
                'level' => 92,
                'rating' => 'Expert',
                'icon_name' => 'Smartphone',
                'color_gradient' => 'from-sky-400 to-blue-500',
                'sort_order' => 1,
            ],
            [
                'name' => 'Dart',
                'category' => 'mobile',
                'level' => 90,
                'rating' => 'Expert',
                'icon_name' => 'Code2',
                'color_gradient' => 'from-cyan-400 to-blue-500',
                'sort_order' => 2,
            ],
            [
                'name' => 'Android (Java)',
                'category' => 'mobile',
                'level' => 80,
                'rating' => 'Advanced',
                'icon_name' => 'Terminal',
                'color_gradient' => 'from-emerald-400 to-teal-500',
                'sort_order' => 3,
            ],

            // Backend & Web
            [
                'name' => 'Laravel & PHP',
                'category' => 'backend',
                'level' => 85,
                'rating' => 'Advanced',
                'icon_name' => 'Cpu',
                'color_gradient' => 'from-red-500 to-rose-600',
                'sort_order' => 4,
            ],
            [
                'name' => 'Firebase',
                'category' => 'backend',
                'level' => 85,
                'rating' => 'Advanced',
                'icon_name' => 'Flame',
                'color_gradient' => 'from-amber-400 to-orange-500',
                'sort_order' => 5,
            ],
            [
                'name' => 'REST APIs',
                'category' => 'backend',
                'level' => 82,
                'rating' => 'Advanced',
                'icon_name' => 'Globe',
                'color_gradient' => 'from-indigo-400 to-violet-500',
                'sort_order' => 6,
            ],
            [
                'name' => 'Supabase',
                'category' => 'backend',
                'level' => 75,
                'rating' => 'Proficient',
                'icon_name' => 'Database',
                'color_gradient' => 'from-emerald-400 to-green-600',
                'sort_order' => 7,
            ],

            // Frontend & Design
            [
                'name' => 'React & TypeScript',
                'category' => 'design',
                'level' => 85,
                'rating' => 'Advanced',
                'icon_name' => 'Layers',
                'color_gradient' => 'from-sky-400 to-indigo-500',
                'sort_order' => 8,
            ],
            [
                'name' => 'UI / UX Design',
                'category' => 'design',
                'level' => 80,
                'rating' => 'Advanced',
                'icon_name' => 'Palette',
                'color_gradient' => 'from-fuchsia-400 to-purple-500',
                'sort_order' => 9,
            ],
            [
                'name' => 'HTML5 & CSS3 / Tailwind',
                'category' => 'design',
                'level' => 88,
                'rating' => 'Advanced',
                'icon_name' => 'FileCode2',
                'color_gradient' => 'from-orange-400 to-red-500',
                'sort_order' => 10,
            ],

            // Languages & Core
            [
                'name' => 'Git & GitHub',
                'category' => 'languages',
                'level' => 88,
                'rating' => 'Advanced',
                'icon_name' => 'Boxes',
                'color_gradient' => 'from-rose-400 to-pink-500',
                'sort_order' => 11,
            ],
            [
                'name' => 'Python',
                'category' => 'languages',
                'level' => 75,
                'rating' => 'Proficient',
                'icon_name' => 'Terminal',
                'color_gradient' => 'from-yellow-400 to-amber-500',
                'sort_order' => 12,
            ],
            [
                'name' => 'C / C++',
                'category' => 'languages',
                'level' => 75,
                'rating' => 'Proficient',
                'icon_name' => 'Code2',
                'color_gradient' => 'from-blue-400 to-indigo-600',
                'sort_order' => 13,
            ],
        ];

        foreach ($skills as $s) {
            Skill::create($s);
        }

        // 4. Experiences & Education (Directly from verified CV)
        Experience::truncate();
        $experiences = [
            // Work Experience
            [
                'type' => 'experience',
                'period' => '2025 — 2026',
                'title' => 'Junior Software Developer',
                'organization' => 'Neurootix IT — Dhaka, Bangladesh',
                'description' => 'Contributed to mobile and web application development, feature implementation, debugging, and performance optimization across production systems.',
                'is_current' => true,
                'sort_order' => 1,
            ],
            [
                'type' => 'experience',
                'period' => '2026 — 2027',
                'title' => 'Senior Graphic Secretary',
                'organization' => 'NUB Computer Club (NUBCC) — Kawla, Dhaka',
                'description' => 'Led graphic design initiatives and created visual content, digital assets, and promotional materials for club events, programming contests, and digital platforms.',
                'is_current' => true,
                'sort_order' => 2,
            ],
            [
                'type' => 'experience',
                'period' => '2025 — 2026',
                'title' => 'Chief Administrator & Lead Full-Stack Architect',
                'organization' => 'Padma TV — 24/7 News Portal',
                'description' => 'Developed a fully functional news TV website with dynamic news publishing, content management, categorized news sections across Manikganj 7 upazilas, and a responsive interface.',
                'is_current' => false,
                'sort_order' => 3,
            ],
            [
                'type' => 'experience',
                'period' => '2025 — 2026',
                'title' => 'Lead Mobile Developer',
                'organization' => 'Smart Tour Partner (Mobile Application)',
                'description' => 'Developed a smart travel management app featuring individual and group expense tracking, shared calculations, and digital notes for organized trip management.',
                'is_current' => false,
                'sort_order' => 4,
            ],
            [
                'type' => 'experience',
                'period' => '2025',
                'title' => 'Mobile App Developer',
                'organization' => 'Health Care Mobile App — Dhaka',
                'description' => 'Developed a healthcare app featuring doctor consultation support, health tips, medical information, and essential healthcare resources.',
                'is_current' => false,
                'sort_order' => 5,
            ],

            // Education & Certifications
            [
                'type' => 'education',
                'period' => '2024 — Present',
                'title' => 'Bachelor of Science in Computer Science and Engineering',
                'organization' => 'Northern University Bangladesh — Dhaka',
                'description' => 'Undergraduate student in Computer Science & Engineering. Core coursework in Data Structures, Algorithm Design, OOP, Database Systems, and Mobile Software Engineering.',
                'is_current' => true,
                'sort_order' => 6,
            ],
            [
                'type' => 'education',
                'period' => '2025 — 2026',
                'title' => 'Certifications & Recognized Achievements',
                'organization' => 'DataCamp • WICE • Cognisor AI',
                'description' => "• Understanding Data Science — DataCamp\n• Organizer – 8th Innovation & Exhibition — WICE\n• Impact Dhaka 2026 – AI Solutions for Urban Innovation — Cognisor AI\n• Certificate of Appreciation — WICE",
                'is_current' => true,
                'sort_order' => 7,
            ],
            [
                'type' => 'education',
                'period' => '2024 — 2025',
                'title' => 'Campus Ambassador & Student Leadership',
                'organization' => 'Techboloy & English Quest',
                'description' => 'Promoted tech innovation bootcamps, workshops, and industry communication programs across student cohorts to foster campus tech culture.',
                'is_current' => false,
                'sort_order' => 8,
            ],
        ];

        foreach ($experiences as $e) {
            Experience::create($e);
        }

        // 5. Gallery Photos
        GalleryPhoto::truncate();
        for ($i = 1; $i <= 30; $i++) {
            $numStr = str_pad($i, 2, '0', STR_PAD_LEFT);
            $filename = "event-photo-{$numStr}.jpeg";
            $filePath = "/images/gallery/{$filename}";

            if ($i <= 8) {
                $category = 'campus';
                $categoryLabel = 'Campus Life & NUBCC';
                $title = "Campus Event & Club Milestone #{$i}";
                $desc = 'University ceremonies, CSE departmental seminars, and visual branding initiatives.';
                $date = '2024 — 2025';
            } elseif ($i <= 18) {
                $category = 'workshops';
                $categoryLabel = 'Workshops & Contests';
                $title = "Tech Workshop & Hackathon Session #{$i}";
                $desc = 'Hands-on programming workshops, algorithmic coding contests, and student tech mentorship.';
                $date = '2024 — 2025';
            } else {
                $category = 'community';
                $categoryLabel = 'Youth & Community';
                $title = "Techboloy & Youth Engagement #{$i}";
                $desc = 'Community ambassadorship, youth leadership forums, and student networking.';
                $date = '2025';
            }

            GalleryPhoto::create([
                'title' => $title,
                'category' => $category,
                'category_label' => $categoryLabel,
                'date' => $date,
                'description' => $desc,
                'file_path' => $filePath,
                'sort_order' => $i,
            ]);
        }
    }
}

