import os
import shutil
import zipfile

OUTPUT_DIR = "/tmp/falcha_php_package"
PUBLIC_ZIP = "public/falcha-filmation-studio-php.zip"

if os.path.exists(OUTPUT_DIR):
    shutil.rmtree(OUTPUT_DIR)
os.makedirs(f"{OUTPUT_DIR}/assets/images", exist_ok=True)
os.makedirs(f"{OUTPUT_DIR}/assets/css", exist_ok=True)
os.makedirs(f"{OUTPUT_DIR}/assets/js", exist_ok=True)

# Copy images
img_mapping = {
    "src/assets/images/falcha_asd_logo_1790009819892.jpg": f"{OUTPUT_DIR}/assets/images/logo.jpg",
    "src/assets/images/hero_pagoda_temple_1790008901202.jpg": f"{OUTPUT_DIR}/assets/images/hero_pagoda.jpg",
    "src/assets/images/doc_elderly_woman_1790008913446.jpg": f"{OUTPUT_DIR}/assets/images/documentaries.jpg",
    "src/assets/images/commercial_product_bottles_1790008929432.jpg": f"{OUTPUT_DIR}/assets/images/commercials.jpg",
    "src/assets/images/short_film_dialogue_1790008940822.jpg": f"{OUTPUT_DIR}/assets/images/short_films.jpg",
}

for src, dst in img_mapping.items():
    if os.path.exists(src):
        shutil.copyfile(src, dst)

# 1. data.php
data_php = """<?php
/**
 * Falcha Filmation Studio - Data & Configuration File
 */

define('STUDIO_NAME', 'FALCHA');
define('STUDIO_SUBTITLE', 'FILMATION STUDIO');
define('STUDIO_TAGLINE', 'STORYTELLING IN MOTION');
define('STUDIO_LOCATION', 'Patan Durbar Heritage Zone, Lalitpur, Kathmandu Valley, Nepal');
define('STUDIO_EMAIL', 'contact@falchafilms.com');
define('STUDIO_PHONE', '+977 1 552 4890');

$mainShowreel = [
    'id' => 'falcha-main-showreel',
    'category' => 'Documentary Showreel',
    'title' => 'The Stone Whispers: Heritage of the Kathmandu Valley',
    'nepaliTitle' => 'ढुङ्गाका स्वरहरू : उपत्यकाको सम्पदा',
    'year' => '2026',
    'duration' => '03:45',
    'thumbnail' => 'assets/images/hero_pagoda.jpg',
    'videoUrl' => 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    'synopsis' => 'An evocative cinematic celebration of Nepal’s architectural sanctuary, ancient courtyards, and communal Falchas where human tales have been woven for centuries.',
    'director' => 'John Rai Thakuri',
    'awards' => ['Best Cinematography - Himalayan Film Festival', 'Official Selection - Mountain Echoes'],
    'tags' => ['Showreel', 'Cinematography', 'Cultural Heritage', '4K Drone & 35mm']
];

$categories = [
    'documentaries' => [
        'id' => 'documentaries',
        'title' => 'DOCUMENTARIES',
        'devanagari' => 'डकुमेन्टारिज',
        'borderHex' => '#5cb8b2',
        'glowHex' => 'rgba(92, 184, 178, 0.35)',
        'thumbnail' => 'assets/images/documentaries.jpg',
        'featured' => [
            'title' => 'Voices of the Hearth',
            'nepaliTitle' => 'चुल्हाका सुस्केराहरू',
            'duration' => '28:12',
            'year' => '2025',
            'director' => 'Falcha Documentary Unit',
            'thumbnail' => 'assets/images/documentaries.jpg',
            'videoUrl' => 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
            'synopsis' => 'A poignant portrait of Aama and her generation preserving indigenous textile weaving and songs across the changing valleys of the Himalayas.',
            'awards' => ['Audience Choice - KIMFF 2025']
        ]
    ],
    'commercials' => [
        'id' => 'commercials',
        'title' => 'COMMERCIALS',
        'devanagari' => 'कमर्सियल्स',
        'borderHex' => '#ffffff',
        'glowHex' => 'rgba(255, 255, 255, 0.3)',
        'thumbnail' => 'assets/images/commercials.jpg',
        'featured' => [
            'title' => 'Himalayan Nectar: Pure Reserve',
            'nepaliTitle' => 'हिमालयन नेक्टर : मौलिक स्वाद',
            'duration' => '01:00',
            'year' => '2026',
            'director' => 'Commercial Studio Dept.',
            'thumbnail' => 'assets/images/commercials.jpg',
            'videoUrl' => 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
            'synopsis' => 'Tactile macro cinematography, fluid physics, and dramatic studio chiaroscuro highlighting pure botanical ingredients and artisanal glasswork.',
            'awards' => ['Best Commercial Campaign - Brand Nepal Gala 2025']
        ]
    ],
    'short_films' => [
        'id' => 'short_films',
        'title' => 'SHORT FILMS',
        'devanagari' => 'सर्ट फिल्म्स',
        'borderHex' => '#e07a68',
        'glowHex' => 'rgba(224, 122, 104, 0.35)',
        'thumbnail' => 'assets/images/short_films.jpg',
        'featured' => [
            'title' => 'The Evening Light',
            'nepaliTitle' => 'साँझको किरण',
            'duration' => '16:40',
            'year' => '2025',
            'director' => 'Falcha Narrative Team',
            'thumbnail' => 'assets/images/short_films.jpg',
            'videoUrl' => 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            'synopsis' => 'Two childhood friends reunite in a warm Kathmandu apartment after seven years apart, unraveling promises spoken in their youth.',
            'awards' => ['Best Narrative Short - Nepal Cine Guild']
        ]
    ]
];

$services = [
    [
        'title' => 'Cinematic Direction & Production',
        'nepali' => 'चलचित्र निर्देशन तथा निर्माण',
        'desc' => 'Complete end-to-end film production from script development, location scouting in the Himalayas, casting, and multi-camera 4K/6K cinema pipeline.'
    ],
    [
        'title' => 'Documentary Research & Field Crews',
        'nepali' => 'वृत्तचित्र अनुसन्धान र फिल्ड टिम',
        'desc' => 'Deep ethnographical research, ethical community engagement, high-altitude expedition filming, and sensitive interview direction.'
    ],
    [
        'title' => 'Commercials & Brand Storytelling',
        'nepali' => 'व्यापारिक विज्ञापन र ब्रान्डिङ',
        'desc' => 'High-concept television commercials, social-first films, product tabletop cinematography, and brand launch films.'
    ],
    [
        'title' => 'Post-Production, Color & Sound',
        'nepali' => 'रङ्ग संयोजन र साउन्ड डिजाइन',
        'desc' => 'DaVinci Resolve HDR color grading, original orchestral & indigenous musical scoring, Dolby Atmos 7.1 sound mixing.'
    ]
];
"""

