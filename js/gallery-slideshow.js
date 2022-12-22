$(function () {
    let imgWidth = $(".gallery-item").width();
    let imgIndex = 0;
    let timer;

    // Add balls equal to amount of images in gallery
    function insertBalls() {
        let imageCount = $('.slide-gallery .gallery-item').length;
        $('.balls').html('<span data-index="0" class="ball active"></span>');
        
        for (let i = 1; i < imageCount; i++) {
            $('.balls').append('<span data-index="' + i + '" class="ball"></span>');
        }
    }
    insertBalls();

    // The previos button effect function
    $(".gallery-btn-prev").on("click", function () {
        goToPreviousImage();
    });

    // Go to previous image
    function goToPreviousImage() {
        if (imgIndex <= 0) {
            imgIndex = $(".slide-gallery .gallery-item").length;
        }
        imgIndex--;
        $(".gallery-images").css({
            left: -imgWidth * imgIndex + "px"
        });
        $(".ball").eq(imgIndex).addClass("active").siblings().removeClass("active");

        clearInterval(timer);
        autoRun();
    }

    // The next button effect function
    $(".gallery-btn-next").on("click", function () {
        goToNextImage();
    });

    function goToNextImage() {
        imgIndex++;
        $(".ball").eq(imgIndex).addClass("active").siblings().removeClass("active");
        if (imgIndex >= $(".slide-gallery .gallery-item").length) {
            imgIndex = 0;
            $(".ball").eq(imgIndex).addClass("active").siblings().removeClass("active");
        }
        $(".gallery-images").css({
            left: -imgWidth * imgIndex + "px"
        });

        clearInterval(timer);
        autoRun();
    }

    // The balls functions
    $(".ball").on("click", function () {
        imgIndex = $(this).data('index');
        clearInterval(timer);
        autoRun();

        $(this).addClass("active").siblings().removeClass("active");
        $(".gallery-images").css({
            left: -imgWidth * $(this).index() + "px"
        });
    });

    // Auto run
    const timeInterval = 5000;
    
    function autoRun() {
        timer = setInterval(function () {
            imgIndex++;
            $(".ball").eq(imgIndex).addClass("active").siblings().removeClass("active");
            if (imgIndex >= $(".slide-gallery .gallery-item").length) {
                imgIndex = 0;
                $(".ball").eq(imgIndex).addClass("active").siblings().removeClass("active");
            }
            $(".gallery-images").css({
                left: -imgWidth * imgIndex + "px"
            });
        }, timeInterval);
    }
    autoRun();

    // Pause auto-play on gallery on focus/hover on caption
    $("figcaption a").on({
        focus: function () {
            clearInterval(timer);
        },
        blur: function () {
            autoRun();
        },
        mouseenter: function () {
            clearInterval(timer);
        },
        mouseleave: function () {
            autoRun();
        }
    });

    // Make pressing enter on "next" button same as clicking
    $(".gallery-btn-next").keyup(function (event) {
        if (event.keyCode === 13) {
            $(".gallery-btn-next").click();
        }
    });

    // Make pressing enter on "previous" button same as clicking
    $(".gallery-btn-prev").keyup(function (event) {
        if (event.keyCode === 13) {
            $(".gallery-btn-prev").click();
        }
    });
});