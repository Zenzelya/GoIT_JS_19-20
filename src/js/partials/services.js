$('.services__item').hover(
    function() {
        $(this).find('.services__overlay')
               .css({
                'display': 'block',
                'cursor': 'pointer'
                });
        $(this).find('.services__subheader')
               .css({
                'color': '#f4b60d',
                'cursor': 'pointer'
                });
    },
    function() {
        $(this).find('.services__overlay')
               .css({'display': 'none'});
        $(this).find('.services__subheader')
            .css({
            'color': '#ffffff',
            'cursor': 'pointer'
        });
    }
);
