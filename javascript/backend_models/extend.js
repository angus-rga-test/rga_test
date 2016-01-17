(function() {

    angular.module('backendModels').factory('extend', extendFactory);

    function extendFactory() {

        return extend;

        function extend(ChildClass, ParentClass) {
            ChildClass.prototype = Object.create(ParentClass.prototype);
            ChildClass.prototype.constructor = ChildClass;

            // IE8 Nonsense
            if (typeof ChildClass.prototype.__proto__ === 'undefined') {
                ChildClass.prototype.__proto__ = ParentClass.prototype;
            }
        }

    }

})();
