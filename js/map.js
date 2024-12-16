let map;

// initMap is now async
async function initMap() {
    // Request libraries when needed, not in the script tag.
    const { Map } = await google.maps.importLibrary("maps");
    // Short namespaces can be used.
    map = new Map(document.getElementById("map-container"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
        styles: [
            {
              "featureType": "administrative",
              "elementType": "labels.text",
              "stylers": [
                {
                  "color": "#ffffff"
                }
              ]
            },
            {
              "featureType": "administrative",
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "administrative.country",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#314e52"
                },
                {
                  "weight": 2
                }
              ]
            },
            {
              "featureType": "administrative.land_parcel",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "administrative.neighborhood",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "landscape",
              "stylers": [
                {
                  "color": "#647b7f"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi.business",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "labels",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "labels.icon",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road.arterial",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#8a9a9e"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "labels",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road.local",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "transit",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#314e52"
                }
              ]
            }
          ]
            
        
    });

    // Fetch data and add markers
    fetchBusinessData();
}

function generateInfoWindowContent() {
    return `
        <h3>info</h3>
    `;
}

function fetchBusinessData() {
    businessData = [
{
    lat: -28.22443106341595,
    lng: 150.5220951367859
},
{
    lat: -31.050465236523,
    lng: 144.36975131759036
}
    ];
        businessData.forEach(position => {
console.log(position);
            let marker = new google.maps.Marker({
                position: position,
                map: map,
            });

            let infowindow = new google.maps.InfoWindow({
                content: generateInfoWindowContent()
            });

            marker.addListener('click', () => {
                infowindow.open(map, marker);
            });

            map.addListener('click', () => {
                infowindow.close();
            });
        });

    } 



{/* <div>
            <h3>${business.name}</h3>
            <p>Email: ${business.email}</p>
            <p>Phone: ${business.phone}</p>
            <a href="${business.business_url}" target="_blank" style="display: inline-block; margin-top: 10px; padding: 5px 10px; background-color: #4285f4; color: white; text-decoration: none; font-size: 14px; text-align: center; border: none; cursor: pointer;">Visit Website</a>
        </div> */}

// Initialize the map on window load
window.onload = initMap;
