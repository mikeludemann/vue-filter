Vue.filter('isString', function (value) {

    if(typeof value === "string") {

        return true;

    } else {

        return false;

    }

})