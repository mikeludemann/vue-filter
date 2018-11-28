Vue.filter('lowercasefirst', function (value) {

    if (!value) return '';

    value = value.toString();

    return value ? value.split(' ').map(function (character) { return character.charAt(0).toLowerCase() + character.substring(1); }).join(' ') : value;

})