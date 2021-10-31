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
		const headercontents_box = document.querySelector('#header-contents_box');
		let menuOpen = false;
		menuBtn.addEventListener('click', () => {
			if(!menuOpen) {
				menuBtn.classList.add('open');
				headercontents_box.classList.add('open');
				menuOpen = true;
			} else {
				menuBtn.classList.remove('open');
				headercontents_box.classList.remove('open');
				menuOpen = false;
			}
		});

		var folder = "/img/fanart/";

		$.ajax({url: folder, success: function (data) {
			$(data).find("a").attr("href", function (i, val) {
				if( val.match(/\.(jpe?g|png|gif)$/) ) {
					name = val.split('_').slice(1).join('_').split('.')[0].replace('%20', ' ')
					console.log(val)
					contents_warp = document.getElementsByClassName("contents-warp")[0];
					contents_box = document.createElement("div");
					contents_box.classList.add("contents-box");
					fa_frame = document.createElement("div");
					fa_frame.classList.add("fa-frame");
					contents_name = document.createElement("p");
					text = document.createTextNode(name);
					contents_name.classList.add("contents-name");
					anchor = document.createElement("a");
					anchor.setAttribute("href", folder + val);
					anchor.setAttribute("data-lightbox", "image-1");
					anchor.setAttribute("data-title", name);
					anchor.setAttribute("data-alt", "fanart sent by " + name);
					image = document.createElement("img");
					image.setAttribute("src", folder + val);
					image.setAttribute("alt", name);

					contents_warp.appendChild(contents_box);
					contents_box.appendChild(fa_frame);
					contents_box.appendChild(contents_name);
					fa_frame.appendChild(anchor);
					contents_name.appendChild(text);
					anchor.appendChild(image);
				};
			});
		}
	});
});
