// Theme Management
class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        this.applyTheme();
        this.bindEvents();
    }

    applyTheme() {
        document.documentElement.setAttribute('data-theme', this.theme);
        localStorage.setItem('theme', this.theme);
    }

    toggleTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        this.applyTheme();
    }

    bindEvents() {
        const desktopToggle = document.getElementById('themeToggle');
        const mobileToggle = document.getElementById('mobileThemeToggle');

        if (desktopToggle) {
            desktopToggle.addEventListener('click', () => this.toggleTheme());
        }

        if (mobileToggle) {
            mobileToggle.addEventListener('click', () => this.toggleTheme());
        }
    }
}

// Mobile Menu Management
class MobileMenu {
    constructor() {
        this.hamburger = document.getElementById('hamburger');
        this.mobileNav = document.getElementById('mobileNav');
        this.isOpen = false;
        this.init();
    }

    init() {
        this.bindEvents();
    }

    toggle() {
        this.isOpen = !this.isOpen;
        
        if (this.isOpen) {
            this.open();
        } else {
            this.close();
        }
    }

    open() {
        this.hamburger.classList.add('active');
        this.mobileNav.classList.add('active');
    }

    close() {
        this.hamburger.classList.remove('active');
        this.mobileNav.classList.remove('active');
        this.isOpen = false;
    }

    bindEvents() {
        // Toggle menu on hamburger click
        this.hamburger.addEventListener('click', () => this.toggle());

        // Close menu when clicking on nav links
        const navLinks = document.querySelectorAll('.mobile-nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => this.close());
        });

        // Close menu on window resize (desktop)
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768 && this.isOpen) {
                this.close();
            }
        });
    }
}

// Smooth Scroll for Navigation Links
class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        // Handle all navigation links
        const navLinks = document.querySelectorAll('a[href^="#"]');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => this.handleClick(e));
        });
    }

    handleClick(e) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
    new MobileMenu();
    new SmoothScroll();
});

// Optional: Handle scroll effects
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 0) {
        header.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Funções globais para redes sociais
function openInstagram() {
    const button = document.querySelector('.instagram-button');
    
    // Efeito visual
    if (button) {
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 150);
    }
    
    // Abrir Instagram
    window.open('https://www.instagram.com/neuropp.casimirodequeiroz', '_blank');
}

function openWhatsApp() {
    const button = document.querySelector('.whatsapp-button');
    
    // Efeito visual
    if (button) {
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 150);
    }
    
    // Abrir WhatsApp
    window.open('https://wa.me/5562984220580?text=Ol%C3%A1%2C%20Dr.%20Caio%20Casimiro!%20Acessei%20sua%20p%C3%A1gina%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20atendimentos%20cl%C3%ADnicos%20em%20neuroci%C3%AAncia%2C%20psican%C3%A1lise%20ou%20terapias%20integrativas.%20Voc%C3%AA%20pode%20me%20ajudar%3F', '_blank');
}

footerYear();
function footerYear() {
    const currentYear = new Date().getFullYear();
    const yearElement = document.querySelector('.copyright');
    console.log(yearElement);
    
    if (yearElement) {
        yearElement.textContent = yearElement.textContent.replace('{atualYear}', currentYear);
    }
}

/* 

// Theme Management
class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        this.applyTheme();
        this.bindEvents();
    }

    applyTheme() {
        document.documentElement.setAttribute('data-theme', this.theme);
        localStorage.setItem('theme', this.theme);
    }

    toggleTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        this.applyTheme();
    }

    bindEvents() {
        const desktopToggle = document.getElementById('themeToggle');
        const mobileToggle = document.getElementById('mobileThemeToggle');

        if (desktopToggle) {
            desktopToggle.addEventListener('click', () => this.toggleTheme());
        }

        if (mobileToggle) {
            mobileToggle.addEventListener('click', () => this.toggleTheme());
        }
    }
}

// Mobile Menu Management
class MobileMenu {
    constructor() {
        this.hamburger = document.getElementById('hamburger');
        this.mobileNav = document.getElementById('mobileNav');
        this.isOpen = false;
        this.init();
    }

    init() {
        this.bindEvents();
    }

    toggle() {
        this.isOpen = !this.isOpen;
        
        if (this.isOpen) {
            this.open();
        } else {
            this.close();
        }
    }

    open() {
        this.hamburger.classList.add('active');
        this.mobileNav.classList.add('active');
    }

    close() {
        this.hamburger.classList.remove('active');
        this.mobileNav.classList.remove('active');
        this.isOpen = false;
    }

    bindEvents() {
        // Toggle menu on hamburger click
        this.hamburger.addEventListener('click', () => this.toggle());

        // Close menu when clicking on nav links
        const navLinks = document.querySelectorAll('.mobile-nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => this.close());
        });

        // Close menu on window resize (desktop)
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768 && this.isOpen) {
                this.close();
            }
        });
    }
}

// Smooth Scroll for Navigation Links
class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        // Handle all navigation links
        const navLinks = document.querySelectorAll('a[href^="#"]');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => this.handleClick(e));
        });
    }

    handleClick(e) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
    new MobileMenu();
    new SmoothScroll();
});

// Optional: Handle scroll effects
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 0) {
        header.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});


*/


