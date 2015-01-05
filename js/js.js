function fullscreenClick(e) {
    $('#fullsize img').attr('src', $(this).attr('href'));
    showFullsize();
    e.stopPropagation();
    return false;
}

$(document).ready(function()
{
    $(document).click(function() {
        hideFullsize();
    });

    $(document).keyup(function(e) {
        if (e.keyCode == 27) {
            hideFullsize();
        }
    });

    $('p.image a:has(img)').click(fullscreenClick);
    $('.screenshot a:has(img)').click(fullscreenClick);
    $('a.js-thumbnail:has(img)').click(fullscreenClick);

    $('p.image a:has(img)').mouseenter(function (e) {
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
