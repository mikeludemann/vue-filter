Vue.filter('repeat', function (value, counter, separator) {

    var counts = ~~counter;

    if (!value) return '';

    value = value.toString();

    return !counts ? value : repeatValue(value, --counter, separator || '');

    // Helper functions

    function repeatValue(value, counter, separator) {

        if (!counter) {

            return value;

        }

        return value + separator + repeatValue(value, --counter, separator);

    }

})