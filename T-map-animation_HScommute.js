// This array contains the coordinates for all train stops between Harvard Square and Braintree
const tStops = [
  [-71.11896335766414, 42.373361035540015], //harvard
  [-71.10362961811492, 42.36537753204787], //central
  [-71.0855752027724, 42.36256948164889], //kendall mit
  [-71.07054763160814, 42.36137210456446], // charles mgh
  [-71.06278278743008, 42.35599430247836], // park street
  [-71.06045330277264, 42.3555639765328], // downtown crossing
  [-71.0550703027728, 42.35210404210911], // south station
  [-71.05700062975926, 42.34282643902213], // broadway
  [-71.05763354510243, 42.33024122650643], // andrew
  [-71.05232618743135, 42.3207156380643], // jfk Umass
  [-71.03014704510443, 42.275968847565686], // north quincy
  [-71.02032627394046, 42.26668071056275], // wollaston
  [-71.00551233161234, 42.25209481767906], // quincy center
  [-71.00721224510603, 42.23321228000145], // quincy adams
  [-71.00136913161398, 42.20763389042508], // braintree
];

// TODO: add your own access token
mapboxgl.accessToken =
  'pk.eyJ1Ijoic3RhbGRvIiwiYSI6ImNrbTJyYzR6ejF1NDkyb3FlNTNkb2tmeGEifQ.9Cgz7mtTvrC8Qh7wYbtGdg';

// TODO: create the map object using mapboxgl.map() function
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-71.06585694695335, 42.293255359012875],
  zoom: 10.5,
});

// TODO: add a marker to the map
let marker = new mapboxgl.Marker().setLngLat([-71.11896335766414, 42.373361035540015]).addTo(map);

// counter here represents the index of the current t stop
let counter = 0;
function move() {
  // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
  // Use counter to access bus stops in the array tStops

  setTimeout(() => {
    if (counter >= tStops.length) return;
    marker.setLngLat(tStops[counter]);
    counter++;
    move();
  }, 1000);
}

// Do not edit code past this point
if (typeof module !== 'undefined') {
  module.exports = { move, counter, marker, tStops };
}
