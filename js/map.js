const key = 'YOUR_MAPTILER_API_KEY_HERE';
const map = new maplibregl.Map({
	container: 'osm', // container id
	style: `https://api.maptiler.com/maps/92015102-b533-4730-a423-304582012a8b/style.json?key=aoFxLGzGwnv4YHdDHaJr`, // style URL
	center: [37.80326, 47.99415], // starting position [lng, lat]
	zoom: 15.2, // starting zoom
});
map.addControl(new maplibregl.NavigationControl(), 'top-right');
 
var marker = new maplibregl.Marker()
	.setLngLat([37.8022, 47.9954])
	.setPopup(new maplibregl.Popup().setHTML("<h2>ЭПГ - 8 корпус</h2>"))
	.addTo(map);

// var ost1Marker = L.sm.marker([47.9951, 37.7987], {icon: ostIcon, popup: 'Ост. "Парк Щербакова"'});
// map.addLayer(ost1Marker);
// var ost2Marker = L.sm.marker([47.9956, 37.8044], {icon: ostIcon, popup: 'Ост. "ДонНТУ"' });
// map.addLayer(ost2Marker);
// var ost3Marker = L.sm.marker([47.9959, 37.8058], {icon: ostIcon, popup: 'Ост. "Москва"' });
// map.addLayer(ost3Marker);

// var k8Marker = L.sm.marker([47.9954, 37.8022],
// 	{iconType: 'alt2', popup: 'ЭПГ - 8 корпус', popupOptions: {open: false }}); // 8 корпус
	
// var k1Marker = L.sm.marker([47.9941, 37.8043], {icon: kIcon, popup: 'Корпус № 1' });
// map.addLayer(k1Marker);
	
// var k3Marker = L.sm.marker([48.013, 37.8019], {icon: kIcon, popup: 'Корпус № 3. Гл. вход' });
// map.addLayer(k3Marker);

// var k32Marker = L.sm.marker([48.0147, 37.801], {icon: kIcon, popup: 'Корпус № 3. Вход' });
// map.addLayer(k32Marker);
	
// var k5Marker = L.sm.marker([47.9933, 37.8023], {icon: kIcon, popup: 'Корпус № 5' });
// map.addLayer(k5Marker);
	
// var k6Marker = L.sm.marker([47.9938, 37.8064], {icon: kIcon, popup: 'Корпус № 6' });
// map.addLayer(k6Marker);
	
// var k7Marker = L.sm.marker([48.012, 37.807], {icon: kIcon, popup: 'Корпус № 7' });
// map.addLayer(k7Marker);

// var k9Marker = L.sm.marker([47.993, 37.8034], {icon: kIcon, popup: 'Корпус № 9' });
// map.addLayer(k9Marker);
	
// var k11Marker = L.sm.marker([48.0125, 37.8038], {icon: kIcon, popup: 'Корпус № 11' });
// map.addLayer(k11Marker);
	
// var manMarker = L.sm.marker([48.0126, 37.8062], {icon: othIcon, popup: 'Манеж' });
// map.addLayer(manMarker);
	
// var hosMarker = L.sm.marker([48.0143, 37.8061], {icon: othIcon, popup: 'Студ. больница' });
// map.addLayer(hosMarker);

// map.addLayer(k8Marker);
