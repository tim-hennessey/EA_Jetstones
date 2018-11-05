var app = app || {};


app.Animation = (function () {

    var t = TweenMax;
    var tl1 = new TimelineMax();
    var tl2 = new TimelineMax();
    var txt01 = document.getElementById('txt01');
    var txt02 = document.getElementById('txt02');
    var txt03 = document.getElementById('txt03');
    var txt04 = document.getElementById('txt04');
    var cta = document.getElementById('cta');
    var buttonExit = document.getElementById('button-exit');
    var plug = document.getElementById('plug');


    // --------------------------------------------------------------------------------------
    // set default properties
    function initialize() {
        t.set(banner, {opacity: 1});

        buttonExit.addEventListener('mouseover', function () {
            tl2.to(cta, .1, {backgroundColor: "rgba(0, 192, 255, .5)"})
                .to(cta, .1, {backgroundColor: "rgba(0, 192, 255, 1)"})
                .to(cta, .1, {backgroundColor: "rgba(0, 192, 255, .5)"})
                .to(cta, .1, {backgroundColor: "rgba(0, 192, 255, 1)"});
        });

        buttonExit.addEventListener('mouseout', function () {
            TweenMax.to(cta, .25, {backgroundColor: "rgba(0, 192, 255, 1)"});
        });

    }

    // --------------------------------------------------------------------------------------
    // Starts the animation
    function start() {


        tl1.to(txt01, .1, {autoAlpha: 1})
            .to(txt01, .1, {autoAlpha: .5})
            .to(txt01, .1, {autoAlpha: 1})

            .to(txt02, .1, {autoAlpha: 1})
            .to(txt02, .1, {autoAlpha: .5})
            .to(txt02, .1, {autoAlpha: 1})

            .to(txt03, .1, {autoAlpha: 1}, "+=.5")
            .to(txt03, .1, {autoAlpha: .5})
            .to(txt03, .1, {autoAlpha: 1})

            .to(txt04, .1, {autoAlpha: 1})
            .to(txt04, .1, {autoAlpha: .5})
            .to(txt04, .1, {autoAlpha: 1})

            .to(cta, .1, {autoAlpha:1})

            .to(plug, .1, {autoAlpha: 1})
            .to(plug, .1, {autoAlpha: .5})
            .to(plug, .1, {autoAlpha: 1});

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
