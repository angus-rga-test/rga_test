(function() {

    angular.module('handies').factory('isInt', [
        'isNumber',
        isIntFactory
    ]);

    function isIntFactory(isNumber) {
        return isInt;

        /**
         * Return true if the given value is an integer
         * @param value
         * @returns {*|boolean}
         */
        function isInt(value) {
            return isNumber && value % 1 === 0;
        }
    }

})();
