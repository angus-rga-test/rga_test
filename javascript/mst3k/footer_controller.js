(function() {

    angular.module('mst3k').controller(
        'FooterController',
        [
            'IconLink',
            '$element',
            FooterController
        ]
    );

    function FooterController(
        IconLink,
        $element
    ) {
        this.$element = $element;
        this.followLinks = [
            new IconLink('images/icons/follow/google_plus.png', 'https://plus.google.com'),
            new IconLink('images/icons/follow/blogger.png', 'http://www.blogger.com'),
            new IconLink('images/icons/follow/twitter.png', 'http://www.twitter.com'),
            new IconLink('images/icons/follow/youtube.png', 'http://www.youtube.com')
        ];
        this.socialMediaLinks = [
            new IconLink('images/icons/social_media/facebook.png', 'http://www.facebook.com'),
            new IconLink('images/icons/social_media/twitter.png', 'http://www.twitter.com'),
            new IconLink('images/icons/social_media/google_plus.png', 'https://plus.google.com'),
            new IconLink('images/icons/social_media/pinterest.png', 'http://www.pinterest.com')
        ];
        this.scrollToTop = scrollToTop;
    }

    function scrollToTop() {
        angular.element("html, body").animate({
            scrollTop: 0
        }, 300);
    }

})();