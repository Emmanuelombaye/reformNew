(function ($) {
	"use strict";

	var $window = $(window);
	var headingGen = 0;
	var state = {
		swipers: [],
		initialized: false,
	};

	function hidePreloader() {
		$(".preloader").fadeOut(600);
	}

	function destroy() {
		headingGen += 1;
		if (window.HealthioCursor && typeof window.HealthioCursor.destroy === "function") {
			window.HealthioCursor.destroy();
		}
		if (window.ScrollTrigger && typeof window.ScrollTrigger.getAll === "function") {
			window.ScrollTrigger.getAll().forEach(function (t) {
				t.kill();
			});
		}

		state.swipers.forEach(function (swiper) {
			try {
				swiper.destroy(true, true);
			} catch (e) {}
		});
		state.swipers = [];

		$window.off(".healthio");
		$(document).off(".healthio");
		$("#contactForm").off(".healthio");
		$(".service-item-metal").off(".healthio");

		if ($.fn.magnificPopup) {
			try {
				$(".gallery-items").magnificPopup("destroy");
			} catch (e) {}
			try {
				$(".popup-video").magnificPopup("destroy");
			} catch (e) {}
		}

		$(".responsive-menu .slicknav_menu").remove();
		$(".slicknav_menu").remove();

		$("header.active-sticky-header").css("height", "");
		$("header.active-sticky-header .header-sticky").removeClass("hide active");

		state.initialized = false;
	}

	function initHeadingAnimation() {
		if (typeof gsap === "undefined" || typeof SplitText === "undefined") return;

		gsap.registerPlugin(SplitText);
		if (window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

		if ($(".text-effect").length) {
			$(".text-effect").each(function (index, el) {
				el.split = new SplitText(el, {
					type: "lines,words,chars",
					linesClass: "split-line",
				});

				gsap.set(el.split.chars, {
					opacity: 0.3,
					x: "-7",
				});

				el.anim = gsap.to(el.split.chars, {
					scrollTrigger: {
						trigger: el,
						start: "top 92%",
						end: "top 60%",
						markers: false,
						scrub: 1,
					},
					x: "0",
					y: "0",
					opacity: 1,
					duration: 0.7,
					stagger: 0.2,
				});
			});
		}

		if ($(".text-anime-style-1").length) {
			var staggerAmount1 = 0.05;
			var delayValue1 = 0.5;
			document.querySelectorAll(".text-anime-style-1").forEach(function (element) {
				var animationSplitText = new SplitText(element, { type: "chars, words" });
				gsap.from(animationSplitText.words, {
					duration: 1,
					delay: delayValue1,
					x: 20,
					autoAlpha: 0,
					stagger: staggerAmount1,
					scrollTrigger: { trigger: element, start: "top 85%" },
				});
			});
		}

		if ($(".text-anime-style-2").length) {
			var staggerAmount2 = 0.03;
			var translateXValue = 20;
			var delayValue2 = 0.1;
			var easeType = "power2.out";
			document.querySelectorAll(".text-anime-style-2").forEach(function (element) {
				var animationSplitText = new SplitText(element, { type: "chars, words" });
				gsap.from(animationSplitText.chars, {
					duration: 1,
					delay: delayValue2,
					x: translateXValue,
					autoAlpha: 0,
					stagger: staggerAmount2,
					ease: easeType,
					scrollTrigger: { trigger: element, start: "top 85%" },
				});
			});
		}

		if ($(".text-anime-style-3").length) {
			document.querySelectorAll(".text-anime-style-3").forEach(function (element) {
				if (element.animation) {
					element.animation.progress(1).kill();
					if (element.split) element.split.revert();
				}

				element.split = new SplitText(element, {
					type: "lines,words,chars",
					linesClass: "split-line",
				});
				gsap.set(element, { perspective: 400 });
				gsap.set(element.split.chars, {
					opacity: 0,
					x: "50",
				});

				element.animation = gsap.to(element.split.chars, {
					scrollTrigger: { trigger: element, start: "top 90%" },
					x: "0",
					y: "0",
					rotateX: "0",
					opacity: 1,
					duration: 1,
					ease: Back.easeOut,
					stagger: 0.02,
				});
			});
		}
	}

	function init() {
		destroy();
		hidePreloader();

		if ($(".active-sticky-header").length) {
			function setHeaderHeight() {
				$("header.active-sticky-header").css(
					"height",
					$("header.active-sticky-header .header-sticky").outerHeight()
				);
			}

			$window.on("resize.healthio", setHeaderHeight);
			$window.on("scroll.healthio", function () {
				var fromTop = $(window).scrollTop();
				setHeaderHeight();
				var headerHeight = $("header.active-sticky-header .header-sticky").outerHeight();
				$("header.active-sticky-header .header-sticky").toggleClass("hide", fromTop > headerHeight + 100);
				$("header.active-sticky-header .header-sticky").toggleClass("active", fromTop > 600);
			});
			setHeaderHeight();
		}

		if ($("#menu").length && $.fn.slicknav) {
			$("#menu").slicknav({
				label: "",
				prependTo: ".responsive-menu",
			});
		}

		if ($("a[href='#top']").length) {
			$(document).on("click.healthio", "a[href='#top']", function () {
				$("html, body").animate({ scrollTop: 0 }, "slow");
				return false;
			});
		}

		function addSwiper(selector, options) {
			if (!$(selector).length || typeof Swiper === "undefined") return;
			state.swipers.push(new Swiper(selector, options));
		}

		addSwiper(".testimonial-slider .swiper", {
			slidesPerView: 1,
			speed: 1500,
			spaceBetween: 30,
			loop: true,
			autoplay: { delay: 5000 },
			pagination: { el: ".testimonial-pagination", clickable: true },
			breakpoints: { 768: { slidesPerView: 2 } },
		});

		addSwiper(".testimonial-slider-metal .swiper", {
			slidesPerView: 1,
			speed: 1500,
			spaceBetween: 30,
			loop: true,
			autoplay: { delay: 5000 },
			navigation: {
				nextEl: ".testimonial-button-next-metal",
				prevEl: ".testimonial-button-prev-metal",
			},
		});

		addSwiper(".company-supports-slider-stone .swiper", {
			slidesPerView: 2,
			speed: 2000,
			spaceBetween: 40,
			loop: true,
			autoplay: { delay: 5000 },
			breakpoints: { 768: { slidesPerView: 3 } },
		});

		addSwiper(".expertise-company-supports-slider-stone .swiper", {
			slidesPerView: 2,
			speed: 2000,
			spaceBetween: 20,
			loop: true,
			autoplay: { delay: 5000 },
			breakpoints: {
				767: { slidesPerView: 4 },
				1025: { slidesPerView: 5 },
			},
		});

		addSwiper(".case-study-slider-stone .swiper", {
			slidesPerView: 1,
			speed: 2500,
			spaceBetween: 30,
			loop: true,
			autoplay: { delay: 5000 },
			pagination: { el: ".case-study-pagination-stone", clickable: true },
			breakpoints: {
				767: { slidesPerView: 2 },
				1025: { slidesPerView: 3 },
			},
		});

		addSwiper(".testimonial-slider-stone .swiper", {
			slidesPerView: 1,
			speed: 1500,
			spaceBetween: 30,
			loop: true,
			autoplay: { delay: 5000 },
			pagination: { el: ".testimonials-pagination-stone", clickable: true },
			breakpoints: {
				768: { slidesPerView: 2 },
				1025: { slidesPerView: 3 },
			},
		});

		if ($(".skills-progress-bar").length && $.fn.waypoint) {
			$(".skills-progress-bar").waypoint(
				function () {
					$(".skillbar").each(function () {
						$(this)
							.find(".count-bar")
							.animate(
								{
									width: $(this).attr("data-percent"),
								},
								2000
							);
					});
				},
				{ offset: "70%" }
			);
		}

		if ($("#herovideo").length && $.fn.YTPlayer) {
			$("#herovideo").YTPlayer();
		}

		if ($(".counter").length && $.fn.counterUp) {
			$(".counter").counterUp({ delay: 6, time: 3000 });
		}

		if ($(".reveal").length && typeof gsap !== "undefined") {
			if (window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);
			document.querySelectorAll(".reveal").forEach(function (container) {
				var image = container.querySelector("img");
				if (!image) return;
				var tl = gsap.timeline({
					scrollTrigger: {
						trigger: container,
						toggleActions: "play none none none",
					},
				});
				tl.set(container, { autoAlpha: 1 });
				tl.from(container, 1, {
					xPercent: -100,
					ease: Power2.out,
				});
				tl.from(image, 1, {
					xPercent: 100,
					scale: 1,
					delay: -1,
					ease: Power2.out,
				});
			});
		}

		var thisGen = ++headingGen;
		function runHeadings() {
			if (thisGen !== headingGen) return;
			initHeadingAnimation();
			if (window.ScrollTrigger) ScrollTrigger.refresh();
		}

		if (document.fonts && document.fonts.ready) {
			document.fonts.ready.then(runHeadings);
		} else {
			runHeadings();
		}

		$window.on("load.healthio", function () {
			if (window.ScrollTrigger) ScrollTrigger.refresh();
		});

		var $parallaxie = $(".parallaxie");
		if ($parallaxie.length && $window.width() > 1024 && $.fn.parallaxie) {
			if ($window.width() > 768) {
				$parallaxie.parallaxie({
					speed: 0.55,
					offset: 0,
				});
			}
		}

		if ($(".gallery-items").length && $.fn.magnificPopup) {
			$(".gallery-items").magnificPopup({
				delegate: "a",
				type: "image",
				closeOnContentClick: false,
				closeBtnInside: false,
				mainClass: "mfp-with-zoom",
				image: { verticalFit: true },
				gallery: { enabled: true },
				zoom: {
					enabled: true,
					duration: 300,
					opener: function (element) {
						return element.find("img");
					},
				},
			});
		}

		var $contactform = $("#contactForm");
		if ($contactform.length && $.fn.validator) {
			$contactform.validator({ focus: false }).on("submit.healthio", function (event) {
				if (!event.isDefaultPrevented()) {
					event.preventDefault();
					submitForm();
				}
			});

			function submitForm() {
				$.ajax({
					type: "POST",
					url: "/api/contact",
					data: $contactform.serialize(),
					success: function (text) {
						if (text === "success") {
							formSuccess();
						} else {
							submitMSG(false, text);
						}
					},
				});
			}

			function formSuccess() {
				$contactform[0].reset();
				submitMSG(true, "Message Sent Successfully!");
			}

			function submitMSG(valid, msg) {
				var msgClasses = valid ? "h4 text-success" : "h4 text-danger";
				$("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
			}
		}

		if (typeof WOW !== "undefined") {
			new WOW({
				boxClass: "wow",
				animateClass: "animated",
				offset: 0,
				mobile: true,
				live: true,
			}).init();
		}

		if ($(".popup-video").length && $.fn.magnificPopup) {
			$(".popup-video").magnificPopup({
				type: "iframe",
				mainClass: "mfp-fade",
				removalDelay: 160,
				preloader: false,
				fixedContentPos: true,
			});
		}

		var $service_item_list_metal = $(".service-item-list-metal");
		if ($service_item_list_metal.length) {
			var $service_item_metal = $service_item_list_metal.find(".service-item-metal");
			if ($service_item_metal.length) {
				$service_item_metal.on("mouseenter.healthio", function () {
					if (!$(this).hasClass("active")) {
						$service_item_metal.removeClass("active");
						$(this).addClass("active");
					}
				});
			}
		}

		if (window.HealthioCursor && typeof window.HealthioCursor.init === "function") {
			window.HealthioCursor.init();
		}

		state.initialized = true;
	}

	window.HealthioTheme = {
		init: init,
		destroy: destroy,
		hidePreloader: hidePreloader,
		isInitialized: function () {
			return state.initialized;
		},
	};

	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", function () {
			window.HealthioTheme.init();
		});
	} else {
		window.HealthioTheme.init();
	}
})(jQuery);
