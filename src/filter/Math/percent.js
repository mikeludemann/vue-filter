Vue.filter('percent', function (value, total, round) {

    var divider = (typeof value === "string") ? Number(value) : value;
    total = total || 100;
    round = round || false;

    if ((typeof divider !== "number") || isNaN(divider)) return value;

    return round ? Math.round((divider / total) * 100) : (divider / total) * 100;

})