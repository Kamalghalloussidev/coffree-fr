/**
 * COFFREE.FR - Main JavaScript
 * Fichier JavaScript principal pour les fonctionnalités interactives
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('COFFREE.FR - Site chargé avec succès');
    
    // Animation d'apparition progressive au chargement
    fadeInContent();
    
    // Gestion des événements des plateformes
    initPlatformInteractions();
});

/**
 * Animation d'apparition du contenu
 */
function fadeInContent() {
    const content = document.querySelector('.content');
    if (content) {
        content.style.opacity = '0';
        content.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            content.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            content.style.opacity = '1';
            content.style.transform = 'translateY(0)';
        }, 100);
    }
}

/**
 * Initialisation des interactions pour les plateformes mobiles
 */
function initPlatformInteractions() {
    const platforms = document.querySelectorAll('.platform');
    
    platforms.forEach(platform => {
        platform.addEventListener('click', function() {
            const platformName = this.querySelector('span').textContent;
            console.log(`Intérêt pour la plateforme: ${platformName}`);
            
            // Animation de clic
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
}

/**
 * Affichage d'un compte à rebours (pour usage futur)
 * @param {Date} targetDate - Date cible du lancement
 */
function initCountdown(targetDate) {
    // À implémenter selon les besoins
    console.log('Compte à rebours initialisé pour:', targetDate);
}
