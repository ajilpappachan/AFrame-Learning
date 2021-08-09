AFRAME.registerComponent("animate-on-gaze", {
	schema: {
		value: { default: true },
	},

	init: function () {
		const data = this.data;
		const el = this.el;

		el.setAttribute("animation", "pauseEvents", "pause");
		el.setAttribute("animation", "resumeEvents", "play");

		el.addEventListener("mouseenter", function () {
			el.emit(data.value ? "play" : "pause");
		});

		el.addEventListener("mouseleave", function () {
			el.emit(data.value ? "pause" : "play");
		});
	},
});
