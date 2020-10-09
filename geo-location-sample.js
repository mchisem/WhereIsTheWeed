// Google maps API
var eventLat0 = parseFloat(oData.events.event[0].latitude);
var eventLong0 = parseFloat(oData.events.event[0].longitude);

var eventOne0 = { lat: eventLat0, lng: eventLong0 };

var map = new google.maps.Map(document.getElementById('map_canvas'), {
    zoom: 8,
    center: eventOne0
});

var nav = (navigator.geolocation)
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
      var test =
      {
        origin: pos,
        destination: 'Los Angeles, CA',
        provideRouteAlternatives: false,
        travelMode: 'DRIVING',
        drivingOptions: {
          departureTime: new Date(/* now, or future date */),
          trafficModel: 'pessimistic'
        },
        unitSystem: google.maps.UnitSystem.IMPERIAL
      }
      console.log(test)
    });