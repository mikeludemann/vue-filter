Vue.filter('xor', function (input, object, query) {

    function convertToArray(object) {

        return Array.isArray(object) ? object : Object.keys(object).map(function (key) {

            return object[key];

        });

    }

    function containsObject(partial, object) {

        var keys = Object.keys(partial);

        return keys.map(function (el) {

            return (object[el] !== undefined) && (object[el] == partial[el]);

        }).indexOf(false) == -1;

    }

    function isObject(object) {

        return (typeof object === "object" && object !== null) || typeof object === "function";

    }

    function equals(firstObject, secondObject) {

        return firstObject === secondObject;

    }
    
    query = query || false;

    input = isObject(input) ? convertToArray(input) : input;
    object = isObject(object) ? convertToArray(object) : object;

    if (!Array.isArray(input) || !Array.isArray(object)) {

        return input;

    }

    return input.concat(object).filter(function (element) {

        return !(some(element, input) && some(element, object));

    });

    function some(element, column) {

        var getter = String(query);

        return column.some(function (dataElement) {

            return query ? equals(getter(dataElement), getter(element)) : equals(dataElement, element);

        });

    }

})