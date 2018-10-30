Vue.filter('unique', function (input, property) {

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

    if (!Array.isArray(input)) {

        return input;

    }

    var uniqueArray = [],
        get = String(property);

    return (typeof property === undefined) ? input.filter(function (element, position, self) {

        return self.indexOf(element) === position;

    }) : input.filter(function (element) {

        var prop = get(element);

        if (some(uniqueArray, prop)) {

            return false;

        }

        uniqueArray.push(prop);

        return true;

    });

    function some(array, position) {

        if (typeof position === undefined) {

            return false;

        }

        return array.some(function (element) {

            return equals(element, position);

        });

    }

})