/* 


// Gerenciamento de animações da seção Sobre
class AboutSectionManager {
    constructor() {
        this.section = document.getElementById('about');
        this.animatedElements = [];
        this.isVisible = false;
        this.init();
    }

    init() {
        this.setupIntersectionObserver();
        this.setupCounterAnimations();
    }

    // Observer para detectar quando a seção fica visível
    setupIntersectionObserver() {
        const options = {
            root: null,
            rootMargin: '-20% 0px -20% 0px',
            threshold: 0.3
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.isVisible) {
                    this.triggerAnimations();
                    this.isVisible = true;
                }
            });
        }, options);

        if (this.section) {
            observer.observe(this.section);
        }
    }

    // Animações quando a seção fica visível
    triggerAnimations() {
        // Animar números das estatísticas
        this.animateCounters();
        
        // Adicionar classes de animação
        const elements = this.section.querySelectorAll('.about-content, .about-image-container, .stat-item');
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('animate-in');
            }, index * 100);
        });
    }

    // Configurar animações dos contadores
    setupCounterAnimations() {
        const counters = [
            { element: this.section?.querySelector('.stat-item:first-child .stat-number'), target: 150, suffix: '+' },
            { element: this.section?.querySelector('.stat-item:last-child .stat-number'), target: 10, suffix: 'k+' }
        ];

        this.counters = counters.filter(counter => counter.element);
    }

    // Animar contadores numericos
    animateCounters() {
        this.counters.forEach(counter => {
            this.animateCounter(counter.element, counter.target, counter.suffix);
        });
    }

    animateCounter(element, target, suffix = '') {
        let current = 0;
        const increment = target / 50; // 50 frames de animação
        const duration = 2000; // 2 segundos
        const stepTime = duration / 50;

        const timer = setInterval(() => {
            current += increment;
            
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            element.textContent = Math.floor(current) + suffix;
        }, stepTime);
    }
}

// Gerenciamento de tema (se necessário)
class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        this.applyTheme();
    }

    applyTheme() {
        document.documentElement.setAttribute('data-theme', this.theme);
        localStorage.setItem('theme', this.theme);
    }

    toggleTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        this.applyTheme();
    }
}

// Efeitos de hover e interatividade
class InteractivityManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupHoverEffects();
        this.setupImageEffects();
    }

    setupHoverEffects() {
        // Efeito hover nos cards de estatística
        const statItems = document.querySelectorAll('.stat-item');
        statItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                this.addHoverEffect(item);
            });
            
            item.addEventListener('mouseleave', () => {
                this.removeHoverEffect(item);
            });
        });
    }

    addHoverEffect(element) {
        element.style.transform = 'translateY(-5px)';
        element.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    }

    removeHoverEffect(element) {
        element.style.transform = 'translateY(0)';
    }

    setupImageEffects() {
        const image = document.querySelector('.about-image');
        if (image) {
            // Efeito parallax sutil na imagem ao scroll
            let ticking = false;
            
            window.addEventListener('scroll', () => {
                if (!ticking) {
                    requestAnimationFrame(() => {
                        this.updateImageParallax(image);
                        ticking = false;
                    });
                    ticking = true;
                }
            });
        }
    }

    updateImageParallax(image) {
        const rect = image.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.1;
        
        if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
            image.style.transform = `translateY(${rate}px) scale(1)`;
        }
    }
}

// Inicialização quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    new AboutSectionManager();
    new ThemeManager();
    new InteractivityManager();
});

// Performance: Pause animations quando aba não está ativa
document.addEventListener('visibilitychange', () => {
    const animations = document.querySelectorAll('.stat-item, .about-image, .image-badge');
    
    if (document.hidden) {
        animations.forEach(el => {
            el.style.animationPlayState = 'paused';
        });
    } else {
        animations.forEach(el => {
            el.style.animationPlayState = 'running';
        });
    }
});

*/

