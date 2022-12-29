$(function() {
    $('header').load('./header.html', function() {
        $(this).children(':first').unwrap();
    });

    $('footer').load('./footer.html', function() {
        $(this).children(':first').unwrap();
    });
});