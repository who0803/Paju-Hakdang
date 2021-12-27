function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(37.752571149384174, 126.78022695728478),
        zoom: 18
    };

    var map = new google.maps.Map(
        document.getElementById("googleMap")
        , mapOptions);
}