/* 

// Gerenciamento da seção Livro
class BookSectionManager {
    constructor() {
        this.section = document.getElementById('book');
        this.card = document.querySelector('.book-card');
        this.isVisible = false;
        this.init();
    }

    init() {
        this.setupIntersectionObserver();
        this.setupCardEffects();
        this.setupPurchaseTracking();
    }

    // Observer para animações quando seção fica visível
    setupIntersectionObserver() {
        const options = {
            root: null,
            rootMargin: '-10% 0px -10% 0px',
            threshold: 0.2
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.isVisible) {
                    this.triggerAnimations();
                    this.isVisible = true;
                }
            });
        }, options);

        if (this.section) {
            observer.observe(this.section);
        }
    }

    // Disparar animações da seção
    triggerAnimations() {
        const elements = [
            this.section.querySelector('.book-header'),
            this.section.querySelector('.book-card-container')
        ];

        elements.forEach((element, index) => {
            if (element) {
                setTimeout(() => {
                    element.classList.add('animate-in');
                }, index * 200);
            }
        });
    }

    // Efeitos do card
    setupCardEffects() {
        if (!this.card) return;

        // Efeito parallax sutil no card
        let ticking = false;
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    this.updateCardParallax();
                    ticking = false;
                });
                ticking = true;
            }
        });

        // Efeito de hover 3D
        this.card.addEventListener('mousemove', (e) => {
            this.handleCardHover(e);
        });

        this.card.addEventListener('mouseleave', () => {
            this.resetCardHover();
        });
    }

    // Parallax do card
    updateCardParallax() {
        if (!this.card) return;

        const rect = this.card.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.05;
        
        if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
            this.card.style.transform = `translateY(${rate}px)`;
        }
    }

    // Efeito hover 3D
    handleCardHover(e) {
        const rect = this.card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        this.card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        this.card.style.transition = 'transform 0.1s ease-out';
    }

    // Reset hover 3D
    resetCardHover() {
        this.card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
        this.card.style.transition = 'transform 0.3s ease-out';
    }

    // Rastreamento de interações
    setupPurchaseTracking() {
        const buyButton = document.querySelector('.buy-button');
        if (buyButton) {
            buyButton.addEventListener('click', () => {
                this.trackPurchaseIntent();
            });
        }
    }

    // Analytics simples
    trackPurchaseIntent() {
        console.log('Purchase button clicked - analytics event');
        // Aqui você pode integrar com Google Analytics, Facebook Pixel, etc.
    }
}

// Função global para compra
function handlePurchase() {
    // Simulação de processo de compra
    const button = document.querySelector('.buy-button');
    
    if (button) {
        // Efeito visual de loading
        const originalText = button.textContent;
        button.textContent = 'Processando...';
        button.disabled = true;
        button.style.opacity = '0.7';
        
        // Simular processo de compra
        setTimeout(() => {
            alert('Redirecionando para página de pagamento...\n\nEm um caso real, aqui você redirecionaria para:\n- Stripe\n- PayPal\n- MercadoPago\n- Ou outro gateway de pagamento');
            
            // Restaurar botão
            button.textContent = originalText;
            button.disabled = false;
            button.style.opacity = '1';
        }, 2000);
    }
}

// Gerenciamento de tema
class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        this.applyTheme();
    }

    applyTheme() {
        document.documentElement.setAttribute('data-theme', this.theme);
        localStorage.setItem('theme', this.theme);
    }

    toggleTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        this.applyTheme();
    }
}

// Efeitos de performance e acessibilidade
class AccessibilityManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupKeyboardNavigation();
        this.setupReducedMotion();
    }

    // Navegação por teclado
    setupKeyboardNavigation() {
        const buyButton = document.querySelector('.buy-button');
        
        if (buyButton) {
            buyButton.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handlePurchase();
                }
            });
        }
    }

    // Respeitar preferência de movimento reduzido
    setupReducedMotion() {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        
        if (prefersReducedMotion.matches) {
            // Desabilitar animações complexas
            document.documentElement.style.setProperty('--animation-duration', '0s');
            
            const style = document.createElement('style');
            style.textContent = `
                * {
                    animation-duration: 0.01ms !important;
                    animation-iteration-count: 1 !important;
                    transition-duration: 0.01ms !important;
                }
            `;
            document.head.appendChild(style);
        }
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    new BookSectionManager();
    new ThemeManager();
    new AccessibilityManager();
});

// Performance: Pausa animações quando aba não está ativa
document.addEventListener('visibilitychange', () => {
    const animations = document.querySelectorAll('.book-card, .book-icon');
    
    if (document.hidden) {
        animations.forEach(el => {
            el.style.animationPlayState = 'paused';
        });
    } else {
        animations.forEach(el => {
            el.style.animationPlayState = 'running';
        });
    }
});

*/

