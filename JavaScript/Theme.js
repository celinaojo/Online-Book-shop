document.addEventListener('DOMContentLoaded', () => {

    const themeSelect = document.querySelector('.Colour_selector');

    const savedTheme= localStorage.getItem('theme');
    if (savedTheme){
        document.documentElement.setAttribute('data-theme', savedTheme);
        themeSelect.value = savedTheme;
    }

    themeSelect.addEventListener('change', function() {
        const selectedTheme = this.value;

        if (selectedTheme == 'default') {
            document.documentElement.removeAttribute('data-theme');
            localStorage.removeItem('theme');
        }
        else{
            document.documentElement.setAttribute('data-theme',selectedTheme);
            localStorage.setItem('theme', selectedTheme);
        }
    });
});