with open(f"{OUTPUT_DIR}/data.php", "w") as f:
    f.write(data_php)

# 2. header.php
header_php = """<!DOCTYPE html>
<html lang="en" class="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo STUDIO_NAME . ' ' . STUDIO_SUBTITLE; ?> | <?php echo STUDIO_TAGLINE; ?></title>
    <meta name="description" content="Falcha Filmation Studio – Storytelling in Motion. Dedicated to high-caliber documentaries, commercials, and short films.">
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700;800;900&family=Montserrat:wght@300;400;500;600;700;800;900&family=Noto+Sans+Devanagari:wght@400;500;600;700&display=swap" rel="stylesheet">
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    fontFamily: {
                        cinzel: ['Cinzel', 'Georgia', 'serif'],
                        montserrat: ['Montserrat', 'sans-serif'],
                        devanagari: ['Noto Sans Devanagari', 'sans-serif'],
                    }
                }
            }
        }
    </script>
    <style>
        .font-devanagari { font-family: 'Noto Sans Devanagari', sans-serif; }
        .font-montserrat { font-family: 'Montserrat', sans-serif; }
        .font-cinzel { font-family: 'Cinzel', serif; }
    </style>
</head>
<body class="bg-[#070a0e] text-slate-100 min-h-screen flex flex-col justify-between overflow-x-hidden antialiased selection:bg-white/20 selection:text-white">

    <!-- Atmospheric Backdrops -->
    <div class="fixed inset-0 pointer-events-none -z-20 opacity-80" style="background: radial-gradient(circle at 50% 22%, rgba(20, 32, 48, 0.45) 0%, rgba(10, 15, 22, 0.9) 60%, #06080b 100%);"></div>
    <div class="fixed inset-0 pointer-events-none -z-10 opacity-60" style="background: radial-gradient(ellipse 60% 45% at 50% 12%, rgba(255, 255, 255, 0.05) 0%, rgba(160, 200, 240, 0.015) 50%, transparent 80%);"></div>

    <!-- Header Navigation -->
    <header class="w-full pt-4 md:pt-6 pb-2 px-4 sm:px-8 md:px-12 flex justify-between items-center z-30 select-none">
        <!-- Brand Logo on Left matching reference image asd.png -->
        <a href="index.php" class="flex items-center space-x-3 sm:space-x-3.5 group transition-transform duration-200 hover:scale-[1.02]">
            <div class="relative w-10 h-10 sm:w-12 sm:h-12 md:w-13 md:h-13 rounded-xl overflow-hidden bg-black/60 border border-white/20 shadow-[0_4px_16px_rgba(0,0,0,0.8)] group-hover:border-amber-400/50 transition-colors">
                <img src="assets/images/logo.jpg" alt="Falcha Filmation Studio Logo" class="w-full h-full object-cover filter contrast-110 brightness-105 group-hover:scale-105 transition-transform duration-300">
            </div>
            <div class="flex flex-col text-left">
                <span class="font-montserrat text-base sm:text-lg md:text-xl font-black tracking-[0.16em] text-white leading-tight uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] group-hover:text-amber-100 transition-colors">
                    <?php echo STUDIO_NAME; ?>
                </span>
                <span class="font-montserrat text-[8.5px] sm:text-[9.5px] md:text-[10px] font-bold tracking-[0.22em] text-slate-300 uppercase leading-none mt-0.5">
                    <?php echo STUDIO_SUBTITLE; ?>
                </span>
            </div>
        </a>

        <!-- Navigation Links on Right -->
        <nav class="flex items-center space-x-5 sm:space-x-8 md:space-x-10 text-xs sm:text-[13px] tracking-[0.2em] font-medium font-montserrat">
            <a href="index.php" class="relative py-1 text-white font-semibold uppercase">
                WORK
                <span class="absolute bottom-0 left-0 right-0 h-[2px] bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.7)]"></span>
            </a>
            <button onclick="openModal('servicesModal')" class="relative py-1 text-slate-400 hover:text-slate-200 uppercase transition-colors">
                SERVICES
            </button>
            <button onclick="openModal('aboutModal')" class="relative py-1 text-slate-400 hover:text-slate-200 uppercase transition-colors">
                ABOUT
            </button>
            <button onclick="openModal('contactModal')" class="relative py-1 text-slate-400 hover:text-slate-200 uppercase transition-colors">
                CONTACT
            </button>
        </nav>
    </header>
"""

