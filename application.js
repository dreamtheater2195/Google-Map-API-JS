
  var map;
  var location;
  function initialize() {
    var myLatlng = new google.maps.LatLng(51.508742,-0.120850);
    var mapProp = {
      center: myLatlng,
      zoom:9,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
    });
  }

  $('#submit').click(function() {
    var lat = document.getElementById("latitude").value;
    var lon = document.getElementById("longitude").value;
    var message = document.getElementById("message").value;

    location = new google.maps.LatLng(lat, lon);

    var marker = new google.maps.Marker({
      position: location
    });

    marker.setMap(map);
    
    var infowindow = new google.maps.InfoWindow({
      content: message
    });
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
    });
    return false;
  });
  google.maps.event.addDomListener(window, 'load', initialize);
