Vue.filter('isNull', function (value) {

    function isNull(value) {

        return value === null;

    }

    return isNull(value);

})