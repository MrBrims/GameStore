//Dark Mode
let styleMode = localStorage.getItem('styleMode');
const styleToggle = document.querySelector('.header-mode-switcher');

const enableDarkMode = () => {
	document.body.classList.add('dark-mode-gamestore');
	localStorage.setItem('styleMode', 'dark');
};

const disableDarkMode = () => {
	document.body.classList.remove('dark-mode-gamestore');
	localStorage.setItem('styleMode', 'light');
};

if (styleMode === 'dark') {
	enableDarkMode();
}

if (styleToggle) {
	styleToggle.addEventListener('click', () => {
		styleMode = localStorage.getItem('styleMode');
		if (styleMode !== 'dark') {
			enableDarkMode();
		} else {
			disableDarkMode();
		}
	});
}
