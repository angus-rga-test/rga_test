(function() {
    angular.module('handies').factory('getRandom', getRandomFactory);

    function getRandomFactory() {
        return getRandom;

        function getRandom(min, max) {
            return Math.random() * (max - min) + min;
        };
    }
})();
