
window.onload=function(){
	const menuBtn = document.querySelector('.menu-btn');
	const headerBox = document.querySelector('#header-box');
	let menuOpen = false;
	menuBtn.addEventListener('click', () => {
		if(!menuOpen) {
			menuBtn.classList.add('open');
			headerBox.classList.add('open');
			menuOpen = true;
		} else {
			menuBtn.classList.remove('open');
			headerBox.classList.remove('open');
			menuOpen = false;
		}
	})
}