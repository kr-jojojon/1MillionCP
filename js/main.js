const FANART = `
sss_mspink_y.jpg
sss_TE___jin.jpg
sss_aobushi.jpg
2i_piyokinoko.png
1i_piyokinoko.jpg
C4_Tatsuroti.png
2b_BlueOverflag.jpg
sss_Tempura Person.jpg
2k_tokitosonem.jpg
1s_LeslieEmpty.png
1s_LeslieEmpty.jpg
2s_Soab.png
2s_ykmn_illust.jpg
2a_ArKhey.jpg
`.split('\n')


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
	});

	for (let i = 0; i < FANART.length; i++) {
		if (FANART[i] != ""){
	  		name = FANART[i].split('_').slice(1).join('_').split('.')[0].replace('%20', ' ')
	  		url = "fanart/" + FANART[i]
			console.log("name: " + name + "url: " + url)
			contentsWarp = document.getElementsByClassName("contents-warp")[0];
			contentsBox = document.createElement("div");
			contentsBox.classList.add("contents-box");
			faFrame = document.createElement("div");
			faFrame.classList.add("fa-frame");
			contentsName = document.createElement("p");
			text = document.createTextNode(name);
			contentsName.classList.add("contents-name");
			anchor = document.createElement("a");
			anchor.setAttribute("href", url);
			anchor.setAttribute("data-lightbox", "image-1");
			anchor.setAttribute("data-title", name);
			anchor.setAttribute("data-alt", "fanart sent by " + name);
			image = document.createElement("img");
			image.setAttribute("src", url);
			image.setAttribute("alt", name);

			contentsWarp.appendChild(contentsBox);
			contentsBox.appendChild(faFrame);
			contentsBox.appendChild(contentsName);
			faFrame.appendChild(anchor);
			contentsName.appendChild(text);
			anchor.appendChild(image);
	  	}
	}
});
