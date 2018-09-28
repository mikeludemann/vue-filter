Vue.filter('isSmallerOrEqual', function (value, validator) {

    function isSmallerOrEqual(value, validator) {

        return value <= validator;

    }

    return isSmallerOrEqual(value, validator);

})