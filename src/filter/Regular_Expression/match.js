Vue.filter('match', function (value, pattern, matching) {

    if (!value) return '';

    value = value.toString();

    var regexp = new RegExp(pattern, matching);

    return value ? value.match(regexp) : null;

})