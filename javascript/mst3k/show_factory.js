(function() {

    angular.module('mst3k').factory(
        'Show',
        [
            'BaseModel',
            'extend',
            'relationManager',
            'Exhibit',
            ShowFactory
        ]
    );

    function ShowFactory(
        BaseModel,
        extend,
        relationManager,
        Exhibit
    ) {

        /**
         * Contain information about a show
         * @constructor
         */
        function Show() {
            BaseModel.apply(this);
        }
        extend(Show, BaseModel);

        // Relations
        relationManager.registerHasManyRelation(Show, 'exhibits', Exhibit);

        return Show;

        // Properties
        Show.prototype.summaryTemplate = undefined;
        Show.prototype.iFrameVideoLink = undefined;
        Show.prototype.exhibitHeaderTemplate = undefined;
        Show.prototype.exhibits = undefined;

    }

})();