with open(f"{OUTPUT_DIR}/header.php", "w") as f:
    f.write(header_php)

# 3. footer.php
footer_php = """    <!-- Footer -->
    <footer class="w-full py-4 text-center text-[10px] text-slate-500/70 tracking-widest uppercase font-montserrat select-none">
        <?php echo STUDIO_NAME . ' ' . STUDIO_SUBTITLE; ?> • ALL RIGHTS RESERVED • STORYTELLING IN MOTION
    </footer>

    <!-- Video Modal Player -->
    <div id="videoModal" class="fixed inset-0 z-50 hidden items-center justify-center p-3 sm:p-6 md:p-10 bg-black/90 backdrop-blur-md">
        <div class="relative w-full max-w-5xl bg-[#0b0e14] border border-white/20 rounded-2xl overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.95)] flex flex-col" onclick="event.stopPropagation()">
            <div class="flex items-center justify-between px-5 py-3.5 bg-black/60 border-b border-white/10 z-20">
                <div class="flex items-center space-x-3">
                    <span class="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                    <div>
                        <h2 id="modalVideoTitle" class="text-sm md:text-base font-bold text-white font-montserrat tracking-wider"></h2>
                        <p id="modalVideoNepaliTitle" class="text-xs text-slate-400 font-devanagari"></p>
                    </div>
                </div>
                <button onclick="closeVideoModal()" class="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            </div>
            <div class="relative aspect-video w-full bg-black flex items-center justify-center">
                <video id="mainVideoPlayer" controls playsinline class="w-full h-full object-contain"></video>
            </div>
            <div class="p-5 sm:p-6 bg-[#0e131a] border-t border-white/10">
                <p id="modalVideoSynopsis" class="text-slate-300 text-sm leading-relaxed font-light"></p>
            </div>
        </div>
    </div>

    <!-- Services Modal -->
    <div id="servicesModal" class="fixed inset-0 z-40 hidden items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
        <div class="relative w-full max-w-3xl max-h-[90vh] bg-[#0c1017] border border-white/20 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.9)] overflow-y-auto flex flex-col p-6 sm:p-8" onclick="event.stopPropagation()">
            <div class="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                <div>
                    <h2 class="font-cinzel text-xl sm:text-2xl font-bold tracking-widest text-white uppercase">SERVICES</h2>
                    <p class="text-xs text-slate-400 font-montserrat tracking-widest uppercase mt-1">FALCHA FILMATION STUDIO • KATHMANDU, NEPAL</p>
                </div>
                <button onclick="closeModal('servicesModal')" class="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <?php foreach ($services as $service): ?>
                <div class="p-5 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                    <h3 class="font-montserrat text-sm font-bold text-white"><?php echo htmlspecialchars($service['title']); ?></h3>
                    <p class="font-devanagari text-xs text-slate-400"><?php echo htmlspecialchars($service['nepali']); ?></p>
                    <p class="text-xs text-slate-300 leading-relaxed font-light pt-1"><?php echo htmlspecialchars($service['desc']); ?></p>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>

    <!-- About Modal -->
    <div id="aboutModal" class="fixed inset-0 z-40 hidden items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
        <div class="relative w-full max-w-3xl max-h-[90vh] bg-[#0c1017] border border-white/20 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.9)] overflow-y-auto flex flex-col p-6 sm:p-8" onclick="event.stopPropagation()">
            <div class="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                <div>
                    <h2 class="font-cinzel text-xl sm:text-2xl font-bold tracking-widest text-white uppercase">ABOUT</h2>
                    <p class="text-xs text-slate-400 font-montserrat tracking-widest uppercase mt-1"><?php echo STUDIO_TAGLINE; ?></p>
                </div>
                <button onclick="closeModal('aboutModal')" class="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            </div>
            <div class="space-y-4 text-slate-300 text-sm leading-relaxed font-light">
                <p class="text-base text-white font-medium">A "Falcha" (फल्चा) in traditional Newar architecture is an open public pavilion where travelers rest, community elders converse, and generations have shared folk tales under carved wooden eaves.</p>
                <p>Falcha Filmation Studio was founded on this very philosophy: an open creative haven where authentic stories from the heart of Nepal meet contemporary cinematic craft.</p>
            </div>
        </div>
    </div>

    <!-- Contact Modal -->
    <div id="contactModal" class="fixed inset-0 z-40 hidden items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
        <div class="relative w-full max-w-3xl max-h-[90vh] bg-[#0c1017] border border-white/20 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.9)] overflow-y-auto flex flex-col p-6 sm:p-8" onclick="event.stopPropagation()">
            <div class="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                <div>
                    <h2 class="font-cinzel text-xl sm:text-2xl font-bold tracking-widest text-white uppercase">CONTACT</h2>
                    <p class="text-xs text-slate-400 font-montserrat tracking-widest uppercase mt-1">INQUIRE & BOOK PRODUCTIONS</p>
                </div>
                <button onclick="closeModal('contactModal')" class="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            </div>
            <form action="contact_handler.php" method="POST" class="space-y-4">
                <div>
                    <label class="block text-xs font-montserrat uppercase tracking-wider text-slate-300 mb-1">Your Name / Studio</label>
                    <input type="text" name="name" required class="w-full px-3.5 py-2.5 rounded-lg bg-black/50 border border-white/15 text-white text-xs focus:outline-none focus:border-white/50">
                </div>
                <div>
                    <label class="block text-xs font-montserrat uppercase tracking-wider text-slate-300 mb-1">Email</label>
                    <input type="email" name="email" required class="w-full px-3.5 py-2.5 rounded-lg bg-black/50 border border-white/15 text-white text-xs focus:outline-none focus:border-white/50">
                </div>
                <div>
                    <label class="block text-xs font-montserrat uppercase tracking-wider text-slate-300 mb-1">Project Brief</label>
                    <textarea name="message" rows="3" required class="w-full px-3.5 py-2.5 rounded-lg bg-black/50 border border-white/15 text-white text-xs focus:outline-none focus:border-white/50"></textarea>
                </div>
                <button type="submit" class="w-full py-2.5 rounded-lg bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-slate-200 transition-colors">
                    Send Proposal
                </button>
            </form>
        </div>
    </div>

    <!-- Scripts -->
    <script>
        function openModal(id) {
            const el = document.getElementById(id);
            if (el) {
                el.classList.remove('hidden');
                el.classList.add('flex');
            }
        }
        function closeModal(id) {
            const el = document.getElementById(id);
            if (el) {
                el.classList.add('hidden');
                el.classList.remove('flex');
            }
        }
        function playVideo(title, nepaliTitle, videoUrl, synopsis) {
            document.getElementById('modalVideoTitle').textContent = title;
            document.getElementById('modalVideoNepaliTitle').textContent = nepaliTitle || '';
            document.getElementById('modalVideoSynopsis').textContent = synopsis || '';
            const player = document.getElementById('mainVideoPlayer');
            player.src = videoUrl;
            openModal('videoModal');
            player.play().catch(e => console.log(e));
        }
        function closeVideoModal() {
            const player = document.getElementById('mainVideoPlayer');
            player.pause();
            player.src = '';
            closeModal('videoModal');
        }
        function selectCategory(categoryKey) {
            const cat = categoriesData[categoryKey];
            if (!cat) return;
            const heroThumb = document.getElementById('heroPosterImage');
            const heroTitle = document.getElementById('heroFilmTitle');
            const heroPlay = document.getElementById('heroPlayAction');
            if (heroThumb && cat.featured) {
                heroThumb.src = cat.featured.thumbnail;
                heroTitle.textContent = cat.featured.title;
                heroPlay.onclick = () => playVideo(cat.featured.title, cat.featured.nepaliTitle, cat.featured.videoUrl, cat.featured.synopsis);
            }
            // Update active styles
            document.querySelectorAll('.cat-card').forEach(c => c.classList.remove('scale-105'));
            const target = document.getElementById('card-' + categoryKey);
            if (target) target.classList.add('scale-105');
        }
        window.onclick = function(event) {
            ['videoModal', 'servicesModal', 'aboutModal', 'contactModal'].forEach(id => {
                const modal = document.getElementById(id);
                if (event.target === modal) {
                    if (id === 'videoModal') closeVideoModal();
                    else closeModal(id);
                }
            });
        };
    </script>
</body>
</html>
"""

