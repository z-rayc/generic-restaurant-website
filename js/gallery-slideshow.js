$(function () {
    let imgWidth = $(".gallery-item").width();
    let imgIndex = 0;
    let timer;

    // Add dots equal to amount of images in gallery
    function insertBalls() {
        let imageCount = $('.slide-gallery .gallery-item').length;
        $('.dots').html('<span data-index="0" class="dot active"></span>');
        
        for (let i = 1; i < imageCount; i++) {
            $('.dots').append('<span data-index="' + i + '" class="dot"></span>');
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
        $(".dot").eq(imgIndex).addClass("active").siblings().removeClass("active");

        clearInterval(timer);
        autoRun();
    }

    // The next button effect function
    $(".gallery-btn-next").on("click", function () {
        goToNextImage();
    });

    function goToNextImage() {
        imgIndex++;
        $(".dot").eq(imgIndex).addClass("active").siblings().removeClass("active");
        if (imgIndex >= $(".slide-gallery .gallery-item").length) {
            imgIndex = 0;
            $(".dot").eq(imgIndex).addClass("active").siblings().removeClass("active");
        }
        $(".gallery-images").css({
            left: -imgWidth * imgIndex + "px"
        });

        clearInterval(timer);
        autoRun();
    }

    // The dots functions
    $(".dot").on("click", function () {
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
            $(".dot").eq(imgIndex).addClass("active").siblings().removeClass("active");
            if (imgIndex >= $(".slide-gallery .gallery-item").length) {
                imgIndex = 0;
                $(".dot").eq(imgIndex).addClass("active").siblings().removeClass("active");
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
});