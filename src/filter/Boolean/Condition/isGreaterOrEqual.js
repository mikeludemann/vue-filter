Vue.filter('isGreaterOrEqual', function (value, validator) {

    function isGreaterOrEqual(value, validator) {

        return value >= validator;

    }

    return isGreaterOrEqual(value, validator);

})