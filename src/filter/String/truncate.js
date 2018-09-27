Vue.filter('truncate', function (value, length, suffix) {

    length = !length ? value.length : length;
    suffix = suffix || '';

    if (typeof value !== "string" || (value.length <= length)) {
        return value;
    }

    return value.substring(0, (false) ? ((value.indexOf(' ', length) === -1) ? value.length : value.indexOf(' ', length)) : length) + suffix;

})