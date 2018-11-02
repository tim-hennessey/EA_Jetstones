var app = app || {};


app.Animation = (function () {

    var t = TweenMax;
    var tl1 = new TimelineMax();
    var txt01 = document.getElementById('txt01');
    var txt02 = document.getElementById('txt02');
    var txt03 = document.getElementById('txt03');
    var txt04 = document.getElementById('txt04');
    var txt05 = document.getElementById('txt05');
    var txt06 = document.getElementById('txt06');
    var txt07 = document.getElementById('txt07');
    var txt08 = document.getElementById('txt08');
    var txt09 = document.getElementById('txt09');
    var txt10 = document.getElementById('txt10');
    var plug = document.getElementById('plug');
    var text = [txt01, txt02, txt03, txt04, txt05, txt06, txt07, txt08, txt09, txt10, plug];


    // --------------------------------------------------------------------------------------
    // set default properties
    function initialize() {
        t.set(banner, {opacity: 1});
        t.set(text, {opacity: 0});

    }

    // --------------------------------------------------------------------------------------
    // Starts the animation
    function start() {

        tl1.staggerTo(text, .1, {autoAlpha:1}, .2)
            .staggerTo(text, .1, {autoAlpha:.5}, .2, "-=2")
            .staggerTo(text, .1, {autoAlpha:1}, .2, "-=2")
            .staggerTo(text, .1, {autoAlpha:.5}, .2, "-=2")
            .staggerTo(text, .1, {autoAlpha:1}, .2, "-=2");
        

    }

    // --------------------------------------------------------------------------------------
    // Stops the animation
    function stop() {
        console.log("stopping animation");
    }

    // --------------------------------------------------------------------------------------
    // Publicly accessible methods and properties
    return {
        initialize: initialize,
        start: start,
        stop: stop
    }

})();
