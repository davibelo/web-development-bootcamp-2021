//jshint esversion:6

module.exports.getDate = getDate;
function getDate() {
    const today = new Date();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    };    
    return today.toLocaleDateString("en-US", options);
}

// it also works:
// - without module word and 
// - with anonymous function syntax
exports.getWeekday = function () {
    const today = new Date();
    const options = {
        weekday: "long",
    };
    return today.toLocaleDateString("en-US", options);
}