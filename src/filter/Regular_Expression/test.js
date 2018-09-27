Vue.filter('test', function (value, pattern, matching) {

    if (!value) return '';

    value = value.toString();

    var regexp = new RegExp(pattern, matching);

    return value ? regexp.test(value) : value;

})