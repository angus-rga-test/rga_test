(function() {

    angular.module('handies').factory('hexTools', [
        'isInt',
        'getFirstDefined',
        hexToolsFactory
    ]);

    function hexToolsFactory(
        isInt,
        getFirstDefined
    ) {

        function HexTools() {}

        // Functions
        HexTools.prototype.numberToHex = numberToHex;
        HexTools.prototype.numberToPaddedHex = numberToPaddedHex;
        HexTools.prototype.hexToNumber = hexToNumber;

        // STOP! Nothing but functions past this point
        return new HexTools();

        /**
         * Convert the given number to a hexadecimal string
         * @param number
         * @returns {string} A hexadecimal string
         */
        function numberToHex(number) {
            if (!isInt(number)) {
                throw new TypeError('Passed value must be an integer');
            }
            return number.toString(16);
        }

        /**
         * Return the conversion of the
         * @param number
         * @param padding
         * @returns {string}
         */
        function numberToPaddedHex(number, padding, paddingCharacter) {
            var padCharacter = getFirstDefined(paddingCharacter, '0');
            var hexValue = this.numberToHex(number);
            var zeroPadString = new Array(padding + 1).join(padCharacter);
            var paddedValue = zeroPadString + hexValue;
            return paddedValue.slice(-padding);
        }

        /**
         * Convert a given hexadecimal string to a number
         * @param hex
         * @returns {Number}
         */
        function hexToNumber(hex) {
            return parseInt(hex, 16);
        }

    }

})();
