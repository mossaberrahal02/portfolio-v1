// Language translations
const translations = {
    en: {
        // Navigation
        home: "Home",
        about: "About",
        projects: "Projects",
        skills: "Skills",
        contact: "Contact",
        
        // Hero Section
        heroTitle: "ERRAHAL MOSSAB",
        heroSubtitle: "Master's Student in AI & Cyber Security",
        heroDescription: "2nd year Master's student passionate about Artificial Intelligence and Cyber Security. Graduate of 1337 School with expertise in systems programming and software development.",
        viewProjects: "View Projects",
        getInTouch: "Get In Touch",
        
        // About Section
        aboutTitle: "About Me",
        aboutP1: "I am a dedicated 2nd year Master's student specializing in Artificial Intelligence and Cyber Security. As a proud graduate of 1337 School (part of the prestigious 42 School network), I have developed strong foundations in systems programming, algorithms, and software engineering.",
        aboutP2: "My journey through 1337 School's peer-to-peer learning environment has equipped me with problem-solving skills, collaboration abilities, and a deep understanding of computer science fundamentals. I'm passionate about creating efficient solutions and exploring the intersection of AI and security.",
        education: "Education",
        mastersDegree: "Master's in Artificial Intelligence & Cyber Security",
        mastersStatus: "2nd Year Student | Currently Pursuing",
        schoolDegree: "1337 School (42 Network)",
        schoolStatus: "Graduate | Systems Programming & Software Engineering",
        
        // Projects Section
        projectsTitle: "1337 School Projects",
        
        // Individual Projects
        libftTitle: "Libft",
        libftTag: "C Library",
        libftDescription: "Custom C library implementation - recreated standard C library functions from scratch, forming the foundation for all subsequent projects.",
        
        ftPrintfTitle: "ft_printf",
        ftPrintfTag: "System Programming",
        ftPrintfDescription: "Custom printf function implementation with support for various format specifiers, teaching low-level output formatting.",
        
        getNextLineTitle: "get_next_line",
        getNextLineTag: "File I/O",
        getNextLineDescription: "Efficient file reading utility that reads files line by line, handling multiple file descriptors and memory optimization.",
        
        born2berootTitle: "Born2beroot",
        born2berootTag: "System Administration",
        born2berootDescription: "Virtual machine setup and configuration with strict security rules, learning system administration and security practices.",
        
        soLongTitle: "so_long",
        soLongTag: "Game Development",
        soLongDescription: "2D game created using MiniLibX graphics library, implementing game logic, sprite management, and user interaction.",
        
        pushSwapTitle: "push_swap",
        pushSwapTag: "Algorithms",
        pushSwapDescription: "Efficient sorting algorithm implementation using two stacks, optimizing for minimal operations and algorithmic complexity.",
        
        pipexTitle: "pipex",
        pipexTag: "System Programming",
        pipexDescription: "Shell pipeline recreation implementing pipe functionality, process communication, and command execution in C.",
        
        minishellTitle: "minishell",
        minishellTag: "Shell Implementation",
        minishellDescription: "Functional shell with command parsing, execution, built-in commands, and environment variable management.",
        
        philosophersTitle: "philosophers",
        philosophersTag: "Concurrency",
        philosophersDescription: "Solution to the dining philosophers problem using threads and synchronization primitives to avoid deadlocks.",
        
        cub3dTitle: "cub3d",
        cub3dTag: "3D Graphics",
        cub3dDescription: "3D raycasting engine creating a dynamic 3D view from a 2D map, implementing mathematical concepts and graphics programming.",
        
        ftContainersTitle: "ft_containers",
        ftContainersTag: "C++ STL",
        ftContainersDescription: "Implementation of C++ Standard Template Library containers including vector, map, stack, and set with full STL compliance.",
        
        webservTitle: "webserv",
        webservTag: "Web Server",
        webservDescription: "Fully functional HTTP/1.1 server built from scratch with support for multiple methods, CGI, and configuration files.",
        
        ftTranscendenceTitle: "ft_transcendence",
        ftTranscendenceTag: "Full-Stack Web App",
        ftTranscendenceDescription: "Complete web application with real-time features, user authentication, and interactive gaming components.",
        
        inceptionTitle: "Inception",
        inceptionTag: "DevOps",
        inceptionDescription: "Complex multi-service application containerization using Docker, implementing microservices architecture and orchestration.",
        
        ftIrcTitle: "ft_irc",
        ftIrcTag: "Network Protocol",
        ftIrcDescription: "Complete IRC server implementation following RFC specifications with channel management and user authentication.",
        
        // Skills Section
        skillsTitle: "Technical Skills",
        programmingLanguages: "Programming Languages",
        systemsTools: "Systems & Tools",
        coreConcepts: "Core Concepts",
        specializations: "Specializations",
        
        // Individual Skills
        // Programming Languages
        cSkill: "C",
        cppSkill: "C++",
        pythonSkill: "Python",
        javascriptSkill: "JavaScript",
        htmlSkill: "HTML",
        cssSkill: "CSS",
        
        // Systems & Tools
        linuxSkill: "Linux",
        dockerSkill: "Docker",
        gitSkill: "Git",
        makeSkill: "Make",
        shellScriptingSkill: "Shell Scripting",
        virtualMachinesSkill: "Virtual Machines",
        
        // Core Concepts
        algorithmsSkill: "Algorithms",
        dataStructuresSkill: "Data Structures",
        systemAdministrationSkill: "System Administration",
        networkProgrammingSkill: "Network Programming",
        threeDGraphicsSkill: "3D Graphics",
        webDevelopmentSkill: "Web Development",
        
        // Specializations
        artificialIntelligenceSkill: "Artificial Intelligence",
        cyberSecuritySkill: "Cyber Security",
        concurrentProgrammingSkill: "Concurrent Programming",
        memoryManagementSkill: "Memory Management",
        protocolImplementationSkill: "Protocol Implementation",
        softwareArchitectureSkill: "Software Architecture",
        
        // Contact Section
        contactTitle: "Get In Touch",
        contactText: "I'm always interested in discussing new opportunities, collaborating on interesting projects, or connecting with fellow developers and researchers in AI and Cyber Security.",
        letsConnect: "Let's Connect",
        contactDescription: "Feel free to reach out for collaborations, questions about my projects, or just to say hello!",
        email: "Email",
        github: "GitHub",
        linkedin: "LinkedIn",
        
        // Footer
        footerText: "© 2025 ERRAHAL MOSSAB. All rights reserved."
    },
    
    fr: {
        // Navigation
        home: "Accueil",
        about: "À propos",
        projects: "Projets",
        skills: "Compétences",
        contact: "Contact",
        
        // Hero Section
        heroTitle: "ERRAHAL MOSSAB",
        heroSubtitle: "Étudiant en Master IA & Cybersécurité",
        heroDescription: "Étudiant en 2ème année de Master passionné par l'Intelligence Artificielle et la Cybersécurité. Diplômé de l'école 1337 avec une expertise en programmation système et développement logiciel.",
        viewProjects: "Voir les Projets",
        getInTouch: "Me Contacter",
        
        // About Section
        aboutTitle: "À Propos de Moi",
        aboutP1: "Je suis un étudiant dévoué en 2ème année de Master spécialisé en Intelligence Artificielle et Cybersécurité. En tant que fier diplômé de l'école 1337 (faisant partie du prestigieux réseau 42), j'ai développé de solides fondations en programmation système, algorithmes et ingénierie logicielle.",
        aboutP2: "Mon parcours dans l'environnement d'apprentissage par les pairs de l'école 1337 m'a doté de compétences en résolution de problèmes, de capacités de collaboration et d'une compréhension approfondie des fondamentaux de l'informatique. Je suis passionné par la création de solutions efficaces et l'exploration de l'intersection entre l'IA et la sécurité.",
        education: "Formation",
        mastersDegree: "Master en Intelligence Artificielle & Cybersécurité",
        mastersStatus: "Étudiant 2ème année | En cours",
        schoolDegree: "École 1337 (Réseau 42)",
        schoolStatus: "Diplômé | Programmation Système & Ingénierie Logicielle",
        
        // Projects Section
        projectsTitle: "Projets École 1337",
        
        // Individual Projects
        libftTitle: "Libft",
        libftTag: "Bibliothèque C",
        libftDescription: "Implémentation de bibliothèque C personnalisée - recréation des fonctions de la bibliothèque C standard à partir de zéro, formant la base de tous les projets suivants.",
        
        ftPrintfTitle: "ft_printf",
        ftPrintfTag: "Programmation Système",
        ftPrintfDescription: "Implémentation de fonction printf personnalisée avec support de divers spécificateurs de format, enseignant le formatage de sortie de bas niveau.",
        
        getNextLineTitle: "get_next_line",
        getNextLineTag: "E/S Fichier",
        getNextLineDescription: "Utilitaire de lecture de fichier efficace qui lit les fichiers ligne par ligne, gérant plusieurs descripteurs de fichiers et l'optimisation mémoire.",
        
        born2berootTitle: "Born2beroot",
        born2berootTag: "Administration Système",
        born2berootDescription: "Configuration et installation de machine virtuelle avec des règles de sécurité strictes, apprentissage de l'administration système et des pratiques de sécurité.",
        
        soLongTitle: "so_long",
        soLongTag: "Développement Jeu",
        soLongDescription: "Jeu 2D créé avec la bibliothèque graphique MiniLibX, implémentant la logique de jeu, la gestion des sprites et l'interaction utilisateur.",
        
        pushSwapTitle: "push_swap",
        pushSwapTag: "Algorithmes",
        pushSwapDescription: "Implémentation d'algorithme de tri efficace utilisant deux piles, optimisant pour un minimum d'opérations et la complexité algorithmique.",
        
        pipexTitle: "pipex",
        pipexTag: "Programmation Système",
        pipexDescription: "Recréation de pipeline shell implémentant la fonctionnalité de pipe, communication de processus et exécution de commandes en C.",
        
        minishellTitle: "minishell",
        minishellTag: "Implémentation Shell",
        minishellDescription: "Shell fonctionnel avec analyse de commandes, exécution, commandes intégrées et gestion des variables d'environnement.",
        
        philosophersTitle: "philosophers",
        philosophersTag: "Concurrence",
        philosophersDescription: "Solution au problème des philosophes dîneurs utilisant des threads et des primitives de synchronisation pour éviter les blocages.",
        
        cub3dTitle: "cub3d",
        cub3dTag: "Graphiques 3D",
        cub3dDescription: "Moteur de raycasting 3D créant une vue 3D dynamique à partir d'une carte 2D, implémentant des concepts mathématiques et la programmation graphique.",
        
        ftContainersTitle: "ft_containers",
        ftContainersTag: "STL C++",
        ftContainersDescription: "Implémentation des conteneurs de la Standard Template Library C++ incluant vector, map, stack et set avec conformité STL complète.",
        
        webservTitle: "webserv",
        webservTag: "Serveur Web",
        webservDescription: "Serveur HTTP/1.1 entièrement fonctionnel construit à partir de zéro avec support de multiples méthodes, CGI et fichiers de configuration.",
        
        ftTranscendenceTitle: "ft_transcendence",
        ftTranscendenceTag: "App Web Full-Stack",
        ftTranscendenceDescription: "Application web complète avec fonctionnalités en temps réel, authentification utilisateur et composants de jeu interactifs.",
        
        inceptionTitle: "Inception",
        inceptionTag: "DevOps",
        inceptionDescription: "Conteneurisation d'application multi-services complexe utilisant Docker, implémentant l'architecture microservices et l'orchestration.",
        
        ftIrcTitle: "ft_irc",
        ftIrcTag: "Protocole Réseau",
        ftIrcDescription: "Implémentation complète de serveur IRC suivant les spécifications RFC avec gestion de canaux et authentification utilisateur.",
        
        // Skills Section
        skillsTitle: "Compétences Techniques",
        programmingLanguages: "Langages de Programmation",
        systemsTools: "Systèmes & Outils",
        coreConcepts: "Concepts Fondamentaux",
        specializations: "Spécialisations",
        
        // Individual Skills
        // Programming Languages
        cSkill: "C",
        cppSkill: "C++",
        pythonSkill: "Python",
        javascriptSkill: "JavaScript",
        htmlSkill: "HTML",
        cssSkill: "CSS",
        
        // Systems & Tools
        linuxSkill: "Linux",
        dockerSkill: "Docker",
        gitSkill: "Git",
        makeSkill: "Make",
        shellScriptingSkill: "Scripts Shell",
        virtualMachinesSkill: "Machines Virtuelles",
        
        // Core Concepts
        algorithmsSkill: "Algorithmes",
        dataStructuresSkill: "Structures de Données",
        systemAdministrationSkill: "Administration Système",
        networkProgrammingSkill: "Programmation Réseau",
        threeDGraphicsSkill: "Graphiques 3D",
        webDevelopmentSkill: "Développement Web",
        
        // Specializations
        artificialIntelligenceSkill: "Intelligence Artificielle",
        cyberSecuritySkill: "Cybersécurité",
        concurrentProgrammingSkill: "Programmation Concurrente",
        memoryManagementSkill: "Gestion Mémoire",
        protocolImplementationSkill: "Implémentation Protocoles",
        softwareArchitectureSkill: "Architecture Logicielle",
        
        // Contact Section
        contactTitle: "Me Contacter",
        contactText: "Je suis toujours intéressé à discuter de nouvelles opportunités, collaborer sur des projets intéressants, ou me connecter avec d'autres développeurs et chercheurs en IA et Cybersécurité.",
        letsConnect: "Connectons-nous",
        contactDescription: "N'hésitez pas à me contacter pour des collaborations, des questions sur mes projets, ou simplement pour dire bonjour!",
        email: "Email",
        github: "GitHub",
        linkedin: "LinkedIn",
        
        // Footer
        footerText: "© 2025 ERRAHAL MOSSAB. Tous droits réservés."
    },
    
    ar: {
        // Navigation
        home: "الرئيسية",
        about: "نبذة عني",
        projects: "المشاريع",
        skills: "المهارات",
        contact: "التواصل",
        
        // Hero Section
        heroTitle: "ارحال مصعب",
        heroSubtitle: "طالب ماجستير في الذكاء الاصطناعي والأمن السيبراني",
        heroDescription: "طالب في السنة الثانية من الماجستير شغوف بالذكاء الاصطناعي والأمن السيبراني. خريج مدرسة 1337 مع خبرة في برمجة الأنظمة وتطوير البرمجيات.",
        viewProjects: "عرض المشاريع",
        getInTouch: "تواصل معي",
        
        // About Section
        aboutTitle: "نبذة عني",
        aboutP1: "أنا طالب مخلص في السنة الثانية من الماجستير متخصص في الذكاء الاصطناعي والأمن السيبراني. كخريج فخور من مدرسة 1337 (جزء من شبكة 42 المرموقة)، طورت أسساً قوية في برمجة الأنظمة والخوارزميات وهندسة البرمجيات.",
        aboutP2: "رحلتي عبر بيئة التعلم التشاركي في مدرسة 1337 زودتني بمهارات حل المشاكل وقدرات التعاون وفهم عميق لأساسيات علوم الحاسوب. أنا شغوف بإنشاء حلول فعالة واستكشاف تقاطع الذكاء الاصطناعي والأمان.",
        education: "التعليم",
        mastersDegree: "ماجستير في الذكاء الاصطناعي والأمن السيبراني",
        mastersStatus: "طالب السنة الثانية | قيد الدراسة",
        schoolDegree: "مدرسة 1337 (شبكة 42)",
        schoolStatus: "خريج | برمجة الأنظمة وهندسة البرمجيات",
        
        // Projects Section
        projectsTitle: "مشاريع مدرسة 1337",
        
        // Individual Projects
        libftTitle: "Libft",
        libftTag: "مكتبة C",
        libftDescription: "تنفيذ مكتبة C مخصصة - إعادة إنشاء وظائف مكتبة C القياسية من الصفر، لتشكل أساس جميع المشاريع اللاحقة.",
        
        ftPrintfTitle: "ft_printf",
        ftPrintfTag: "برمجة النظام",
        ftPrintfDescription: "تنفيذ دالة printf مخصصة مع دعم محددات تنسيق متنوعة، تعليم تنسيق الإخراج منخفض المستوى.",
        
        getNextLineTitle: "get_next_line",
        getNextLineTag: "إدخال/إخراج الملفات",
        getNextLineDescription: "أداة قراءة الملفات الفعالة التي تقرأ الملفات سطراً بسطر، مع التعامل مع واصفات ملفات متعددة وتحسين الذاكرة.",
        
        born2berootTitle: "Born2beroot",
        born2berootTag: "إدارة النظام",
        born2berootDescription: "إعداد وتكوين آلة افتراضية مع قواعد أمان صارمة، تعلم إدارة النظام وممارسات الأمان.",
        
        soLongTitle: "so_long",
        soLongTag: "تطوير الألعاب",
        soLongDescription: "لعبة ثنائية الأبعاد منشأة باستخدام مكتبة MiniLibX الرسومية، تنفيذ منطق اللعبة وإدارة الرموز والتفاعل مع المستخدم.",
        
        pushSwapTitle: "push_swap",
        pushSwapTag: "الخوارزميات",
        pushSwapDescription: "تنفيذ خوارزمية فرز فعالة باستخدام مكدسين، تحسين لأقل عمليات والتعقد الخوارزمي.",
        
        pipexTitle: "pipex",
        pipexTag: "برمجة النظام",
        pipexDescription: "إعادة إنشاء خط أنابيب الشل لتنفيذ وظيفة الأنبوب، اتصال العمليات وتنفيذ الأوامر في C.",
        
        minishellTitle: "minishell",
        minishellTag: "تنفيذ الشل",
        minishellDescription: "شل وظيفي مع تحليل الأوامر والتنفيذ والأوامر المدمجة وإدارة متغيرات البيئة.",
        
        philosophersTitle: "philosophers",
        philosophersTag: "التزامن",
        philosophersDescription: "حل لمشكلة الفلاسفة المتناولين باستخدام الخيوط ومتزامنات التزامن لتجنب التوقف المتبادل.",
        
        cub3dTitle: "cub3d",
        cub3dTag: "الرسومات ثلاثية الأبعاد",
        cub3dDescription: "محرك إرسال الأشعة ثلاثي الأبعاد ينشئ منظر ثلاثي الأبعاد ديناميكي من خريطة ثنائية الأبعاد، تنفيذ المفاهيم الرياضية والبرمجة الرسومية.",
        
        ftContainersTitle: "ft_containers",
        ftContainersTag: "STL C++",
        ftContainersDescription: "تنفيذ حاويات مكتبة القوالب القياسية لـ C++ بما في ذلك vector و map و stack و set مع امتثال STL كامل.",
        
        webservTitle: "webserv",
        webservTag: "خادم الويب",
        webservDescription: "خادم HTTP/1.1 وظيفي بالكامل مبني من الصفر مع دعم طرق متعددة و CGI وملفات التكوين.",
        
        ftTranscendenceTitle: "ft_transcendence",
        ftTranscendenceTag: "تطبيق ويب متكامل",
        ftTranscendenceDescription: "تطبيق ويب كامل مع ميزات الوقت الفعلي ومصادقة المستخدم ومكونات الألعاب التفاعلية.",
        
        inceptionTitle: "Inception",
        inceptionTag: "DevOps",
        inceptionDescription: "حاوية تطبيق متعدد الخدمات معقد باستخدام Docker، تنفيذ هندسة الخدمات المصغرة والتنسيق.",
        
        ftIrcTitle: "ft_irc",
        ftIrcTag: "بروتوكول الشبكة",
        ftIrcDescription: "تنفيذ خادم IRC كامل يتبع مواصفات RFC مع إدارة القنوات ومصادقة المستخدم.",
        
        // Skills Section
        skillsTitle: "المهارات التقنية",
        programmingLanguages: "لغات البرمجة",
        systemsTools: "الأنظمة والأدوات",
        coreConcepts: "المفاهيم الأساسية",
        specializations: "التخصصات",
        
        // Individual Skills
        // Programming Languages
        cSkill: "C",
        cppSkill: "C++",
        pythonSkill: "Python",
        javascriptSkill: "JavaScript",
        htmlSkill: "HTML",
        cssSkill: "CSS",
        
        // Systems & Tools
        linuxSkill: "Linux",
        dockerSkill: "Docker",
        gitSkill: "Git",
        makeSkill: "Make",
        shellScriptingSkill: "برمجة الشل",
        virtualMachinesSkill: "الآلات الافتراضية",
        
        // Core Concepts
        algorithmsSkill: "الخوارزميات",
        dataStructuresSkill: "هياكل البيانات",
        systemAdministrationSkill: "إدارة النظام",
        networkProgrammingSkill: "برمجة الشبكات",
        threeDGraphicsSkill: "الرسومات ثلاثية الأبعاد",
        webDevelopmentSkill: "تطوير الويب",
        
        // Specializations
        artificialIntelligenceSkill: "الذكاء الاصطناعي",
        cyberSecuritySkill: "الأمن السيبراني",
        concurrentProgrammingSkill: "البرمجة المتزامنة",
        memoryManagementSkill: "إدارة الذاكرة",
        protocolImplementationSkill: "تنفيذ البروتوكولات",
        softwareArchitectureSkill: "هندسة البرمجيات",
        
        // Contact Section
        contactTitle: "تواصل معي",
        contactText: "أنا دائماً مهتم بمناقشة الفرص الجديدة والتعاون في مشاريع مثيرة للاهتمام أو التواصل مع المطورين والباحثين في مجال الذكاء الاصطناعي والأمن السيبراني.",
        letsConnect: "لنتواصل",
        contactDescription: "لا تتردد في التواصل للتعاون أو الأسئلة حول مشاريعي أو حتى لمجرد السلام!",
        email: "البريد الإلكتروني",
        github: "جيت هاب",
        linkedin: "لينكد إن",
        
        // Footer
        footerText: "© 2025 ارحال مصعب. جميع الحقوق محفوظة."
    },
    
    de: {
        // Navigation
        home: "Startseite",
        about: "Über mich",
        projects: "Projekte",
        skills: "Fähigkeiten",
        contact: "Kontakt",
        
        // Hero Section
        heroTitle: "ERRAHAL MOSSAB",
        heroSubtitle: "Master-Student in KI & Cybersicherheit",
        heroDescription: "Student im 2. Jahr des Masters mit Leidenschaft für Künstliche Intelligenz und Cybersicherheit. Absolvent der 1337 Schule mit Expertise in Systemprogrammierung und Softwareentwicklung.",
        viewProjects: "Projekte ansehen",
        getInTouch: "Kontakt aufnehmen",
        
        // About Section
        aboutTitle: "Über mich",
        aboutP1: "Ich bin ein engagierter Master-Student im 2. Jahr mit Spezialisierung auf Künstliche Intelligenz und Cybersicherheit. Als stolzer Absolvent der 1337 Schule (Teil des renommierten 42-Netzwerks) habe ich starke Grundlagen in Systemprogrammierung, Algorithmen und Software-Engineering entwickelt.",
        aboutP2: "Meine Reise durch die Peer-to-Peer-Lernumgebung der 1337 Schule hat mich mit Problemlösungsfähigkeiten, Zusammenarbeitsfähigkeiten und einem tiefen Verständnis der Informatik-Grundlagen ausgestattet. Ich bin leidenschaftlich daran interessiert, effiziente Lösungen zu schaffen und die Schnittstelle zwischen KI und Sicherheit zu erforschen.",
        education: "Bildung",
        mastersDegree: "Master in Künstliche Intelligenz & Cybersicherheit",
        mastersStatus: "2. Jahr Student | Derzeit studierend",
        schoolDegree: "1337 Schule (42 Netzwerk)",
        schoolStatus: "Absolvent | Systemprogrammierung & Software-Engineering",
        
        // Projects Section
        projectsTitle: "1337 Schule Projekte",
        
        // Individual Projects
        libftTitle: "Libft",
        libftTag: "C Bibliothek",
        libftDescription: "Benutzerdefinierte C-Bibliothek-Implementierung - Standard-C-Bibliotheksfunktionen von Grund auf neu erstellt, bildet die Grundlage für alle nachfolgenden Projekte.",
        
        ftPrintfTitle: "ft_printf",
        ftPrintfTag: "Systemprogrammierung",
        ftPrintfDescription: "Benutzerdefinierte printf-Funktionsimplementierung mit Unterstützung verschiedener Formatspezifizierer, lehrt low-level Ausgabeformatierung.",
        
        getNextLineTitle: "get_next_line",
        getNextLineTag: "Datei E/A",
        getNextLineDescription: "Effizientes Dateilesewerkzeug, das Dateien Zeile für Zeile liest und mehrere Dateideskriptoren und Speicheroptimierung behandelt.",
        
        born2berootTitle: "Born2beroot",
        born2berootTag: "Systemadministration",
        born2berootDescription: "Einrichtung und Konfiguration virtueller Maschinen mit strengen Sicherheitsregeln, Erlernen von Systemadministration und Sicherheitspraktiken.",
        
        soLongTitle: "so_long",
        soLongTag: "Spielentwicklung",
        soLongDescription: "2D-Spiel erstellt mit MiniLibX-Grafikbibliothek, Implementierung von Spiellogik, Sprite-Management und Benutzerinteraktion.",
        
        pushSwapTitle: "push_swap",
        pushSwapTag: "Algorithmen",
        pushSwapDescription: "Effiziente Sortieralgorithmus-Implementierung mit zwei Stapeln, Optimierung für minimale Operationen und algorithmische Komplexität.",
        
        pipexTitle: "pipex",
        pipexTag: "Systemprogrammierung",
        pipexDescription: "Shell-Pipeline-Nachbildung implementiert Pipe-Funktionalität, Prozesskommunikation und Befehlsausführung in C.",
        
        minishellTitle: "minishell",
        minishellTag: "Shell-Implementierung",
        minishellDescription: "Funktionsfähige Shell mit Befehlsanalyse, Ausführung, eingebauten Befehlen und Umgebungsvariablenverwaltung.",
        
        philosophersTitle: "philosophers",
        philosophersTag: "Nebenläufigkeit",
        philosophersDescription: "Lösung für das Philosophenproblem mit Threads und Synchronisationsprimitiven zur Vermeidung von Deadlocks.",
        
        cub3dTitle: "cub3d",
        cub3dTag: "3D-Grafiken",
        cub3dDescription: "3D-Raycasting-Engine erstellt dynamische 3D-Ansicht aus 2D-Karte, implementiert mathematische Konzepte und Grafikprogrammierung.",
        
        ftContainersTitle: "ft_containers",
        ftContainersTag: "C++ STL",
        ftContainersDescription: "Implementierung von C++ Standard Template Library Containern einschließlich vector, map, stack und set mit vollständiger STL-Konformität.",
        
        webservTitle: "webserv",
        webservTag: "Webserver",
        webservDescription: "Voll funktionsfähiger HTTP/1.1-Server von Grund auf erstellt mit Unterstützung für mehrere Methoden, CGI und Konfigurationsdateien.",
        
        ftTranscendenceTitle: "ft_transcendence",
        ftTranscendenceTag: "Full-Stack Web-App",
        ftTranscendenceDescription: "Vollständige Webanwendung mit Echtzeit-Features, Benutzerauthentifizierung und interaktiven Gaming-Komponenten.",
        
        inceptionTitle: "Inception",
        inceptionTag: "DevOps",
        inceptionDescription: "Komplexe Multi-Service-Anwendungscontainerisierung mit Docker, implementiert Microservices-Architektur und Orchestrierung.",
        
        ftIrcTitle: "ft_irc",
        ftIrcTag: "Netzwerkprotokoll",
        ftIrcDescription: "Vollständige IRC-Server-Implementierung nach RFC-Spezifikationen mit Kanalverwaltung und Benutzerauthentifizierung.",
        
        // Skills Section
        skillsTitle: "Technische Fähigkeiten",
        programmingLanguages: "Programmiersprachen",
        systemsTools: "Systeme & Tools",
        coreConcepts: "Kernkonzepte",
        specializations: "Spezialisierungen",
        
        // Individual Skills
        // Programming Languages
        cSkill: "C",
        cppSkill: "C++",
        pythonSkill: "Python",
        javascriptSkill: "JavaScript",
        htmlSkill: "HTML",
        cssSkill: "CSS",
        
        // Systems & Tools
        linuxSkill: "Linux",
        dockerSkill: "Docker",
        gitSkill: "Git",
        makeSkill: "Make",
        shellScriptingSkill: "Shell-Skripte",
        virtualMachinesSkill: "Virtuelle Maschinen",
        
        // Core Concepts
        algorithmsSkill: "Algorithmen",
        dataStructuresSkill: "Datenstrukturen",
        systemAdministrationSkill: "Systemadministration",
        networkProgrammingSkill: "Netzwerkprogrammierung",
        threeDGraphicsSkill: "3D-Grafiken",
        webDevelopmentSkill: "Webentwicklung",
        
        // Specializations
        artificialIntelligenceSkill: "Künstliche Intelligenz",
        cyberSecuritySkill: "Cybersicherheit",
        concurrentProgrammingSkill: "Nebenläufige Programmierung",
        memoryManagementSkill: "Speicherverwaltung",
        protocolImplementationSkill: "Protokollimplementierung",
        softwareArchitectureSkill: "Software-Architektur",
        
        // Contact Section
        contactTitle: "Kontakt aufnehmen",
        contactText: "Ich bin immer interessiert daran, neue Möglichkeiten zu diskutieren, an interessanten Projekten zu arbeiten oder mich mit anderen Entwicklern und Forschern im Bereich KI und Cybersicherheit zu vernetzen.",
        letsConnect: "Lass uns vernetzen",
        contactDescription: "Zögern Sie nicht, sich für Kooperationen, Fragen zu meinen Projekten oder einfach nur zum Hallo sagen zu melden!",
        email: "E-Mail",
        github: "GitHub",
        linkedin: "LinkedIn",
        
        // Footer
        footerText: "© 2025 ERRAHAL MOSSAB. Alle Rechte vorbehalten."
    }
};

