$("document").ready(function () {

    $(".img-container img:first-child").addClass("active");

    let nbrImgs;
    let counter;
    let leftValue;

    nbrImgs = $(".img-container img").length;

    function init(elem) {
        counter = $(".img-container img.active").index();
        leftValue = counter * -100;
    }

    function handleCarrousel(scenario) {

        let eqPosition;

        if (scenario == 1) {
            eqPosition = counter - 1;
            leftValue += 100;
        } else {
            eqPosition = counter + 1;
            leftValue -= 100;
        }
        $(".img-container img").removeClass("active");
        $(".img-container img").eq(eqPosition).addClass("active");
        $(".img-container").animate({ left: leftValue + "%" }, 1000);
    }

    $(".arrow-left").click(function () {
        init();
        if (counter > 0) {
            handleCarrousel(1);
        }
    });

    $(".arrow-right").click(function () {
        init();
        if (counter < nbrImgs - 1) {
            handleCarrousel(2);
        }
    });

    setInterval(function () {
        init();
        if (counter < nbrImgs - 1) {
            handleCarrousel(2);
        } else {
            $(".img-container img").removeClass("active");
            $(".img-container img").eq(0).addClass("active");
            $(".img-container").animate({ left: "0" }, 1000);
        }
    }, 4000)

});