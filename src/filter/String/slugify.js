Vue.filter('slugify', function (value, replaceElement) {

    var replace = (typeof replaceElement === "undefined") ? '-' : replaceElement;

    return (typeof value === "string") ? value.toLowerCase().replace(/\s+/g, replace) : value;

})