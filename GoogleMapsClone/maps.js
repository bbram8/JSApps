const MAPBOX_ACCESS_TOKEN =
 "<Your_Mapbox_access_token>" ; 

navigator.geolocation.getCurrentPosition(good_location, err_location, {
  enableHighAccuracy: true
})

// start with setting up the map and the center position of your map
// setup
function map_setup(center_location) {
  const map = new mapboxgl.Map({
    accessToken: MAPBOX_ACCESS_TOKEN,
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center_location,
    zoom: 35
  })
   // 
  const dir_control = new MapboxDirections({
    accessToken: MAPBOX_ACCESS_TOKEN
  })
  map.addControl(dir_control, "top-right");
}

  const navi_control = new mapboxgl.NavigationControl()
  map.addControl(navi_control);
 

// Mapbox API takes long-lat instead of lat-long like Google Maps :( 
function good_location(position) {
  map_setup([position.coords.longitude, position.coords.latitude]);
}

// where do I need to go to if there is an error in the location - default coords
function err_location() {
  map_setup([-2.24, 53.48])
}
