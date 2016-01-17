(function() {

    angular.module('modals').directive(
        'modal',
        [
            Modal
        ]
    );

    /**
     * Directive handler for modals
     * @returns {object} The directive objects for a modal
     */
    function Modal() {

        var directive = {
            restrict: 'E',
            scope: {
                visible: '='
            },
            transclude: true,
            controller: ModalController,
            controllerAs: 'modal',
            bindToController: true,
            templateUrl: 'templates/modals/modal.html'
        };
        return directive;

    }

    function ModalController() {}

})();
