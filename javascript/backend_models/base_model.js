(function() {

    /**
     * Basic model factory in case I ever want to add something to
     * all of the models one day.
     * Not sure why I'd want to do that, but if I ever do, this will
     * make it waaay easier.
     */
    angular.module('backendModels').factory(
        'BaseModel',
        [
            baseModelFactory
        ]
    );

    function baseModelFactory() {

        function BaseModel() {
        }

        return BaseModel;
        // STOP! Functions only past this point

    }

})();