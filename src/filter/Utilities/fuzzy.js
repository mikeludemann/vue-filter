Vue.filter('fuzzy', function (input, search, caseSensitive) {

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

    var sensitive = caseSensitive || false;

    input = isObject(input) ? convertToArray(input) : input;

    if (!Array.isArray(input) || typeof search === undefined) {

        return input;

    }

    search = (sensitive) ? search : search.toLowerCase();

    return input.filter(function (element) {

        if (isString(element)) {

            element = (sensitive) ? element : element.toLowerCase();

            return hasApproxPattern(element, search) !== false
        }

        return (isObject(element)) ? _hasApproximateKey(element, search) : false;

    });

    function _hasApproximateKey(object, search) {

        var properties = Object.keys(object),
            prop,
            flag;

        return 0 < properties.filter(function (element) {

            prop = object[element];


            if (flag) return true;

            if (isString(prop)) {

                prop = (sensitive) ? prop : prop.toLowerCase();

                return flag = (hasApproxPattern(prop, search) !== false);

            }

            return false;

        }).length;

    }

})