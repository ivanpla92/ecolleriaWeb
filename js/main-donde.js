$('document').ready(function() {//funcion de vegas que realiza el efecto de los backgrounds
	$.vegas('slideshow', {
		backgrounds : [{
			src : 'img/2035._.jpg',
			fade : 1000
		}, {
			src : 'img/7008.766.09.jpg',
			fade : 1000
		}, {
			src : 'img/7014.15.294.jpg',
			fade : 1000
		}, {
			src : 'img/7025.26.79.jpg',
			fade : 1000
		}, {
			src : 'img/7027.jpg',
			fade : 1000
		}, {
			src : 'img/7028.24.29.jpg',
			fade : 1000
		}, {
			src : 'img/7055._.jpg',
			fade : 1000
		}, {
			src : 'img/7060.1.2.jpg',
			fade : 1000
		}, {
			src : 'img/7104.5.6.jpg',
			fade : 1000
		}, {
			src : 'img/7143.44.45.jpg',
			fade : 1000
		}, {
			src : 'img/7196.7.8.jpg',
			fade : 1000
		}, {
			src : 'img/7252.3.4.jpg',
			fade : 1000
		}, {
			src : 'img/7293.6.8.jpg',
			fade : 1000
		}, {
			src : 'img/7331.jpg',
			fade : 1000
		}, {
			src : 'img/7830.1.2.jpg',
			fade : 1000
		}, {
			src : 'img/7838._2.jpg',
			fade : 1000
		}, {
			src : 'img/7863.44.48.jpg',
			fade : 1000
		}, {
			src : 'img/9070._._.jpg',
			fade : 1000
		}, {
			src : 'img/9322.jpg',
			fade : 1000
		}, {
			src : 'img/9323._._.jpg',
			fade : 1000
		}, {
			src : 'img/9455.6.jpg',
			fade : 1000
		}, {
			src : 'img/9461.2.3.jpg',
			fade : 1000
		}, {
			src : 'img/9480._.jpg',
			fade : 1000
		}, {
			src : 'img/9523-1.jpg',
			fade : 1000
		}, {
			src : 'img/9622.23.jpg',
			fade : 1000
		}, {
			src : 'img/9658.9.jpg',
			fade : 1000
		}, {
			src : 'img/9684.5.jpg',
			fade : 1000
		}, {
			src : 'img/9693.4.jpg',
			fade : 1000
		}, {
			src : 'img/9700.1.jpg',
			fade : 1000
		}, {
			src : 'img/9707.08.jpg',
			fade : 1000
		}, {
			src : 'img/9710.11.jpg',
			fade : 1000
		}, {
			src : 'img/9737.jpg',
			fade : 1000
		}, {
			src : 'img/9740.jpg',
			fade : 1000
		}, {
			src : 'img/10282.81.jpg',
			fade : 1000
		}, {
			src : 'img/10293.jpg',
			fade : 1000
		}]
	});

	$('ul li:has(ul)').hover(function(e) {
		$(this).find('ul').css({
			display : "block"
		});
	}, function(e) {
		$(this).find('ul').css({
			display : "none"
		});
	});
	$("#textoFooter").hover(function(e) {
		$("#redesSociales").css("opacity", ".3");
	}, function(e) {
		$("#redesSociales").css("opacity", ".8");

	});

	$(".mapa").hover(function(e) {
		$(".mapa").css("z-index", "3");
	}, function(e) {
		$(".mapa").css("z-index", "2");
		$("#logo").css("z-index", "3");

	});

});
