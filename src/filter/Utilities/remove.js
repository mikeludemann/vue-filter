Vue.filter('remove', function (input) {

    function convertToArray(object) {

        return Array.isArray(object) ? object : Object.keys(object).map(function (key) {

            return object[key];

        });

    }

    function isObject(object) {

        return (typeof object === "object" && object !== null) || typeof object === "function";

    }

    function equals(firstObject, secondObject) {

        return firstObject === secondObject;

    }

    input = isObject(input) ? convertToArray(input) : input;

    var args = Array.prototype.slice.call(arguments, 1);

    if (!Array.isArray(input)) {

        return input;

    }

    return input.filter(function (element) {

        return !args.some(function (structure) {

            return equals(structure, element);

        })

    });

})