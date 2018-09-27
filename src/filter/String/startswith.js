Vue.filter('startswith', function (value, setCaseSensitive, start) {

    var sensitive = setCaseSensitive || false;

    if (typeof value !== "string" ||  typeof start === "undefined") {

        return value;

    }

    value = (sensitive) ? value : value.toLowerCase();

    return !value.indexOf((sensitive) ? start : start.toLowerCase());

})