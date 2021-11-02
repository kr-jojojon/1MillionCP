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

	let menuBtn = document.querySelector('.menu-btn');
	let headerBox = document.querySelector('#header-box');
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

	$.getJSON("data/display_names.json", function(displayNames){
		for (filename in displayNames) {
	  		let name = displayNames[filename]
	  		// let handle = FANART[i].split('_').slice(1).join('_').split('.')[0].replace('%20', ' ')

	  		let url = "fanart/" + filename

			let contentsWarp = document.getElementsByClassName("contents-warp")[0];
			let contentsBox = document.createElement("div");
			contentsBox.classList.add("contents-box");
			let faFrame = document.createElement("div");
			faFrame.classList.add("fa-frame");
			let contentsName = document.createElement("p");
			let text = document.createTextNode(name);
			contentsName.classList.add("contents-name");
			let anchor = document.createElement("a");
			anchor.setAttribute("href", url);
			anchor.setAttribute("data-lightbox", "image-1");
			anchor.setAttribute("data-title", name);
			anchor.setAttribute("data-alt", "fanart sent by " + name);
			let image = document.createElement("img");
			image.setAttribute("src", url);
			image.setAttribute("loading", "lazy");
			image.setAttribute("alt", name);

			contentsWarp.appendChild(contentsBox);
			contentsBox.appendChild(faFrame);
			contentsBox.appendChild(contentsName);
			faFrame.appendChild(anchor);
			contentsName.appendChild(text);
			anchor.appendChild(image);
		}
	});
});
