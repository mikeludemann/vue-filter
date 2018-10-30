Vue.filter('filterBy', function (input, properties, search, strict) {

    function convertToArray(object) {

        return Array.isArray(object) ? object : Object.keys(object).map(function (key) {

            return object[key];

        });

    }

    function isString(value) {

        return (typeof value === "string" && value !== null);

    }

    function isNumber(value) {

        return (typeof value === "number" && value !== null);

    }

    function isObject(object) {

        return (typeof object === "object" && object !== null) || typeof object === "function";

    }

    var comparator;

    search = (isString(search) || isNumber(search)) ? String(search).toLowerCase() : undefined;

    input = isObject(input) ? convertToArray(input) : input;

    if (!Array.isArray(input) || typeof search === undefined) {

        return input;

    }

    return input.filter(function (element) {

        return properties.some(function (prop) {

            if (!~prop.indexOf('+')) {

                comparator = String(prop)

            } else {

                var propertyList = prop.replace(/\s+/g, '').split('+');

                comparator = propertyList.map(function (prop) {

                    return String(prop);

                }).join(' ');

            }

            if (!isString(comparator) && !isNumber(comparator)) {

                return false;

            }

            comparator = String(comparator).toLowerCase();

            return strict ? comparator === search : comparator.contains(search);

        });

    });

})