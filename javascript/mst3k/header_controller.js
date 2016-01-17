(function() {

    angular.module('mst3k').controller(
        'HeaderController',
        [
            HeaderController
        ]
    );

    /**
     * Handle the header
     * @constructor
     */
    function HeaderController() {
        this.logo = 'images/logo.png';
    }

})();