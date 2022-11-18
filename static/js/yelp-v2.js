$(document).ready(function () {

    // A function to convert from meters to miles
    function displayDistance(distance) {
        const milesPerMeter = 0.000621371;
        const distanceInMiles= distance * milesPerMeter;
        return distanceInMiles.toFixed(2) + 'mi';
    }
    // the hidden element contains distance values in meters
    // By iterating each of them, convert the distance to miles
    $('.business-distance').each(function (index, item) {
            const distanceInMeters = $(`#business-${index+1}`).val();
            $(item).text(displayDistance(distanceInMeters));
    });
});