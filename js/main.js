$(function(){
	
	visualViewport.onresize = function() {
		let viewportWidth = window.innerWidth;
		console.log(window.innerWidth)
	};


	// $('a[href^="#"]').click(function(){
	// 	var adjust = 0;
	// 	var speed = 800;
	// 	var href= $(this).attr("href");
	// 	var target = $(href == "#" || href == "" ? 'html' : href);
	// 	var position = target.offset().top + adjust;
	// 	$('body,html').animate({scrollTop:position}, speed, 'swing');
	// 	return false;
	// 	});

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
	  		let url = "fanart/" + filename .webp

			let contentsWarp = document.getElementsByClassName("contents-warp")[0];
			let contentsBox = document.createElement("div");
			contentsBox.classList.add("contents-box");
			
			let faFrame = document.createElement("div");
			faFrame.classList.add("fa-frame");
			
			let contentsName = document.createElement("p");
			contentsName.classList.add("contents-name");

			let text = document.createTextNode(name);
			
			let anchor = document.createElement("a");
			anchor.setAttribute("href", url);
			anchor.setAttribute("data-lightbox", "image-1");
			anchor.setAttribute("data-title", name);
			anchor.setAttribute("data-alt", "fanart sent by " + name);
			
			let image = document.createElement("img");
			image.setAttribute("src", url);
			image.setAttribute("width", "330px");
			image.setAttribute("height", "200px");
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


function switchLocalisation (element) {
	function localisationDisplayStyle (lang, display) {
		document.querySelectorAll("[lang='" + lang + "']").forEach(function (node) {
			node.style.display = display;
		});
	}

	function setLocalisation (from, to) {
		localisationDisplayStyle(from, 'none')
		localisationDisplayStyle(to, 'block')
		document.querySelector("[localisation]").setAttribute("localisation", to);
		document.querySelector("#flag").setAttribute("src", "img/" + {"ja": "en", "en": "ja"}[to] + "-flag.webp");
		document.querySelector("#flag").setAttribute("alt", {"ja": "日本語", "en": "english language"}[to]);
	}

	if (element.attributes["localisation"].value == "en") {setLocalisation("en", "ja")}
	else {setLocalisation("ja", "en")}
}