/* 

// Gerenciamento da seção Contato e Rodapé
class ContactFooterManager {
    constructor() {
        this.contactSection = document.getElementById('contact');
        this.footer = document.querySelector('.footer');
        this.isContactVisible = false;
        this.isFooterVisible = false;
        this.init();
    }

    init() {
        this.setupIntersectionObservers();
        this.setupSocialMediaTracking();
    }

    // Observers para animações
    setupIntersectionObservers() {
        const options = {
            root: null,
            rootMargin: '-10% 0px -10% 0px',
            threshold: 0.2
        };

        // Observer para seção de contato
        const contactObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.isContactVisible) {
                    this.triggerContactAnimations();
                    this.isContactVisible = true;
                }
            });
        }, options);

        // Observer para rodapé
        const footerObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.isFooterVisible) {
                    this.triggerFooterAnimations();
                    this.isFooterVisible = true;
                }
            });
        }, options);

        if (this.contactSection) {
            contactObserver.observe(this.contactSection);
        }

        if (this.footer) {
            footerObserver.observe(this.footer);
        }
    }

    // Animações da seção contato
    triggerContactAnimations() {
        const elements = [
            this.contactSection.querySelector('.contact-header'),
            this.contactSection.querySelector('.contact-buttons')
        ];

        elements.forEach((element, index) => {
            if (element) {
                setTimeout(() => {
                    element.classList.add('animate-in');
                }, index * 200);
            }
        });
    }

    // Animações do rodapé
    triggerFooterAnimations() {
        const columns = this.footer.querySelectorAll('.footer-column');
        
        columns.forEach((column, index) => {
            setTimeout(() => {
                column.classList.add('animate-in');
            }, index * 100);
        });
    }

    // Rastreamento de redes sociais
    setupSocialMediaTracking() {
        const instagramBtn = document.querySelector('.instagram-button');
        const whatsappBtn = document.querySelector('.whatsapp-button');

        if (instagramBtn) {
            instagramBtn.addEventListener('click', () => {
                this.trackSocialClick('instagram');
            });
        }

        if (whatsappBtn) {
            whatsappBtn.addEventListener('click', () => {
                this.trackSocialClick('whatsapp');
            });
        }
    }

    // Analytics para cliques sociais
    trackSocialClick(platform) {
        console.log(`${platform} button clicked - analytics event`);
        // Integração com Google Analytics, Facebook Pixel, etc.
    }
}



// Gerenciamento de tema
class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        this.applyTheme();
    }

    applyTheme() {
        document.documentElement.setAttribute('data-theme', this.theme);
        localStorage.setItem('theme', this.theme);
    }

    toggleTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        this.applyTheme();
    }
}

// Efeitos de interatividade
class InteractivityManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupButtonEffects();
        this.setupFooterLinkEffects();
    }

    // Efeitos nos botões
    setupButtonEffects() {
        const buttons = document.querySelectorAll('.contact-button');
        
        buttons.forEach(button => {
            // Efeito hover com delay
            button.addEventListener('mouseenter', () => {
                this.addButtonHover(button);
            });
            
            button.addEventListener('mouseleave', () => {
                this.removeButtonHover(button);
            });

            // Efeito de foco para acessibilidade
            button.addEventListener('focus', () => {
                button.style.outline = '2px solid var(--blue-600)';
                button.style.outlineOffset = '2px';
            });

            button.addEventListener('blur', () => {
                button.style.outline = 'none';
            });
        });
    }

    addButtonHover(button) {
        button.style.transform = 'translateY(-2px) scale(1.02)';
        button.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    }

    removeButtonHover(button) {
        button.style.transform = 'translateY(0) scale(1)';
    }

    // Efeitos nos links do rodapé
    setupFooterLinkEffects() {
        const footerItems = document.querySelectorAll('.footer-list li');
        
        footerItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.style.transform = 'translateX(5px)';
                item.style.transition = 'all 0.3s ease';
            });
            
            item.addEventListener('mouseleave', () => {
                item.style.transform = 'translateX(0)';
            });
        });
    }
}

// Navegação suave para seções
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    new ContactFooterManager();
    new ThemeManager();
    new InteractivityManager();
});

// Performance: Pausar animações quando aba não está ativa
document.addEventListener('visibilitychange', () => {
    const animatedElements = document.querySelectorAll('.contact-button, .footer-column');
    
    if (document.hidden) {
        animatedElements.forEach(el => {
            el.style.animationPlayState = 'paused';
        });
    } else {
        animatedElements.forEach(el => {
            el.style.animationPlayState = 'running';
        });
    }
});

// Acessibilidade: Navegação por teclado
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        // Mostrar outline nos elementos focáveis
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', () => {
    // Remover outline quando usar mouse
    document.body.classList.remove('keyboard-navigation');
});

*/