with open(f"{OUTPUT_DIR}/footer.php", "w") as f:
    f.write(footer_php)

# 4. index.php
index_php = """<?php
require_once __DIR__ . '/data.php';
require_once __DIR__ . '/header.php';
?>

<!-- Pass categories into JS for interactive switching -->
<script>
    const categoriesData = <?php echo json_encode($categories); ?>;
</script>

<!-- Main Stage: Showcase Video and 3 Category Cards -->
<main class="flex-1 flex flex-col items-center justify-center w-full px-2 sm:px-4 my-auto py-2 sm:py-4">

    <!-- Featured Video Player Frame -->
    <div class="relative w-full max-w-[620px] sm:max-w-[700px] md:max-w-[760px] lg:max-w-[800px] mx-auto px-4 sm:px-6 mt-0 sm:mt-1 md:mt-2 mb-4 sm:mb-6 md:mb-7">
        <div class="absolute -inset-1 sm:-inset-2 rounded-2xl md:rounded-3xl opacity-50 blur-xl pointer-events-none -z-10" style="background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.08) 0%, rgba(120, 160, 200, 0.03) 50%, transparent 80%);"></div>

        <div id="heroPlayAction" onclick="playVideo('<?php echo addslashes($mainShowreel['title']); ?>', '<?php echo addslashes($mainShowreel['nepaliTitle']); ?>', '<?php echo addslashes($mainShowreel['videoUrl']); ?>', '<?php echo addslashes($mainShowreel['synopsis']); ?>')" class="group relative w-full aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden bg-black border border-white/20 shadow-[0_12px_36px_rgba(0,0,0,0.8)] cursor-pointer transition-all duration-300 hover:border-white/40 hover:shadow-[0_16px_48px_rgba(0,0,0,0.9)]">
            <img id="heroPosterImage" src="<?php echo htmlspecialchars($mainShowreel['thumbnail']); ?>" alt="<?php echo htmlspecialchars($mainShowreel['title']); ?>" class="w-full h-full object-cover filter brightness-95 group-hover:scale-[1.02] transition-transform duration-700 ease-out">
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none"></div>

            <!-- Center Play Button -->
            <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div class="w-13 h-13 sm:w-16 sm:h-16 md:w-[72px] md:h-[72px] rounded-full bg-black/60 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-[0_4px_24px_rgba(0,0,0,0.7)] group-hover:bg-black/80 group-hover:scale-110 group-hover:border-white/60 transition-all duration-300">
                    <svg class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 fill-white text-white ml-1" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                </div>
            </div>

            <!-- Film Info Badge on bottom left -->
            <div class="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 right-4 flex items-end justify-between pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 max-w-[80%]">
                    <p id="heroFilmTitle" class="text-[11px] sm:text-xs font-semibold text-white truncate font-montserrat">
                        <?php echo htmlspecialchars($mainShowreel['title']); ?>
                    </p>
                    <p class="text-[10px] text-slate-300 font-devanagari truncate">
                        <?php echo htmlspecialchars($mainShowreel['nepaliTitle']); ?>
                    </p>
                </div>
                <div class="bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-medium text-slate-200 uppercase tracking-widest font-montserrat border border-white/10">
                    <?php echo htmlspecialchars($mainShowreel['duration']); ?>
                </div>
            </div>
        </div>
    </div>

    <!-- Category Cards (DOCUMENTARIES, COMMERCIALS, SHORT FILMS) -->
    <div class="w-full max-w-[820px] mx-auto px-4 sm:px-6 mt-1 mb-8 md:mb-12">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-4 md:gap-6 items-start">
            <?php foreach ($categories as $catKey => $cat): ?>
            <div id="card-<?php echo $catKey; ?>" onclick="selectCategory('<?php echo $catKey; ?>')" class="cat-card flex flex-col items-center group cursor-pointer transition-transform duration-300 hover:-translate-y-1">
                <div class="relative w-full aspect-[16/10] sm:aspect-[16/10.5] rounded-xl sm:rounded-2xl overflow-hidden bg-black transition-all duration-300 shadow-lg group-hover:scale-[1.01]" style="border: 2px solid <?php echo $cat['borderHex']; ?>; box-shadow: 0 4px 16px rgba(0,0,0,0.6);">
                    <img src="<?php echo htmlspecialchars($cat['thumbnail']); ?>" alt="<?php echo htmlspecialchars($cat['title']); ?>" class="w-full h-full object-cover filter brightness-[0.98] group-hover:brightness-105 group-hover:scale-105 transition-all duration-500">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity"></div>
                </div>
                <div class="flex flex-col items-center mt-2.5 sm:mt-3 text-center">
                    <h3 class="font-montserrat text-xs sm:text-[13px] md:text-sm font-extrabold tracking-[0.16em] text-white uppercase group-hover:text-slate-100 transition-colors">
                        <?php echo htmlspecialchars($cat['title']); ?>
                    </h3>
                    <p class="font-devanagari text-[11px] sm:text-xs text-slate-300/90 tracking-wider mt-0.5">
                        <?php echo htmlspecialchars($cat['devanagari']); ?>
                    </p>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>

</main>

<?php require_once __DIR__ . '/footer.php'; ?>
"""

