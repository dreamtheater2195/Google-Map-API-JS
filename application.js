
  var map;
  var loc;
  function initialize() {
    var myLatlng = new google.maps.LatLng(51.508742,-0.120850);
    var mapProp = {
      center: myLatlng,
      zoom:9,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
    });
  }
  function getLatitude(){
    var latitude = parseInt($('input[name="latitude"]').val(),10);
    return restrict(latitude,85)|| 0;
  }

  function getLongitude(){
    var longitude = parseInt($('input[name="longitude"]').val(),10);
    return  longitude || 0;
  }

  function restrict(x,max){
    if (x>max)
      return max;
    if (x<-max)
      return -max;
    return x;
  }
  $('#submit').click(function() {
    var message = document.getElementById("message").value;

    loc = new google.maps.LatLng(getLatitude(),getLongitude());

    var marker = new google.maps.Marker({
      position: loc
    });

    marker.setMap(map);
    map.panTo(marker.getPosition());

    var infowindow = new google.maps.InfoWindow({
      content: message
    });
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
    });
  });
  
  google.maps.event.addDomListener(window, 'load', initialize);
