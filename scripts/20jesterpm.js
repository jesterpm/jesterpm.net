$(document).ready(function()
{
    $('div.screenshot a').lightBox();

    $(document).click(function() {
        hideFullsize();
    });

    $(document).keyup(function(e) {
        if (e.keyCode == 27) {
            hideFullsize();
        }
    });

    $('article.blog p a:has(img)').click(function(e) {
        $('#fullsize img').attr('src', $(this).attr('href'));
        showFullsize();
        e.stopPropagation();
        return false;
    });

    $('article.blog p a:has(img)').mouseenter(function (e) {
        var img = $(this).children('img');
        img.after("<p>" + img.attr('alt') + "</p>");
    }).mouseleave(function (e) {
        var img = $(this).children('img');
        img.next('p').remove();
    });
});

function showFullsize() {
    $('#fullsize').show();
    $('body').css('overflow', 'hidden');
}

function hideFullsize() {
    $("#fullsize").hide();
    $('body').css('overflow', 'auto');
}
