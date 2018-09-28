Vue.filter('isBoolean', function (value) {

    if(typeof value === "boolean") {

        return true;

    } else {

        return false;

    }

})