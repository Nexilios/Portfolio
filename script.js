// Store current state
        let currentPage = 'home';
        let currentGame = null;
        let currentArtIndex = 0;
        
        // Game data
        const gameData = {
            game1: {
                title: 'Space Odyssey',
                description: 'Space Odyssey is an epic space adventure that takes players on a journey through the cosmos. With stunning visual effects, engaging gameplay mechanics, and a compelling storyline, players will explore distant galaxies, engage in space battles, and uncover the mysteries of the universe. The game features procedurally generated star systems, customizable spacecraft, and a dynamic economy system that responds to player actions.',
                banner: 'Space Odyssey'
            },
            game2: {
                title: 'Mystic Realms',
                description: 'Mystic Realms is a fantasy RPG that immerses players in a richly detailed world filled with magic, mystery, and adventure. Create your character from multiple classes, each with unique abilities and playstyles. Explore vast landscapes, from enchanted forests to ancient dungeons, while uncovering a deep narrative that adapts to your choices. The game features a complex magic system, crafting mechanics, and meaningful character progression.',
                banner: 'Mystic Realms'
            },
            game3: {
                title: 'Cyber Runner',
                description: 'Cyber Runner is a fast-paced cyberpunk platformer set in a neon-lit dystopian future. Wall-run, double-jump, and dash through procedurally generated levels while avoiding obstacles and enemies. The game features a synthwave soundtrack, stunning visual effects, and increasingly challenging gameplay that will test your reflexes. Collect upgrades to enhance your abilities and compete for high scores on global leaderboards.',
                banner: 'Cyber Runner'
            },
            game4: {
                title: 'Puzzle Mind',
                description: 'Puzzle Mind challenges players with increasingly complex puzzles that blend logic, spatial reasoning, and creative thinking. Each level introduces new mechanics and concepts, building upon previous challenges to create a satisfying learning curve. The minimalist art style and ambient soundtrack create a relaxing atmosphere perfect for focused problem-solving. With over 100 handcrafted levels and a level editor for community content.',
                banner: 'Puzzle Mind'
            }
        };

        // Art data
        const artworks = [
            'Character Model 1',
            'Environment Art 1',
            'Weapon Design 1',
            'Vehicle Model 1',
            'Creature Design 1',
            'Architecture 1',
            'Props Collection 1',
            'Character Model 2'
        ];

        // Navigation function
        function navigateTo(page) {
            // Hide all pages
            document.querySelectorAll('.page').forEach(p => {
                p.classList.remove('active');
            });
            
            // Show selected page
            document.getElementById(page).classList.add('active');
            
            // Update nav links
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            
            // Find and activate the corresponding nav link
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                if (link.textContent.toLowerCase().includes(page) || 
                    (page === 'home' && link.textContent === 'Home') ||
                    (page === 'games' && link.textContent === 'Games') ||
                    (page === 'art' && link.textContent === '3D Art') ||
                    (page === 'contact' && link.textContent === 'Contact')) {
                    link.classList.add('active');
                }
            });
            
            currentPage = page;
            
            // Smooth scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Show game detail
        function showGameDetail(gameId) {
            currentGame = gameId;
            const game = gameData[gameId];
            
            // Update game detail page content
            document.getElementById('gameBanner').textContent = game.banner;
            document.getElementById('gameTitle').textContent = game.title;
            document.getElementById('gameDescription').textContent = game.description;
            
            // Navigate to game detail page
            navigateTo('gameDetail');
        }

        // Carousel functions
        function openCarousel(index) {
            currentArtIndex = index;
            updateCarousel();
            document.getElementById('carouselModal').classList.add('active');
        }

        function closeCarousel() {
            document.getElementById('carouselModal').classList.remove('active');
        }

        function changeSlide(direction) {
            currentArtIndex += direction;
            if (currentArtIndex < 0) {
                currentArtIndex = artworks.length - 1;
            } else if (currentArtIndex >= artworks.length) {
                currentArtIndex = 0;
            }
            updateCarousel();
        }

        function updateCarousel() {
            document.getElementById('carouselImage').textContent = artworks[currentArtIndex];
        }

        // Handle contact form submission
        function handleSubmit(event) {
            event.preventDefault();
            
            // Get form data
            const formData = new FormData(event.target);
            const data = Object.fromEntries(formData);
            
            // In a real application, you would send this data to a server
            // For GitHub Pages, you might use a service like Formspree or EmailJS
            console.log('Form submitted:', data);
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset form
            event.target.reset();
        }

        // Close carousel on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeCarousel();
            }
            if (document.getElementById('carouselModal').classList.contains('active')) {
                if (e.key === 'ArrowLeft') {
                    changeSlide(-1);
                } else if (e.key === 'ArrowRight') {
                    changeSlide(1);
                }
            }
        });

        // Close carousel on background click
        document.getElementById('carouselModal').addEventListener('click', (e) => {
            if (e.target === document.getElementById('carouselModal')) {
                closeCarousel();
            }
        });

        // Add smooth page transitions
        document.addEventListener('DOMContentLoaded', () => {
            // Add animation to elements on scroll
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px'
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerOptions);
            
            // Observe game cards and art cards
            document.querySelectorAll('.game-card, .art-card').forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'opacity 0.5s, transform 0.5s';
                observer.observe(card);
            });
        });

        // Handle browser back/forward buttons
        window.addEventListener('popstate', (e) => {
            if (e.state && e.state.page) {
                navigateTo(e.state.page);
            }
        });

        // Initialize
        history.pushState({ page: 'home' }, '', '#home');