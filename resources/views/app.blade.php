<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="scroll-smooth">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Personal Developer Portfolio of Md. Atik Hasan — Full-Stack Software Engineer, Mobile App Developer (Flutter & Android), and UI/UX Designer based in Dhaka, Bangladesh.">
    <meta name="keywords" content="Atik Hasan, Mobile App Developer, Flutter Developer, Laravel Developer, React Developer, Software Engineer, Portfolio, Tour Partner, Padma TV">
    <meta name="author" content="Md. Atik Hasan">

    <!-- Open Graph / Meta -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://atikhasan.vercel.app">
    <link rel="canonical" href="https://atikhasan.vercel.app">
    <meta property="og:title" content="Atik Hasan — Software Engineer & Mobile Specialist">
    <meta property="og:description" content="Crafting fast, beautiful mobile experiences with Flutter & Android, and scalable web applications with Laravel & React.">
    <meta property="og:image" content="/images/profile/atik-portrait.jpg">

    <link rel="icon" type="image/svg+xml" href="/favicon.svg">

    <!-- Google Fonts: Inter / Plus Jakarta Sans + Playfair Display for elegant serif italic -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">

    <title inertia>{{ config('app.name', 'Atik Hasan') }}</title>

    <!-- Theme initialization (prevents flash of wrong theme) -->
    <script>
        (function() {
            try {
                var urlParams = new URLSearchParams(window.location.search);
                var themeParam = urlParams.get('theme');
                if (themeParam === 'dark' || themeParam === 'light') {
                    localStorage.setItem('theme', themeParam);
                }
                var savedTheme = localStorage.getItem('theme');
                var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
                    document.documentElement.classList.add('dark');
                    document.documentElement.style.colorScheme = 'dark';
                } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.style.colorScheme = 'light';
                }
            } catch (e) {}
        })();
    </script>

    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.tsx'])
    @inertiaHead
</head>
<body class="bg-[#F8F7F5] dark:bg-[#071426] text-[#151515] dark:text-[#FFFFFF] font-sans antialiased selection:bg-[#F07832]/20 selection:text-[#F07832] overflow-x-hidden min-h-screen transition-colors duration-300">
    @inertia
</body>
</html>

