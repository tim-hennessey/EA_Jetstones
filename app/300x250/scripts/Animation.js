var app = app || {};


app.Animation = (function () {

    var t = TweenMax;



	// --------------------------------------------------------------------------------------
	// set default properties
	function initialize() {
        t.set(banner, {opacity:1});

	}

	// --------------------------------------------------------------------------------------
	// Starts the animation
	function start() {

	}

	// --------------------------------------------------------------------------------------
	// Stops the animation
	function stop() {
		console.log("stopping animation");
	}

	// --------------------------------------------------------------------------------------
	// Publicly accessible methods and properties
	return {
		initialize:initialize,
		start:start,
		stop:stop
	}

})();
