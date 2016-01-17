(function() {

    angular.module('mst3k').factory(
        'IconLink',
        [
            'BaseModel',
            'extend',
            IconLinkFactory
        ]
    );

    function IconLinkFactory(
        BaseModel,
        extend
    ) {

        /**
         * Handle an icon link
         * @param icon
         * @param link
         * @constructor
         */
        function IconLink(icon, link) {
            this.icon = icon;
            this.link = link;
            BaseModel.apply(this);
        }
        extend(IconLink, BaseModel);
        return IconLink;

        // Properties
        IconLink.prototype.icon = undefined;
        IconLink.prototype.link = undefined;

    }

})();