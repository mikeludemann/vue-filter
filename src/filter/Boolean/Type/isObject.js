Vue.filter('isObject', function (value) {

    if(typeof value === "object") {

        return true;

    } else {

        return false;

    }

})