// Language management
class LanguageManager {
    constructor() {
        this.currentLanguage = this.detectBrowserLanguage();
        this.init();
    }
    
    detectBrowserLanguage() {
        const browserLang = navigator.language || navigator.userLanguage;
        const langCode = browserLang.split('-')[0].toLowerCase();
        
        // Check if we support the detected language
        if (translations[langCode]) {
            return langCode;
        }
        
        // Default to English if language not supported
        return 'en';
    }
    
    init() {
        this.createLanguageSwitcher();
        this.setLanguage(this.currentLanguage);
        this.setupEventListeners();
    }
    
    createLanguageSwitcher() {
        const navMenu = document.querySelector('.nav-menu');
        
        // Create language switcher container
        const langSwitcher = document.createElement('li');
        langSwitcher.className = 'nav-item language-switcher';
        langSwitcher.innerHTML = `
            <div class="language-dropdown">
                <button class="language-btn" id="currentLang">
                    <span class="lang-flag" id="currentFlag">🇺🇸</span>
                    <span class="lang-text" id="currentLangText">EN</span>
                    <span class="dropdown-arrow">▼</span>
                </button>
                <div class="language-options" id="langOptions">
                    <div class="language-option" data-lang="en">
                        <span class="lang-flag">🇺🇸</span>
                        <span class="lang-text">English</span>
                    </div>
                    <div class="language-option" data-lang="fr">
                        <span class="lang-flag">🇫🇷</span>
                        <span class="lang-text">Français</span>
                    </div>
                    <div class="language-option" data-lang="de">
                        <span class="lang-flag">🇩🇪</span>
                        <span class="lang-text">Deutsch</span>
                    </div>
                    <div class="language-option" data-lang="ar">
                        <span class="lang-flag">🇲🇦</span>
                        <span class="lang-text">العربية</span>
                    </div>
                </div>
            </div>
        `;
        
        navMenu.appendChild(langSwitcher);
    }
    
