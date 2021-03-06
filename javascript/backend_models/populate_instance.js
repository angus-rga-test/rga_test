(function() {

    /**
     * Useful for loading a model instance with data from JSON
     */
    angular.module('backendModels').factory('populateInstance', [
        'relationManager',
        'caseTransform',
        'isArray',
        populateInstanceFactory
    ]);

    function populateInstanceFactory(relationManager, caseTransform, isArray) {

        return populateInstance;
        // STOP! Nothing but functions past here please

        /**
         * Returns a function that will populate a given class instance with the given
         * data using information from the relation manager to create instances of
         * related classes as appropriate
         * @param instanceToPopulate
         * @param dataForPopulation
         */
        function populateInstance(instanceToPopulate, dataForPopulation) {

            // If the data for population is not valid jump out
            if (typeof dataForPopulation !== 'object') {
                throw new Error('Data for population must be an object');
            }
            var dataKeys = Object.keys(dataForPopulation);
            dataKeys.forEach(function (dataKey) {

                // Convert the key to a camel cased key
                var camelCasedKey = caseTransform.snakeCaseToCamelCase(dataKey);
                var data = dataForPopulation[dataKey];

                // If the instance doesn't have the given property then
                // on to the next one
                if (!hasPopulatableProperty(instanceToPopulate, camelCasedKey)) {
                    return;
                }

                // Check for a has one relation on the instance
                if (relationManager.isHasOneRelation(instanceToPopulate, camelCasedKey)) {
                    populateHasOneRelation(instanceToPopulate, camelCasedKey, data);
                }

                // Check for a has many relation on the instance
                else if (relationManager.isHasManyRelation(instanceToPopulate, camelCasedKey)) {
                    populateHasManyRelation(instanceToPopulate, camelCasedKey, data);
                }

                // If there are no relations on the instance then we can simply do straight assignment
                else {
                    instanceToPopulate[camelCasedKey] = data;
                }

            });
        }

        /**
         * Return true if the given instance has a populatable property
         * @param instance
         * @param propertyName
         * @returns {boolean}
         */
        function hasPopulatableProperty(instance, propertyName) {

            if (instance.hasOwnProperty(propertyName)) {
                return true;
            }
            var prototypeToCheck = instance.constructor.prototype;
            while (prototypeToCheck && prototypeToCheck !== Object.prototype) {
                if (prototypeToCheck.hasOwnProperty(propertyName)) {
                    return true;
                }

                prototypeToCheck = prototypeToCheck.__proto__;
            }

            return false;

        }

        /**
         * Populates a has many relation property on an instance
         * @param instanceToPopulate
         * @param propertyString
         * @param dataValues
         */
        function populateHasManyRelation(instanceToPopulate, propertyString, dataValues) {

            // Jump out if the given data is not valid
            if (!isArray(dataValues)) {
                return;
            }

            instanceToPopulate[propertyString] = [];
            dataValues.forEach(function(dataValue) {
                var relationInstance = getRelationInstance(instanceToPopulate, propertyString, dataValue);
                instanceToPopulate[propertyString].push(relationInstance);
            });
        }

        /**
         * Populates a has one relation property on an instance
         * @param instanceToPopulate
         * @param propertyString
         * @param data
         */
        function populateHasOneRelation(instanceToPopulate, propertyString, data) {

            // Jump out if the given data is not valid
            if (typeof data !== 'object') {
                return;
            }

            var relationInstance = getRelationInstance(instanceToPopulate, propertyString, data);
            instanceToPopulate[propertyString] = relationInstance;
        }

        /**
         * Creates an instance of the related class
         * @param instanceToPopulate
         * @param propertyString
         * @param data
         */
        function getRelationInstance(instanceToPopulate, propertyString, data) {
            var RelationClass = relationManager.getRelationClass(instanceToPopulate, propertyString);

            // If the data is already an instance of the given class we can just return it
            if (data instanceof RelationClass) {
                return data;
            }

            var relationInstance = new RelationClass();
            populateInstance(relationInstance, data);
            return relationInstance;
        }

    }

})();
