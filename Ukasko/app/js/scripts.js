
$(document).ready(function () {

    $('.animationblock img').each(function(){
        var $img = $(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        $.get(imgURL, function(data) {
            var $svg = $(data).find('svg');
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }
            $svg = $svg.removeAttr('xmlns:a');
            if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }
            $img.replaceWith($svg);
        }, 'xml');
    });

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });
 
    $(".footer-nav-toggler").click(function() {
        var target = $(this).attr('data-target');

        $("#" + target + "FooterNav.footer-nav").toggleClass('show');

        return false;
    });

    $(".nice-select").niceSelect();

    $('[data-toggle="collapse"]').click(function() {
        $(this).parent().toggleClass("openned");
    });

    $(function () {
        $('[data-toggle="tooltip"]').tooltip({
            selector: '[rel="tooltip"]'
        })
    });

    $(".agreement .sections-block .nav-link").click(function () {
        $('html,body').animate({
            scrollTop: $('#v-pills-tabContent').offset().top - 50
        }, 1000);
    });
});

window.changeSelectPecrentsLine = function(p){
    if(p<=1) p = 1;
    if(p >= 100) p = 100;
    $('.results_anime_percent-text').text(`${p}%`);
    $('.results_anime_line-scale').css({"width":`${p}%`});

    if(p >= 100){
        setTimeout(function(){
            $('.results_anime').hide("fast")
        }, 1000)
    }
}
