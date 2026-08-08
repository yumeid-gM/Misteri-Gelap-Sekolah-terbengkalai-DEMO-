const episode2 = [
    { bgm: "assets/music/tema_mengelidiki.mp3", bg: "assets/images/bg/wahyu_perpus.png", speaker: "Dio", sprite: CHAR_ASSETS.dio.netral, text: "(Monolog) Perpustakaan ini cukup luas dan dipenuhi rak-rak berdebu. Meskipun auranya terasa lebih tenang dibandingkan lorong luar, Eriko rupanya tidak bisa duduk diam. Dia terus mondar-mandir mengelilingi ruangan sambil mengangkat kameranya." },
    { speaker: "Eriko", sprite: CHAR_ASSETS.eriko.senyum, text: "(Berbicara ke arah kamera ponselnya dengan gaya sok asyik) \"Yo, selamat malam semuanya yang baru gabung di live! Kita sekarang lagi ada di perpustakaan SMA Wahyusakti nih. Gelap banget guys, debunya juga tebel. Jangan lupa tap-tap layar dan share link-nya ya!\"" },
    { speaker: "Dio", sprite: CHAR_ASSETS.dio.netral, text: "(Monolog) Dinda duduk di lantai, mengamati sebuah buku tua tebal yang ditemukannya di atas meja." },
    { speaker: "Dio", sprite: CHAR_ASSETS.dio.netral, text: "(Menoleh cepat ke arah Dinda) \"Suara apa itu? Apa itu, Din?\"" },
    { speaker: "Dinda", sprite: CHAR_ASSETS.dinda.netral, text: "(Menunduk dan memungut benda kecil dari lantai, menunjukkannya pada Dio) \"Ini kunci, Dio. Jatuh dari sela-sela halaman buku ini.\"" },
    { speaker: "Eriko", spriteLeft: CHAR_ASSETS.dinda.netral, spriteRight: CHAR_ASSETS.eriko.senyum, text: "(Langsung mendekat, mengarahkan kamera ke kunci di tangan Dinda) \"Wah, wah, wah! Jangan-jangan ini kunci harta karun peninggalan kepala sekolah nih! Atau kunci ruangan rahasia yang isinya emas?\"" },
    { speaker: "Dinda", spriteLeft: CHAR_ASSETS.dinda.ngambek, spriteRight: CHAR_ASSETS.eriko.senyum, text: "(Cemberut, memukul pelan lengan Eriko dengan buku) \"Hus! Sembarangan aja kalau ngomong. Masih aja sempat-sempatnya bercanda di tempat kayak gini.\"" },
    { bgm: "assets/music/tema2.mp3", speaker: "Suara Ketukan", text: "TOK... TOK... TOK...", shake: true },
    { speaker: "Duwi", sprite: CHAR_ASSETS.duwi.takut, shake: true, text: "(Meloncat kaget, wajahnya memucat) \"A-astaga! Suara apa itu?! Siapa yang ngetuk pintu?!\"" },
    { speaker: "Raka", sprite: CHAR_ASSETS.raka.netral, text: "(Membetulkan letak kacamatanya, mencoba tetap tenang) \"Tenanglah, Duwi. Jangan panik dulu. Biar aku yang periksa ke luar.\"" },
    { speaker: "Dio", sprite: CHAR_ASSETS.dio.netral, text: "(Monolog) Raka melangkah dengan hati-hati. Ia membuka pintu perlahan, melongokkan kepalanya ke arah lorong yang gelap gulita. Beberapa detik yang menegangkan berlalu." },
    { speaker: "Raka", sprite: CHAR_ASSETS.raka.netral, text: "(Berbalik menghadap kami dari balik pintu terbuka) \"Tidak ada apa-apa di luar. Mungkin cuma angin atau kayu tua yang berderit.\"" },
    { speaker: "Duwi", sprite: CHAR_ASSETS.duwi.takut, text: "(Mulai menangis pelan, memeluk lututnya) \"Aduh... aku mau pulang aja, guys... Mending pulang yuk sekarang! Aku bener-bener udah gak kuat lagi ada di sini!\"" },
    { speaker: "Eriko", sprite: CHAR_ASSETS.eriko.netral, text: "\"Aduh, Wi, jangan gitu dong. Kita kan baru aja masuk nih, masa langsung pulang? Nanggung banget, viewers lagi naik nih!\"" },
    { stopBgm: true, speaker: "Dio", sprite: CHAR_ASSETS.dio.netral, text: "(Monolog) [Keheningan total]. Saat Raka hendak melangkah kembali masuk ke dalam perpustakaan, di belakang punggungnya—di lorong gelap itu—lewatlah sesuatu. Sebuah bayangan hitam yang sangat besar, dengan sepasang mata merah menyala yang menatap sekilas ke arah kami, sebelum menghilang di telan kegelapan. Jelas sekali." },
    { bgm: "assets/music/alam_gaib.mp3", speaker: "Elisa", sprite: CHAR_ASSETS.elisa.takut, shake: true, text: "(Menjerit histeris, langsung menutup wajahnya dengan kedua tangan) \"AAAAAAA!!\"" },
    { speaker: "Dio", spriteLeft: CHAR_ASSETS.dio.takut, spriteRight: CHAR_ASSETS.elisa.takut, shake: true, text: "(Kaget luar biasa, maju selangkah) \"Ada apa, Sa?! Kamu kenapa?!\"" },
    { speaker: "Elisa", spriteLeft: CHAR_ASSETS.dio.takut, spriteRight: CHAR_ASSETS.elisa.takut, text: "(Gemetar hebat, suaranya terputus-putus) \"Di... di...\"" },
    { speaker: "Eriko", sprite: CHAR_ASSETS.eriko.netral, text: "(Mengerutkan dahi kebingungan) \"Di... di... apa? Di Dinda?\"" },
    { speaker: "Elisa", sprite: CHAR_ASSETS.elisa.takut, shake: true, text: "(Menangis ketakutan, menunjuk ke arah pintu) \"Di belakang Raka! Aku melihatnya! Besar... hitam... matanya merah...!\"" },
    { speaker: "Raka", sprite: CHAR_ASSETS.raka.marah, text: "(Langsung menoleh cepat ke belakang, mengayunkan senternya) \"Besar hitam apa sih, Elisa? Gak ada apa-apa lho di sini. Lorongnya kosong.\"" },
    { speaker: "Dinda", spriteLeft: CHAR_ASSETS.dinda.takut, spriteRight: CHAR_ASSETS.elisa.takut, text: "(Memeluk Elisa, mencoba menenangkan meski wajahnya sendiri terlihat sangat ketakutan) \"Udah, Sa, udah... kita bareng-bareng kok...\"" },
    { speaker: "Duwi", sprite: CHAR_ASSETS.duwi.takut, shake: true, text: "(Gelisah, menggigit jari-jarinya) \"Tuh kan! Tuh kan! Ada yang gak beres! Pulang ayooo!\"" },
    { speaker: "Dio", sprite: CHAR_ASSETS.dio.netral, text: "(Berusaha mengambil alih situasi) \"Semuanya tenang! Baiklah, kita pindah ruangan saja. Jangan berdiam di satu tempat. Dinda, bawa kuncinya. Siapa tahu nanti kita butuh itu untuk keluar atau membuka sesuatu.\"" },
    
    // --- FITUR CHECKPOINT DIMULAI DI SINI ---
    { isCheckpoint: true }, 
    { bgm: "assets/music/tema2.mp3", speaker: "Dinda", sprite: CHAR_ASSETS.dinda.takut, text: "(Menatap kunci berkarat di tangannya dengan gemetar) \"A-aku takut, Dio. Barang dari tempat ini auranya nggak enak. Gimana nih?\"", choices: [
        { text: "Simpan kuncinya. Kita pasti butuh nanti. (Beresiko)", jump: "bawa_kunci", setVar: { key: "punya_kunci", value: "true" } },
        { text: "Buang saja! Benda itu mungkin pembawa sial!", jump: "buang_kunci", setVar: { key: "punya_kunci", value: "false" } }
    ]},

    // CABANG 1: BAWA KUNCI (Jumpscare)
    { id: "bawa_kunci", speaker: "Dio", sprite: CHAR_ASSETS.dio.netral, text: "\"Simpan saja, Din. Masukkan ke sakumu rapat-rapat. Firasatku bilang kita bakal butuh kunci itu untuk keluar nanti.\"" },
    { jumpscare: true, speaker: "Dinda", sprite: CHAR_ASSETS.dinda.takut, shake: true, text: "(Memasukkan kunci ke sakunya, namun tiba-tiba sesuatu menggedor keras kaca jendela tepat di sebelahnya!) \"HWAAAAA!\"" },
    { speaker: "Duwi", sprite: CHAR_ASSETS.duwi.takut, shake: true, text: "(Melompat memeluk Raka) \"ASTAGA! APA ITU DI JENDELA?!\"" },
    { speaker: "Dio", sprite: CHAR_ASSETS.dio.takut, text: "(Monolog) Sesuatu dengan wajah hancur baru saja menempel di kaca jendela sedetik yang lalu sebelum menghilang. Jantungku berpacu gila-gilaan." },
    { speaker: "Dinda", sprite: CHAR_ASSETS.dinda.takut, text: "(Menangis pelan) \"Kuncinya... kuncinya sudah kusimpan, Dio. Ayo kita cepat pergi dari ruangan ini!\"", jump: "lanjut_lorong" },

    // CABANG 2: BUANG KUNCI (Tanpa Jumpscare)
    { id: "buang_kunci", speaker: "Dio", sprite: CHAR_ASSETS.dio.netral, text: "\"Kamu benar, Din. Buang saja. Benda berkarat dari sekolah terkutuk ini lebih baik nggak usah dibawa-bawa.\"" },
    { speaker: "Dinda", sprite: CHAR_ASSETS.dinda.netral, text: "(Melempar kunci itu kuat-kuat ke sudut gelap perpustakaan) \"Udah! Aku buang! Ayo kita pergi dari sini!\"" },
    { speaker: "Dio", sprite: CHAR_ASSETS.dio.netral, text: "(Monolog) Kunci tua itu berdenting jauh di dalam kegelapan perpustakaan. Tidak ada hal aneh yang terjadi. Kami semua menghela napas lega sesaat.", jump: "lanjut_lorong" },

    // MERGE POINT: KELUAR PERPUSTAKAAN
    { id: "lanjut_lorong", bgm: "assets/music/alam_gaib.mp3", bg: "assets/images/bg/wahyu_koridor.png", speaker: "Dio", sprite: CHAR_ASSETS.dio.netral, text: "(Monolog) Kami segera keluar dari perpustakaan dan kembali menyusuri lorong. Tak jauh dari sana, kami menemukan sebuah pintu yang terbuka separuh. Ada tulisan pudar di atasnya: 'RUANG GURU'." },
    { speaker: "Elisa", sprite: CHAR_ASSETS.elisa.takut, text: "(Langkahnya terhenti, memegangi kepalanya) \"Aku merasa... ada sesuatu di sini. Di dalam ruangan ini.\"" },
    { speaker: "Dio", sprite: CHAR_ASSETS.dio.netral, text: "(Menatap teman-temannya dengan tegas) \"Semuanya, dengar. Kita jangan sampai terpisah ya. Jangan sampai lalai dan terus waspada.\"" },
    { speaker: "Eriko", sprite: CHAR_ASSETS.eriko.marah, text: "(Melihat ponselnya dengan kesal) \"Loh? Kok tiba-tiba begini sih?! HP-ku mati total! Padahal lagi dicolok ke power bank!\"" },
    { speaker: "Duwi", sprite: CHAR_ASSETS.duwi.takut, shake: true, text: "(Panik menggoyangkan senternya) \"Senterku! Senterku kenapa kedip-kedip begini?!\"" },
    { speaker: "Dio", sprite: CHAR_ASSETS.dio.netral, text: "(Monolog) Suasana langsung berubah drastis. Elisa terus memegangi kepalanya yang pusing, Duwi menangis ketakutan karena senternya yang nyaris mati, Dinda panik dan memeluk lenganku erat-erat, sementara Raka yang biasanya logis kini terlihat tidak nyaman dan terus mengawasi sekitar." },
    { speaker: "Eriko", sprite: CHAR_ASSETS.eriko.takut, text: "(Mengusap tengkuknya, wajah sok beraninya mulai luntur) \"Aduh... kok jadi begini sih? Bulu kudukku mulai merinding nih...\"" },
    { speaker: "Raka", sprite: CHAR_ASSETS.raka.netral, text: "(Menatap Dio dengan serius) \"Dio, kurasa kali ini firasat mereka benar. Cepat, ayo kita kembali ke arah pintu depan.\"" },
    { bgm: "assets/music/tema3.mp3", speaker: "Dio", sprite: CHAR_ASSETS.dio.netral, text: "\"Iya, kita putar balik! Raka, cepat gendong Elisa di punggungmu, dia sudah lemas!\"" },
    { speaker: "Dio", sprite: CHAR_ASSETS.dio.netral, text: "(Monolog) Kami berlari. Perasaan ngeri merayapi tengkuk kami, seakan ada sesuatu yang sangat dingin dan besar sedang mendekat dari belakang. Kami menyusuri koridor, berbelok, dan terus berlari tanpa menoleh. Namun..." },
    { speaker: "Dio", sprite: CHAR_ASSETS.dio.takut, text: "(Menghentikan langkah secara mendadak) \"Tunggu... ini... ini kan...\"" },
    { speaker: "Raka", sprite: CHAR_ASSETS.raka.takut, text: "(Napasnya tersengal-sengal) \"Ruang Guru... Kenapa kita sampai di sini lagi? Kita kan lari lurus ke depan!\"" },
    { speaker: "Dio", sprite: CHAR_ASSETS.dio.takut, shake: true, text: "\"Lari lagi! Ayo, jangan berhenti!\"" },
    { speaker: "Eriko", sprite: CHAR_ASSETS.eriko.takut, text: "(Frustasi dan ketakutan) \"Sialan! Kenapa balik ke sini lagi?! Eh, gelap sekali sih! Duwi, nyalakan senternya dong! Jangan dimatiin!\"" },
    { speaker: "Eriko", sprite: CHAR_ASSETS.eriko.takut, text: "\"Woy, Duwi!\"" },
    { speaker: "Dio", sprite: CHAR_ASSETS.dio.netral, text: "(Monolog) Jantungku berdegup kencang. Aku segera menoleh ke belakang, menyodorkan cahaya senterku." },
    { bgm: "assets/music/tema_momen_sedih.mp3", speaker: "Dio", sprite: CHAR_ASSETS.dio.takut, text: "(Terbelalak ngeri) \"Loh... Duwi mana?\"" },
    { speaker: "Dio", sprite: CHAR_ASSETS.dio.netral, text: "(Monolog) Dinda, Eriko, dan Raka menoleh ke belakang dengan wajah kaget luar biasa." },
    { speaker: "Dio", sprite: CHAR_ASSETS.dio.takut, text: "(Monolog) Di belakang kami, lorong itu kosong melompong. Tidak ada tanda-tanda keberadaan Duwi. Teman kami itu menghilang entah ke mana, tanpa suara sama sekali.\"" },
    { endEpisode: true }
];