with open(f"{OUTPUT_DIR}/index.php", "w") as f:
    f.write(index_php)

# 5. contact_handler.php
contact_php = """<?php
/**
 * Contact Submission Handler
 */
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = strip_tags(trim($_POST['name'] ?? ''));
    $email = filter_var(trim($_POST['email'] ?? ''), FILTER_SANITIZE_EMAIL);
    $message = strip_tags(trim($_POST['message'] ?? ''));

    // Optional: save to contacts.log or email using mail()
    $logEntry = date('Y-m-d H:i:s') . " | Name: $name | Email: $email | Message: $message\\n";
    @file_put_contents(__DIR__ . '/contacts.log', $logEntry, FILE_APPEND);

    // Redirect back with success message
    echo "<!DOCTYPE html><html><head><meta charset='UTF-8'><meta http-equiv='refresh' content='2;url=index.php'><script src='https://cdn.tailwindcss.com'></script></head><body class='bg-[#070a0e] text-white flex items-center justify-center min-h-screen'><div class='text-center p-8 bg-zinc-900 border border-white/20 rounded-2xl'><h2 class='text-xl font-bold mb-2'>Proposal Received</h2><p class='text-sm text-slate-400'>Thank you, $name. We will get in touch shortly.</p><p class='text-xs text-slate-500 mt-4'>Redirecting to home...</p></div></body></html>";
    exit;
}
header('Location: index.php');
exit;
"""

