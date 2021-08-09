AFRAME.registerComponent("show-on-gaze", {
	schema: {
		value: { default: true },
	},

	init: function () {
		const data = this.data;
		const el = this.el;

		el.setAttribute("visible", !data.value);

		el.parentNode.addEventListener("mouseenter", function () {
			el.setAttribute("visible", data.value);
		});

		el.parentNode.addEventListener("mouseleave", function () {
			el.setAttribute("visible", !data.value);
		});
	},
});
