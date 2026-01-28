/* script.js */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 800, // values from 0 to 3000, with step 50ms
        easing: 'ease-in-out', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: true, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });

    // Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.getElementById('navLinks');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            // Toggle hamburger animation (optional, but good for UX)
            mobileToggle.classList.toggle('open');
        });
    }

    // Close mobile menu when a link is clicked
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileToggle.classList.remove('open');
        });
    });

    // Sticky Header Scroll Effect
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        } else {
            header.style.padding = '20px 0';
            header.style.background = '#ffffff';
        }
    });

    // Curriculum Modal Logic
    const curriculumData = {
        earlyyears: {
            title: "Early Years (PP1 & PP2)",
            desc: "Focusing on play-based learning and foundational interaction.",
            subjects: [
                { name: "Language Activities", icon: "🗣️" },
                { name: "Mathematical Activities", icon: "🔢" },
                { name: "Environmental Activities", icon: "🌍" },
                { name: "Religious Education", icon: "🙏" },
                { name: "Creative Activities", icon: "🎨" },
                { name: "Music & Movement", icon: "🎵" }
            ]
        },
        primary: {
            title: "Primary School (Grade 1-6)",
            desc: "Fostering core competencies through 2025 rationalized CBC subjects.",
            subjects: [
                { name: "English Language", icon: "📚" },
                { name: "Kiswahili / KSL", icon: "🇰🇪" },
                { name: "Mathematics", icon: "➗" },
                { name: "Science & Technology", icon: "🔬" },
                { name: "Agriculture & Nutrition", icon: "🌱" },
                { name: "Social Studies", icon: "🗺️" },
                { name: "Creative Arts", icon: "🖍️" },
                { name: "Religious Education", icon: "🕊️" }
            ]
        },
        junior: {
            title: "Junior School (Grade 7-9)",
            desc: "Pre-technical and technical readiness for career pathways.",
            subjects: [
                { name: "Integrated Science", icon: "🧪" },
                { name: "Health Education", icon: "🏥" },
                { name: "Pre-Technical Studies", icon: "🛠️" },
                { name: "Business Studies", icon: "💼" },
                { name: "Agriculture", icon: "🌽" },
                { name: "Social Studies", icon: "🌍" },
                { name: "Religious Education", icon: "🙏" },
                { name: "Life Skills", icon: "🤝" },
                { name: "Physical Education", icon: "🏟️" }
            ]
        },
        boarding: {
            title: "Boarding Life (Grade 4-9)",
            desc: "A safe, nurturing environment focused on academic excellence and character.",
            subjects: [
                { name: "Supervised Study", icon: "📖" },
                { name: "Nutritious Meals", icon: "🍎" },
                { name: "Matronly Care", icon: "🤗" },
                { name: "Secure Compound", icon: "🛡️" },
                { name: "Modern Dormitories", icon: "🏠" },
                { name: "Character Building", icon: "💎" },
                { name: "Morning Prep", icon: "☀️" },
                { name: "Evening Games", icon: "⚽" }
            ]
        }
    };

    const modal = document.getElementById('curriculumModal');
    const subjectsGrid = document.getElementById('subjectsGrid');
    const modalTitle = document.getElementById('modalLevelTitle');
    const modalDesc = document.getElementById('modalLevelDesc');
    const closeBtn = document.querySelector('.close-modal');
    const backdrop = document.querySelector('.modal-backdrop');

    const openModal = (level) => {
        const data = curriculumData[level];
        if (!data) return;

        modalTitle.textContent = data.title;
        modalDesc.textContent = data.desc;
        subjectsGrid.innerHTML = '';

        data.subjects.forEach(subject => {
            const pill = document.createElement('div');
            pill.className = 'subject-pill';
            pill.innerHTML = `
                <span class="subject-icon">${subject.icon}</span>
                <span class="subject-name">${subject.name}</span>
            `;
            subjectsGrid.appendChild(pill);
        });

        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    };

    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    document.querySelectorAll('.curriculum-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            openModal(btn.dataset.level);
        });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (backdrop) backdrop.addEventListener('click', closeModal);

    // Close on Escape key
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });


    // Hero Background Rotation
    const heroSlider = document.getElementById('heroSlider');
    if (heroSlider) {
        const slides = heroSlider.querySelectorAll('.hero-slide');
        let currentHeroSlide = 0;

        const nextHeroSlide = () => {
            slides[currentHeroSlide].classList.remove('active');
            currentHeroSlide = (currentHeroSlide + 1) % slides.length;
            slides[currentHeroSlide].classList.add('active');
        };

        setInterval(nextHeroSlide, 7000); // Shuffle every 7 seconds
    }

    // Handle Form Submission placeholder
    const contactForm = document.querySelector('#contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your inquiry! We will get back to you soon.');
            contactForm.reset();
        });
    }
});
