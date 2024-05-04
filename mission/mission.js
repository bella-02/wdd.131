const themeSelector = document.getElementById('options-select');
function changeTheme() {

    const selectedTheme = themeSelector.value;

    const body = document.body;
    const logo = document.querySelector('.logo');

    if (selectedTheme === 'dark') {
        body.classList.add('dark');
        logo.src = 'dark_byui_logo.png';
    } else {
        body.classList.remove('dark');
        logo.src = 'byui_logo.webp';
    }

}
themeSelector.addEventListener('change', changeTheme);