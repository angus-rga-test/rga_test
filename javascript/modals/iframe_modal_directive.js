(function() {

    angular.module('modals').directive(
        'iFrameModal',
        [
            IFrameModal
        ]
    );

    /**
     * Directive handler for modals
     * @returns {object} The directive objects for a modal
     */
    function IFrameModal() {

        var directive = {
            restrict: 'E',
            scope: {
                visible: '=',
                iFrameLink: '='
            },
            controller: IFrameModalController,
            controllerAs: 'iFrameModal',
            bindToController: true,
            templateUrl: 'templates/modals/iframe_modal.html'
        };
        return directive;

    }

    function IFrameModalController() {}

})();
