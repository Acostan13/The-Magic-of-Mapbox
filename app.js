// QUICKSTART
// Step 1. Pick a style you like from https://www.mapbox.com/gallery/
// Step 2. Click "Add ___ to your account" at the bottom-right. This should take you to Mapbox Studio.
// Step 3. Click "Share" in the toolbar at the top-right
// Step 4. Click "Draft" at the top of the popup
// Step 5. Copy the "Style URL" and "Access Token" into the fields below
// Step 6. Done!
const ACCESS_TOKEN = 'pk.eyJ1IjoiYWNvc3RhbiIsImEiOiJja2JncDMxZ2wxN282MnNvNWF4d3A5Z2M1In0.dQnoWJVGrurwYRm6fhsIYQ';
const MAPBOX_STYLE = 'mapbox://styles/acostan/ckbgpjig50me51io1n4k42h03/draft';


mapboxgl.accessToken = ACCESS_TOKEN;

var map = new mapboxgl.Map({
  container: 'map',
  

  style: MAPBOX_STYLE,
  center: [-80.167,26.117],
  zoom: 12
});