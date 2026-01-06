<script>
        // Image Modal Functionality
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalClose = document.getElementById('modalClose');
    const logoImg = document.querySelector('.logo-img');
    const profilePicContact = document.getElementById('profilePicContact');

    function openModal(imageSrc) {
        modalImage.src = imageSrc;
    modal.classList.add('active');
        }

    function closeModal() {
        modal.classList.remove('active');
        }

    logoImg.addEventListener('click', function(e) {
        e.stopPropagation();
    openModal(this.src);
        });

    profilePicContact.addEventListener('click', function(e) {
        e.stopPropagation();
    openModal(this.src);
        });

    modalClose.addEventListener('click', closeModal);

    modal.addEventListener('click', function(e) {
            if (e.target === modal) {
        closeModal();
            }
        });

    document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
        closeModal();
            }
        });

    // Resume Download Functionality
    document.getElementById('downloadResume').addEventListener('click', function() {
            const resumeContent = `
    PRAJWAL SHINDE
    Full Stack Developer | AI/ML Engineer
    prajwalshinde1320@gmail.com
    Pune, Maharashtra, IN
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    ABOUT ME
    Full Stack Developer with expertise in React, Node.js, and Django. Passionate about building
    AI-integrated applications and creating exceptional user experiences. Currently interning at
    Infosys working on MelodAI - an intelligent music recommendation system.

    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    EDUCATION
    Bachelor of Engineering - Computer Engineering
    Ajeenkya DY Patil School of Engineering, Pune University (SPPU)
    Nov 2023 – May 2027 | CGPA: 8.68/10
    • Actively participating in OpenAI Buildathon
    • Preparing for Amazon Summer School entrance test

    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    PROFESSIONAL EXPERIENCE

    AI Intern — Infosys Springboard (Oct - Dec 2025)
    • Built MelodAI with sentiment analysis & Spotify API integration
    • Integrated pretrained NLP models in Django backend
    • Developed REST APIs for AI inference and mood processing
    • Created React frontend for mood visualization and recommendations
    • Optimized inference speed and improved backend response flow

    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    FEATURED PROJECTS

    MelodAI — AI Music Recommendation System
    (Django, React, NLP, Spotify API)
    • Sentiment analysis for mood detection
    • Real-time Spotify track matching
    • Audio feature analysis algorithm
    • 85% accuracy in mood-based recommendations

    Expensly — Personal Finance Tracker
    (MERN Stack, JWT, MongoDB, Chart.js)
    • Full-stack expense management system
    • Real-time analytics dashboard
    • Budget tracking & savings goals
    • Dark mode support

    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    TECHNICAL SKILLS

    Languages: JavaScript, Python, C++, SQL, HTML, CSS
    Frontend: React, HTML/CSS, Responsive Design, Dark Mode UI
    Backend: Node.js, Express, Django, REST APIs, JWT Auth
    Database: MongoDB, SQL
    AI/ML: NLP, Pretrained Models, Sentiment Analysis, Model Integration
    Tools: Git, GitHub, Vercel, Postman

    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    ACHIEVEMENTS
    ✓ Successfully built and deployed production-grade applications
    ✓ Integrated complex AI/ML models with React frontends
    ✓ Implemented secure authentication and authorization systems
    ✓ Created responsive, modern UIs with dark mode support

    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    CONNECT
    Email: prajwalshinde1320@gmail.com
    LinkedIn: linkedin.com/in/prajwal1320/
    GitHub: github.com/Prajwal7214
    `;

    // Create a blob and trigger download
    const element = document.createElement('a');
    const file = new Blob([resumeContent], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = 'Prajwal_Shinde_Resume.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
        });

        // Smooth scroll enhancement
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
        });
</script>