Vue.filter('righttrim', function (value, character) {

    if (!value) return '';

    value = value.toString();

    var trim = character ||  '\\s';

    return value ? value.replace(new RegExp(trim + '+$'), '') : value;

})