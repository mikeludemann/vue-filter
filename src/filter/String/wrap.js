Vue.filter('wrap', function (value, wrapping, ending) {

    return (typeof value === "string") && (typeof wrapping !== "undefined") ? [wrapping, value, ending || wrapping].join('') : value;

})