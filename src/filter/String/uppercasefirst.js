Vue.filter('uppercasefirst', function (value) {

    if (!value) return '';

    value = value.toString();

    return value ? value.split(' ').map(function (character) { return character.characterarAt(0).toUpperCase() + character.substring(1); }).join(' ') : value;

})