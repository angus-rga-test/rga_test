(function() {

    angular.module('mst3k').factory(
        'Exhibit',
        [
            'BaseModel',
            'extend',
            ExhibitFactory
        ]
    );

    function ExhibitFactory(
        BaseModel,
        extend
    ) {

        function Exhibit(titleLines, backgroundImageUrl, iFrameVideoLink) {

            this.titleLines = titleLines;
            this.backgroundImage = 'url(' + backgroundImageUrl + ')';
            this.iFrameVideoLink = iFrameVideoLink;

            BaseModel.apply(this);
        }
        extend(Exhibit, BaseModel);

        // Properties
        Exhibit.prototype.titleLines = undefined;
        Exhibit.prototype.backgroundImage = undefined;
        Exhibit.prototype.iFrameVideoLink = undefined;

        // Relations

        // Functions
        Exhibit.prototype.getStyle = getStyle;

        return Exhibit;

        /**
         * Return the style for the exhibit block
         * @returns {*}
         */
        function getStyle() {
            if (this.backgroundImage) {
                return {
                    'background-image': this.backgroundImage
                }
            }
            else {
                return {};
            }
        }

    }

})();