AFRAME.registerComponent("animate-on-gaze", {
	schema: {
		value: { default: true },
	},

	init: function () {
		const data = this.data;
		const el = this.el;

		el.addEventListener("mouseenter", function () {
			el.setAttribute("animation", "enabled", data.value);
		});

		el.addEventListener("mouseleave", function () {
			el.setAttribute("animation", "enabled", !data.value);
		});
	},
});
