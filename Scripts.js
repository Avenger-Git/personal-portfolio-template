document.addEventListener("DOMContentLoaded", () => {
    const themeButton = document.querySelector('.theme-button');

    // Start altijd in darkmode
    document.body.classList.add('dark-mode');
    themeButton.textContent = '🌙';

    themeButton.addEventListener('click', () => {
        const isDark = document.body.classList.contains('dark-mode');

        if (isDark) {
            // Ga naar lightmode
            document.body.classList.remove('dark-mode');
            themeButton.textContent = '☀️';
        } else {
            // Ga terug naar darkmode
            document.body.classList.add('dark-mode');
            themeButton.textContent = '🌙';
        }
    });
});
