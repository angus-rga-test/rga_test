(function() {

    angular.module('handies').factory('isNumber', isNumberFactory);

    function isNumberFactory() {
        return isNumber;

        /**
         * Returns true if the given value is a number
         * @param value
         * @returns {boolean}
         */
        function isNumber(value) {
            return Number(value) === value;
        }
    }

})();
