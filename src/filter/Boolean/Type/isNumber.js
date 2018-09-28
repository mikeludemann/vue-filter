Vue.filter('isNumber', function (value) {

    if(typeof value === "number") {

        return true;

    } else {

        return false;

    }

})