with open(f"{OUTPUT_DIR}/contact_handler.php", "w") as f:
    f.write(contact_php)

# 6. download.php
download_php = """<?php
/**
 * Direct file download script for the Falcha PHP Website Package
 */
$zipFile = __DIR__ . '/falcha-filmation-studio-php.zip';

if (!file_exists($zipFile)) {
    // Look in parent or assets
    $zipFile = dirname(__DIR__) . '/public/falcha-filmation-studio-php.zip';
}

if (file_exists($zipFile)) {
    header('Content-Description: File Transfer');
    header('Content-Type: application/zip');
    header('Content-Disposition: attachment; filename="falcha-filmation-studio-php.zip"');
    header('Expires: 0');
    header('Cache-Control: must-revalidate');
    header('Pragma: public');
    header('Content-Length: ' . filesize($zipFile));
    readfile($zipFile);
    exit;
} else {
    http_response_code(404);
    echo "Download package not found.";
}
"""

with open(f"{OUTPUT_DIR}/download.php", "w") as f:
    f.write(download_php)

# 7. README.md
readme_content = """# Falcha Filmation Studio - PHP Edition

A production-ready PHP implementation of the Falcha Filmation Studio website.

## Project Structure
- `index.php` - Main showcase landing page with video showreel and category gallery
- `header.php` - Global header with the custom 3D phoenix & camera emblem logo and navigation
- `footer.php` - Footer, video modal player, and slide-over panels (Services, About, Contact)
- `data.php` - Global data configuration (portfolio items, categories, studio coordinates)
- `contact_handler.php` - Form processing script with log file persistence
- `download.php` - Download utility script
- `assets/images/` - High-resolution production imagery (logo, showreel, documentaries, commercials, short films)

## How to Run Locally

### With Built-in PHP Server:
```bash
# Navigate to this project directory
cd falcha-filmation-studio-php

# Start PHP built-in web server on port 8000
php -S localhost:8000
```
Then open your browser at: `http://localhost:8000`

### With XAMPP / WAMP / MAMP:
1. Copy this folder into your `htdocs` (or `www`) directory.
2. Start Apache from the XAMPP Control Panel.
3. Visit: `http://localhost/falcha-filmation-studio-php/`

### Deployment to cPanel / Apache / Nginx:
1. Upload all files to your `public_html` directory via FTP or cPanel File Manager.
2. No database or composer installation is required—it runs natively on PHP 7.4+ or PHP 8.x!
"""

with open(f"{OUTPUT_DIR}/README.md", "w") as f:
    f.write(readme_content)

# 8. .htaccess
htaccess_content = """<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
</IfModule>

# Cache assets
<IfModule mod_expires.c>
ExpiresActive On
ExpiresByType image/jpg "access plus 1 month"
ExpiresByType image/jpeg "access plus 1 month"
ExpiresByType image/png "access plus 1 month"
</IfModule>
"""

with open(f"{OUTPUT_DIR}/.htaccess", "w") as f:
    f.write(htaccess_content)

# Zip everything into public/falcha-filmation-studio-php.zip
with zipfile.ZipFile(PUBLIC_ZIP, "w", zipfile.ZIP_DEFLATED) as zipf:
    for root, dirs, files in os.walk(OUTPUT_DIR):
        for file in files:
            file_path = os.path.join(root, file)
            arcname = os.path.relpath(file_path, OUTPUT_DIR)
            zipf.write(file_path, arcname)

print(f"Created {PUBLIC_ZIP} successfully! Size: {os.path.getsize(PUBLIC_ZIP)} bytes")
