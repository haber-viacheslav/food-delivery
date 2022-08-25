(() => {
	const menuOpenBtn = document.querySelector('[data-menu-open]');

	const mobileMenu = document.querySelector('[data-menu]');
	const body = document.querySelector('body');

	menuOpenBtn.addEventListener('click', openModal);
	menuCloseBtn.addEventListener('click', openModal);

	function openModal() {
		mobileMenu.classList.toggle('is-open');
	}
})();