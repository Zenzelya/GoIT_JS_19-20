$('.reasons__more')
    .hover(
        function() {
            $(this).find('.reasons__more--text')
                   .css({
                    'color': '#248cec',
                    'cursor': 'pointer'
                });
            $(this).find('.reasons__more--arrow')
                   .css({
                    'color': '#8a8a8a',
                    'cursor': 'pointer'
                });
        },
        function() {
            $(this).find('.reasons__more--text')
                .css({
                'color': '#000000'
            });
            $(this).find('.reasons__more--arrow')
                .css({
                'color': '#248cec',
            });
        }
    );
$('.reasons__more').on('click', function(e) {
    e.preventDefault();
    var parent = $(this).parents();
    if (parent.children('.reasons__text').css('overflow') == 'hidden') {
        parent.children('.reasons__text').css({
            'overflow': 'visible',
            'height': 'auto'
        });
        $(this).find('.reasons__more--text')
            .text('Read Less');
    } else {
        parent.children('.reasons__text').css({
            'overflow': 'hidden',
            'height': '54px'
        });
        $(this).find('.reasons__more--text')
            .text('Read More');
    }
});

