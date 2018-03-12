$('.accordion__link').on('click', function(e) {
    e.preventDefault();

    var $this = $(this),
        item = $this.closest('.accordion__item'),
        list = $this.closest('.banner-accordion'),
        items = list.find('.accordion__item'),
        content = item.find('.accordion__inner'),
        otherContent = list.find('.accordion__inner'),
        link = $this.closest('.accordion__link'),
        links = list.find('.accordion__link'),
        headers = list.find('.accordion__subheader'),
        header = item.find('.accordion__subheader'),
        duration = 300;

    if (!item.hasClass('.active')) {
        items.removeClass('.active');
        item.addClass('.active');
        links.css({
            'background-color': '#fff',
            'color': '#000'
        })
             .text('+');
        link.css({
            'background-color': '#f4b60d',
            'color': '#ffffff'
        })
            .text('-');
        headers.css({
            'color': '#000000',
            'background-color': '#ffffff'
        });
        header.css({
            'color': '#ffffff',
            'background-color': '#f4b60d'
        });

        otherContent.stop().slideUp(duration);
        content.stop().slideDown(duration);
    } else {
        content.stop().slideUp(duration);
        item.removeClass('.active');
        links.css({
            'background-color': '#fff',
            'color': '#000'
        })
            .text('+');
        header.css({
            'color': '#000000',
            'background-color': '#ffffff'
        });
    }
});
