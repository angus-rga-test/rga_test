(function() {

    /**
     * Useful for populating models from JSON data
     */
    angular.module('backendModels').factory('createPopulatedInstances', [
        'createPopulatedInstance',
        createPopulatedInstancesFactory
    ]);

    function createPopulatedInstancesFactory(createPopulatedInstance) {

        return createPopulatedInstances;
        // STOP! It's a function only party past this point.

        /**
         * Creates new instances of the given class and populate it with data
         * @param ClassToUse
         * @param dataForPopulation
         * @returns {*}
         */
        function createPopulatedInstances(ClassToUse, dataForPopulation) {
            var createdInstances = [];
            dataForPopulation.forEach(function(data) {
                createdInstances.push(createPopulatedInstance(ClassToUse, data));
            });
            return createdInstances;
        }
    }

})();
