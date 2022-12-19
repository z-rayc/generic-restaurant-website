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

    // The next button effect function
    $(".gallery-btn-next").on("click", function () {
        imgIndex++;
        $(".ball").eq(imgIndex).addClass("active").siblings().removeClass("active");
        if (imgIndex >= $(".gallery-item").length) {
            imgIndex = 0;
            $(".ball").eq(imgIndex).addClass("active").siblings().removeClass("active");
        }
        $(".gallery-images").css({
            left: -imgWidth * imgIndex + "px"
        });
    });

    // The previos button effect function
    $(".gallery-btn-prev").on("click", function () {
        if (imgIndex <= 0) {
            imgIndex = $(".gallery-item").length;
        }
        imgIndex--;
        $(".gallery-images").css({
            left: -imgWidth * imgIndex + "px"
        });
        $(".ball").eq(imgIndex).addClass("active").siblings().removeClass("active");
    });

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
    const timeInterval = 4000;
    
    function autoRun() {
        timer = setInterval(function () {
            imgIndex++;
            $(".ball").eq(imgIndex).addClass("active").siblings().removeClass("active");
            if (imgIndex >= $(".gallery-item").length) {
                imgIndex = 0;
                $(".ball").eq(imgIndex).addClass("active").siblings().removeClass("active");
            }
            $(".gallery-images").css({
                left: -imgWidth * imgIndex + "px"
            });
        }, timeInterval);
    }

    autoRun();
    $("figcaption, .gallery-btn-next , .gallery-btn-prev").on({
        mouseenter: function () {
            clearInterval(timer);
        },
        mouseleave: function () {
            autoRun();
        }
    });
});