(function() {

    /**
     * Return the instance's parent class
     */
    angular.module('handies').factory('getParentClass', getParentClassFactory);

    function getParentClassFactory() {

        return getParentClass;

        /**
         * Return the parent class of the given class
         * @param classToCheck
         * @returns {Function}
         */
        function getParentClass(classToCheck) {
            if (typeof classToCheck.prototype.__proto__ === 'undefined') {
                return Object;
            }
            return classToCheck.prototype.__proto__.constructor;
        }

    }

})();
