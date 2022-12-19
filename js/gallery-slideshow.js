$(function () {
    var imgWidth = $(".gallery-item").width(), imgIndex = 0, timer;
    
    function insertBalls() {
        let imageCount = $('.slide-gallery .gallery-item').length;
        $('.balls').html('<span class="ball active"></span>');
        
        let ballDiv = $('<span class="ball"></span>');
        for (let i = 0; i < imageCount - 1; i++) {
            $('.balls').append(ballDiv);
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
    $(".gallery-btn-next , .gallery-btn-prev").on({
        mouseenter: function () {
            clearInterval(timer);
        },
        mouseleave: function () {
            autoRun();
        }
    });
});