    setupEventListeners() {
        const langBtn = document.getElementById('currentLang');
        const langOptions = document.getElementById('langOptions');
        const languageOptions = document.querySelectorAll('.language-option');
        
        // Toggle dropdown
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langOptions.classList.toggle('show');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            langOptions.classList.remove('show');
        });
        
        // Handle language selection
        languageOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                const selectedLang = e.currentTarget.getAttribute('data-lang');
                this.setLanguage(selectedLang);
                langOptions.classList.remove('show');
            });
        });
    }
    
    setLanguage(langCode) {
        this.currentLanguage = langCode;
        
        // Update current language display
        const flags = { en: '🇺🇸', fr: '🇫🇷', de: '🇩🇪', ar: '🇲🇦' };
        const langNames = { en: 'EN', fr: 'FR', de: 'DE', ar: 'AR' };
        
        const currentFlag = document.getElementById('currentFlag');
        const currentLangText = document.getElementById('currentLangText');
        
        if (currentFlag && currentLangText) {
            currentFlag.textContent = flags[langCode];
            currentLangText.textContent = langNames[langCode];
        }
        
        // Update page content
        this.updateContent();
        
        // Handle RTL for Arabic
        if (langCode === 'ar') {
            document.documentElement.setAttribute('dir', 'rtl');
            document.documentElement.setAttribute('lang', 'ar');
        } else {
            document.documentElement.setAttribute('dir', 'ltr');
            document.documentElement.setAttribute('lang', langCode);
        }
        
        // Store language preference
        localStorage.setItem('preferredLanguage', langCode);
    }
    
    updateContent() {
        const lang = translations[this.currentLanguage];
        
        // Update navigation
        const navLinks = {
            'home': document.querySelector('a[href="#home"]'),
            'about': document.querySelector('a[href="#about"]'),
            'projects': document.querySelector('a[href="#projects"]'),
            'skills': document.querySelector('a[href="#skills"]'),
            'contact': document.querySelector('a[href="#contact"]')
        };
        
        Object.keys(navLinks).forEach(key => {
            if (navLinks[key]) {
                navLinks[key].textContent = lang[key];
            }
        });
        
        // Update hero section
        this.updateElementText('.hero-title', lang.heroTitle);
        this.updateElementText('.hero-subtitle', lang.heroSubtitle);
        this.updateElementText('.hero-description', lang.heroDescription);
        this.updateElementText('.btn-primary', lang.viewProjects);
        this.updateElementText('.btn-secondary', lang.getInTouch);
        
        // Update about section
        this.updateElementText('.about .section-title', lang.aboutTitle);
        const aboutParagraphs = document.querySelectorAll('.about-text p');
        if (aboutParagraphs[0]) aboutParagraphs[0].textContent = lang.aboutP1;
        if (aboutParagraphs[1]) aboutParagraphs[1].textContent = lang.aboutP2;
        
        this.updateElementText('.education h3', lang.education);
        const educationItems = document.querySelectorAll('.education-item');
        if (educationItems[0]) {
            educationItems[0].querySelector('h4').textContent = lang.mastersDegree;
            educationItems[0].querySelector('p').textContent = lang.mastersStatus;
        }
        if (educationItems[1]) {
            educationItems[1].querySelector('h4').textContent = lang.schoolDegree;
            educationItems[1].querySelector('p').textContent = lang.schoolStatus;
        }
        
        // Update projects section
        this.updateElementText('.projects .section-title', lang.projectsTitle);
        
        // Update individual project cards
        const projectCards = document.querySelectorAll('.project-card');
        const projectData = [
            { title: lang.libftTitle, tag: lang.libftTag, description: lang.libftDescription },
            { title: lang.ftPrintfTitle, tag: lang.ftPrintfTag, description: lang.ftPrintfDescription },
            { title: lang.getNextLineTitle, tag: lang.getNextLineTag, description: lang.getNextLineDescription },
            { title: lang.born2berootTitle, tag: lang.born2berootTag, description: lang.born2berootDescription },
            { title: lang.soLongTitle, tag: lang.soLongTag, description: lang.soLongDescription },
            { title: lang.pushSwapTitle, tag: lang.pushSwapTag, description: lang.pushSwapDescription },
            { title: lang.pipexTitle, tag: lang.pipexTag, description: lang.pipexDescription },
            { title: lang.minishellTitle, tag: lang.minishellTag, description: lang.minishellDescription },
            { title: lang.philosophersTitle, tag: lang.philosophersTag, description: lang.philosophersDescription },
            { title: lang.cub3dTitle, tag: lang.cub3dTag, description: lang.cub3dDescription },
            { title: lang.ftContainersTitle, tag: lang.ftContainersTag, description: lang.ftContainersDescription },
            { title: lang.webservTitle, tag: lang.webservTag, description: lang.webservDescription },
            { title: lang.ftTranscendenceTitle, tag: lang.ftTranscendenceTag, description: lang.ftTranscendenceDescription },
            { title: lang.inceptionTitle, tag: lang.inceptionTag, description: lang.inceptionDescription },
            { title: lang.ftIrcTitle, tag: lang.ftIrcTag, description: lang.ftIrcDescription }
        ];
        
        projectCards.forEach((card, index) => {
            if (projectData[index]) {
                const titleElement = card.querySelector('.project-header h3');
                const tagElement = card.querySelector('.project-tag');
                const descriptionElement = card.querySelector('p');
                
                if (titleElement) titleElement.textContent = projectData[index].title;
                if (tagElement) tagElement.textContent = projectData[index].tag;
                if (descriptionElement) descriptionElement.textContent = projectData[index].description;
            }
        });
        
        // Update skills section
        this.updateElementText('.skills .section-title', lang.skillsTitle);
        const skillCategories = document.querySelectorAll('.skill-category h3');
        if (skillCategories[0]) skillCategories[0].textContent = lang.programmingLanguages;
        if (skillCategories[1]) skillCategories[1].textContent = lang.systemsTools;
        if (skillCategories[2]) skillCategories[2].textContent = lang.coreConcepts;
        if (skillCategories[3]) skillCategories[3].textContent = lang.specializations;
        
        // Update individual skill items
        const skillItemsData = [
            // Programming Languages (first category)
            [lang.cSkill, lang.cppSkill, lang.pythonSkill, lang.javascriptSkill, lang.htmlSkill, lang.cssSkill],
            // Systems & Tools (second category)
            [lang.linuxSkill, lang.dockerSkill, lang.gitSkill, lang.makeSkill, lang.shellScriptingSkill, lang.virtualMachinesSkill],
            // Core Concepts (third category)
            [lang.algorithmsSkill, lang.dataStructuresSkill, lang.systemAdministrationSkill, lang.networkProgrammingSkill, lang.threeDGraphicsSkill, lang.webDevelopmentSkill],
            // Specializations (fourth category)
            [lang.artificialIntelligenceSkill, lang.cyberSecuritySkill, lang.concurrentProgrammingSkill, lang.memoryManagementSkill, lang.protocolImplementationSkill, lang.softwareArchitectureSkill]
        ];
        
        const skillItemsContainers = document.querySelectorAll('.skill-items');
        skillItemsContainers.forEach((container, categoryIndex) => {
            const skillItems = container.querySelectorAll('.skill-item');
            if (skillItemsData[categoryIndex]) {
                skillItems.forEach((item, itemIndex) => {
                    if (skillItemsData[categoryIndex][itemIndex]) {
                        item.textContent = skillItemsData[categoryIndex][itemIndex];
                    }
                });
            }
        });
        
        // Update contact section
        this.updateElementText('.contact .section-title', lang.contactTitle);
        this.updateElementText('.contact-text', lang.contactText);
        this.updateElementText('.contact-item h3', lang.letsConnect);
        this.updateElementText('.contact-item p', lang.contactDescription);
        
        // Update footer
        this.updateElementText('.footer p', lang.footerText);
    }
    
    updateElementText(selector, text) {
        const element = document.querySelector(selector);
        if (element) {
            element.textContent = text;
        }
    }
    
    // Get stored language preference or detect browser language
    getPreferredLanguage() {
        const stored = localStorage.getItem('preferredLanguage');
        if (stored && translations[stored]) {
            return stored;
        }
        return this.detectBrowserLanguage();
    }
}

// Initialize language management when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const languageManager = new LanguageManager();
    
    // Check for stored language preference
    const preferredLang = languageManager.getPreferredLanguage();
    if (preferredLang !== languageManager.currentLanguage) {
        languageManager.setLanguage(preferredLang);
    }
});
