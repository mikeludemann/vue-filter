Vue.filter('trim', function (value) {

    if (!value) return '';

    value = value.toString();

    var trim = '\\s';

    return value ? value.replace(new RegExp('^' + trim + '+|' + trim + '+$', 'g'), '') : value;

})