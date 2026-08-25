(function (window, $) {
	"use strict";

	if (!window || !$) return;

	var instance = null;

	function Cursor(options) {
		this.options = $.extend(
			true,
			{
				container: "body",
				speed: 0.7,
				ease: "expo.out",
				visibleTimeout: 300,
			},
			options
		);
		this.body = $(this.options.container);
		this.el = $('<div class="cb-cursor"></div>');
		this.text = $('<div class="cb-cursor-text"></div>');
		this.pos = { x: -100, y: -100 };
		this.stick = false;
		this.visible = false;
		this.visibleInt = null;
		this.init();
	}

	Cursor.prototype.init = function () {
		this.el.append(this.text);
		this.body.append(this.el);
		this.bind();
		this.move(-window.innerWidth, -window.innerHeight, 0);
	};

	Cursor.prototype.bind = function () {
		var self = this;

		this.body
			.on("mouseleave.healthioCursor", function () {
				self.hide();
			})
			.on("mouseenter.healthioCursor", function () {
				self.show();
			})
			.on("mousemove.healthioCursor", function (e) {
				self.pos = {
					x: self.stick ? self.stick.x - (self.stick.x - e.clientX) * 0.15 : e.clientX,
					y: self.stick ? self.stick.y - (self.stick.y - e.clientY) * 0.15 : e.clientY,
				};
				self.update();
			})
			.on("mousedown.healthioCursor", function () {
				self.setState("-active");
			})
			.on("mouseup.healthioCursor", function () {
				self.removeState("-active");
			})
			.on("mouseenter.healthioCursor", "a,input,textarea,button", function () {
				self.setState("-pointer");
			})
			.on("mouseleave.healthioCursor", "a,input,textarea,button", function () {
				self.removeState("-pointer");
			})
			.on("mouseenter.healthioCursor", "iframe", function () {
				self.hide();
			})
			.on("mouseleave.healthioCursor", "iframe", function () {
				self.show();
			})
			.on("mouseenter.healthioCursor", "[data-cursor]", function () {
				self.setState(this.dataset.cursor);
			})
			.on("mouseleave.healthioCursor", "[data-cursor]", function () {
				self.removeState(this.dataset.cursor);
			})
			.on("mouseenter.healthioCursor", "[data-cursor-text]", function () {
				self.setText(this.dataset.cursorText);
			})
			.on("mouseleave.healthioCursor", "[data-cursor-text]", function () {
				self.removeText();
			})
			.on("mouseenter.healthioCursor", "[data-cursor-stick]", function () {
				self.setStick(this.dataset.cursorStick);
			})
			.on("mouseleave.healthioCursor", "[data-cursor-stick]", function () {
				self.removeStick();
			});
	};

	Cursor.prototype.unbind = function () {
		this.body.off(".healthioCursor");
	};

	Cursor.prototype.setState = function (state) {
		this.el.addClass(state);
	};

	Cursor.prototype.removeState = function (state) {
		this.el.removeClass(state);
	};

	Cursor.prototype.toggleState = function (state) {
		this.el.toggleClass(state);
	};

	Cursor.prototype.setText = function (text) {
		this.text.html(text);
		this.el.addClass("-text");
	};

	Cursor.prototype.removeText = function () {
		this.el.removeClass("-text");
		this.text.html("");
	};

	Cursor.prototype.setStick = function (el) {
		var target = $(el);
		var node = target.get(0);
		if (!node) return;
		var bound = node.getBoundingClientRect();
		this.stick = {
			y: bound.top + target.height() / 2,
			x: bound.left + target.width() / 2,
		};
		this.move(this.stick.x, this.stick.y, 5);
	};

	Cursor.prototype.removeStick = function () {
		this.stick = false;
	};

	Cursor.prototype.update = function () {
		this.move();
		this.show();
	};

	Cursor.prototype.move = function (x, y, duration) {
		if (typeof gsap === "undefined") return;
		var nextX = typeof x === "number" ? x : this.pos.x;
		var nextY = typeof y === "number" ? y : this.pos.y;
		gsap.to(this.el, {
			x: nextX,
			y: nextY,
			force3D: true,
			overwrite: true,
			ease: this.options.ease,
			duration: this.visible ? (typeof duration === "number" ? duration : this.options.speed) : 0,
		});
	};

	Cursor.prototype.show = function () {
		if (this.visible) return;
		clearTimeout(this.visibleInt);
		this.el.addClass("-visible");
		var self = this;
		this.visibleInt = setTimeout(function () {
			self.visible = true;
		}, 0);
	};

	Cursor.prototype.hide = function () {
		clearTimeout(this.visibleInt);
		this.el.removeClass("-visible");
		var self = this;
		this.visibleInt = setTimeout(function () {
			self.visible = false;
		}, this.options.visibleTimeout);
	};

	Cursor.prototype.destroy = function () {
		this.unbind();
		clearTimeout(this.visibleInt);
		this.el.remove();
	};

	function isDesktop() {
		return window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
	}

	window.HealthioCursor = {
		init: function () {
			if (!isDesktop()) {
				this.destroy();
				return null;
			}
			this.destroy();
			instance = new Cursor();
			document.documentElement.classList.add("has-cb-cursor");
			return instance;
		},
		destroy: function () {
			if (instance) {
				instance.destroy();
				instance = null;
			}
			$(".cb-cursor").remove();
			document.documentElement.classList.remove("has-cb-cursor");
		},
		get: function () {
			return instance;
		},
	};

	// Do not auto-boot here — Next.js hydration must finish first.
	// HealthioScripts / HealthioTheme call HealthioCursor.init().
})(window, window.jQuery);
