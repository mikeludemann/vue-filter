Vue.filter('fuzzyBy', function (input, property, search, caseSensitive) {

    function convertToArray(object) {

        return Array.isArray(object) ? object : Object.keys(object).map(function (key) {

            return object[key];

        });

    }

    function hasApproxPattern(word, pattern) {

        function indexOf(word, position, character) {

            var j = 0;

            while ((position + j) <= word.length) {

                if (word.charAt(position + j) == character) return j;

                j++;

            }

            return -1;

        }

        var position = 0;

        for (var i = 0; i <= pattern.length; i++) {

            var index = indexOf(word, position, pattern.charAt(i));

            if (index == -1) {

                return false;

            }

            position += index + 1;

        }

        return true

    }

    function isString(value) {

        return (typeof value === "string" && value !== null);

    }

    function isObject(object) {

        return (typeof object === "object" && object !== null) || typeof object === "function";

    }

    var sensitive = caseSensitive || false,
        prop,
        getter;

    input = isObject(input) ? convertToArray(input) : input;

    if (!Array.isArray(input) || typeof property === undefined || typeof search === undefined) {

        return input;

    }

    getter = String(property);

    return input.filter(function (element) {

        prop = getter(element);

        if (!isString(prop)) {

            return false;

        }

        prop = (sensitive) ? prop : prop.toLowerCase();
        search = (sensitive) ? search : search.toLowerCase();

        return hasApproxPattern(prop, search) !== false

    })

})