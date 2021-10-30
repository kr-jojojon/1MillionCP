	$(function(){
		$('a[href^="#"]').click(function(){
		var adjust = 0;
		var speed = 800;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top + adjust;
		$('body,html').animate({scrollTop:position}, speed, 'swing');
		return false;
	});
	});window.onload=function(){
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
