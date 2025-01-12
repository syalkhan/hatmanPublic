let map;

// initMap is now async
async function initMap() {
  // Request libraries when needed, not in the script tag.
  const { Map } = await google.maps.importLibrary("maps");
  // Short namespaces can be used.
  map = new Map(document.getElementById("map-container"), {
    center: { lat: 28.086781258166162, lng: -97.04455600476585 },
    zoom: 8,
    featureType: "landscape.natural.terrain",
    elementType: "geometry",
    styles: [
      {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#eea791"
          },
          {
            weight: 1
          }
        ]
      },
      {
        featureType: "administrative",
        elementType: "labels",
        stylers: [
          {
            color: "#644540"
          }
        ]
      },
      {
        featureType: "administrative",
        elementType: "labels.text.stroke",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "landscape",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#feedc2"
          }
        ]
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#251a1a"
          }
        ]
      },
      {
        featureType: "poi.business",
        elementType: "geometry",
        stylers: [
          {
            color: "#f0b19f"
          }
        ]
      },
      {
        featureType: "poi.medical",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#c9bc9c"
          }
        ]
      },
      {
        featureType: "poi.park",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#c2cda2"
          }
        ]
      },
      {
        featureType: "road.arterial",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#bb9e72"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#e7c387"
          }
        ]
      },
      {
        featureType: "road.local",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#e9c996"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#9bb1a4"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "labels.text",
        stylers: [
          {
            color: "#597465"
          }
        ]
      }
    ]
  });

  // Fetch data and add markers
  fetchBusinessData();
}

// styles: [
//   {
//     "featureType": "administrative",
//     "elementType": "labels.text",
//     "stylers": [
//       {
//         "color": "#ffffff"
//       }
//     ]
//   },
//   {
//     "featureType": "administrative",
//     "elementType": "labels.text.stroke",
//     "stylers": [
//       {
//         "visibility": "off"
//       }
//     ]
//   },
//   {
//     "featureType": "administrative.country",
//     "elementType": "geometry.stroke",
//     "stylers": [
//       {
//         "color": "#314e52"
//       },
//       {
//         "weight": 2
//       }
//     ]
//   },
//   {
//     "featureType": "administrative.land_parcel",
//     "stylers": [
//       {
//         "visibility": "off"
//       }
//     ]
//   },
//   {
//     "featureType": "administrative.neighborhood",
//     "stylers": [
//       {
//         "visibility": "off"
//       }
//     ]
//   },
//   {
//     "featureType": "landscape",
//     "stylers": [
//       {
//         "color": "#647b7f"
//       }
//     ]
//   },
//   {
//     "featureType": "poi",
//     "elementType": "labels.text",
//     "stylers": [
//       {
//         "visibility": "off"
//       }
//     ]
//   },
//   {
//     "featureType": "poi.business",
//     "stylers": [
//       {
//         "visibility": "off"
//       }
//     ]
//   },
//   {
//     "featureType": "road",
//     "elementType": "labels",
//     "stylers": [
//       {
//         "visibility": "off"
//       }
//     ]
//   },
//   {
//     "featureType": "road",
//     "elementType": "labels.icon",
//     "stylers": [
//       {
//         "visibility": "off"
//       }
//     ]
//   },
//   {
//     "featureType": "road.arterial",
//     "stylers": [
//       {
//         "visibility": "off"
//       }
//     ]
//   },
//   {
//     "featureType": "road.highway",
//     "elementType": "geometry.fill",
//     "stylers": [
//       {
//         "color": "#8a9a9e"
//       }
//     ]
//   },
//   {
//     "featureType": "road.highway",
//     "elementType": "labels",
//     "stylers": [
//       {
//         "visibility": "off"
//       }
//     ]
//   },
//   {
//     "featureType": "road.local",
//     "stylers": [
//       {
//         "visibility": "off"
//       }
//     ]
//   },
//   {
//     "featureType": "transit",
//     "stylers": [
//       {
//         "visibility": "off"
//       }
//     ]
//   },
//   {
//     "featureType": "water",
//     "elementType": "geometry.fill",
//     "stylers": [
//       {
//         "color": "#314e52"
//       }
//     ]
//   }
// ]
// styles: [
//           {
//             "elementType": "geometry",
//             "stylers": [
//               {
//                 "color": "#ebe3cd"
//               }
//             ]
//           },
//           {
//             "elementType": "labels.text.fill",
//             "stylers": [
//               {
//                 "color": "#523735"
//               }
//             ]
//           },
//           {
//             "elementType": "labels.text.stroke",
//             "stylers": [
//               {
//                 "color": "#f5f1e6"
//               }
//             ]
//           },
//           {
//             "featureType": "administrative",
//             "elementType": "geometry.stroke",
//             "stylers": [
//               {
//                 "color": "#c9b2a6"
//               }
//             ]
//           },
//           {
//             "featureType": "administrative",
//             "elementType": "labels.icon",
//             "stylers": [
//               {
//                 "color": "#b44104"
//               }
//             ]
//           },
//           {
//             "featureType": "administrative",
//             "elementType": "labels.text.fill",
//             "stylers": [
//               {
//                 "color": "#b44104"
//               }
//             ]
//           },
//           {
//             "featureType": "administrative",
//             "elementType": "labels.text.stroke",
//             "stylers": [
//               {
//                 "color": "#ffd8b8"
//               },
//               {
//                 "weight": 0.5
//               }
//             ]
//           },
//           {
//             "featureType": "administrative.country",
//             "elementType": "geometry.stroke",
//             "stylers": [
//               {
//                 "color": "#863104"
//               },
//               {
//                 "visibility": "on"
//               },
//               {
//                 "weight": 1
//               }
//             ]
//           },
//           {
//             "featureType": "administrative.land_parcel",
//             "elementType": "geometry.stroke",
//             "stylers": [
//               {
//                 "color": "#dcd2be"
//               }
//             ]
//           },
//           {
//             "featureType": "administrative.land_parcel",
//             "elementType": "labels.text.fill",
//             "stylers": [
//               {
//                 "color": "#ae9e90"
//               }
//             ]
//           },
//           {
//             "featureType": "administrative.province",
//             "elementType": "geometry.stroke",
//             "stylers": [
//               {
//                 "color": "#c34728"
//               },
//               {
//                 "weight": 1
//               }
//             ]
//           },
//           {
//             "featureType": "landscape",
//             "elementType": "geometry",
//             "stylers": [
//               {
//                 "color": "#d5b78f"
//               }
//             ]
//           },
//           {
//             "featureType": "landscape.natural",
//             "elementType": "geometry",
//             "stylers": [
//               {
//                 "color": "#dfd2ae"
//               }
//             ]
//           },
//           {
//             "featureType": "poi",
//             "elementType": "geometry",
//             "stylers": [
//               {
//                 "color": "#dfd2ae"
//               }
//             ]
//           },
//           {
//             "featureType": "poi",
//             "elementType": "labels.text.fill",
//             "stylers": [
//               {
//                 "color": "#93817c"
//               }
//             ]
//           },
//           {
//             "featureType": "poi.park",
//             "elementType": "geometry.fill",
//             "stylers": [
//               {
//                 "color": "#a5b076"
//               }
//             ]
//           },
//           {
//             "featureType": "poi.park",
//             "elementType": "labels.text.fill",
//             "stylers": [
//               {
//                 "color": "#447530"
//               }
//             ]
//           },
//           {
//             "featureType": "road",
//             "elementType": "geometry",
//             "stylers": [
//               {
//                 "color": "#f5f1e6"
//               }
//             ]
//           },
//           {
//             "featureType": "road.arterial",
//             "elementType": "geometry",
//             "stylers": [
//               {
//                 "color": "#fdfcf8"
//               }
//             ]
//           },
//           {
//             "featureType": "road.arterial",
//             "elementType": "geometry.fill",
//             "stylers": [
//               {
//                 "color": "#b96e31"
//               }
//             ]
//           },
//           {
//             "featureType": "road.arterial",
//             "elementType": "labels",
//             "stylers": [
//               {
//                 "visibility": "off"
//               }
//             ]
//           },
//           {
//             "featureType": "road.highway",
//             "elementType": "geometry",
//             "stylers": [
//               {
//                 "color": "#f8c967"
//               }
//             ]
//           },
//           {
//             "featureType": "road.highway",
//             "elementType": "geometry.stroke",
//             "stylers": [
//               {
//                 "color": "#e9bc62"
//               }
//             ]
//           },
//           {
//             "featureType": "road.highway",
//             "elementType": "labels",
//             "stylers": [
//               {
//                 "visibility": "off"
//               }
//             ]
//           },
//           {
//             "featureType": "road.highway.controlled_access",
//             "elementType": "geometry",
//             "stylers": [
//               {
//                 "color": "#e98d58"
//               }
//             ]
//           },
//           {
//             "featureType": "road.highway.controlled_access",
//             "elementType": "geometry.stroke",
//             "stylers": [
//               {
//                 "color": "#db8555"
//               }
//             ]
//           },
//           {
//             "featureType": "road.local",
//             "stylers": [
//               {
//                 "visibility": "off"
//               }
//             ]
//           },
//           {
//             "featureType": "road.local",
//             "elementType": "geometry.fill",
//             "stylers": [
//               {
//                 "color": "#b96e31"
//               }
//             ]
//           },
//           {
//             "featureType": "road.local",
//             "elementType": "labels.text.fill",
//             "stylers": [
//               {
//                 "color": "#806b63"
//               }
//             ]
//           },
//           {
//             "featureType": "transit.line",
//             "elementType": "geometry",
//             "stylers": [
//               {
//                 "color": "#dfd2ae"
//               }
//             ]
//           },
//           {
//             "featureType": "transit.line",
//             "elementType": "labels.text.fill",
//             "stylers": [
//               {
//                 "color": "#8f7d77"
//               }
//             ]
//           },
//           {
//             "featureType": "transit.line",
//             "elementType": "labels.text.stroke",
//             "stylers": [
//               {
//                 "color": "#ebe3cd"
//               }
//             ]
//           },
//           {
//             "featureType": "transit.station",
//             "elementType": "geometry",
//             "stylers": [
//               {
//                 "color": "#dfd2ae"
//               }
//             ]
//           },
//           {
//             "featureType": "transit.station.rail",
//             "elementType": "geometry.fill",
//             "stylers": [
//               {
//                 "color": "#b7580b"
//               }
//             ]
//           },
//           {
//             "featureType": "water",
//             "elementType": "geometry.fill",
//             "stylers": [
//               {
//                 "color": "#b9d3c2"
//               },
//               {
//                 "saturation": -20
//               },
//               {
//                 "lightness": -5
//               },
//               {
//                 "weight": 1
//               }
//             ]
//           },
//           {
//             "featureType": "water",
//             "elementType": "labels.text.fill",
//             "stylers": [
//               {
//                 "color": "#92998d"
//               }
//             ]
//           }
//         ]
function generateInfoWindowContent() {
  return `
        <div style="
            font-family: 'Courier New', Courier, monospace; 
            color: #5a4d41; /* Muted brown for text */
            background-color: #f4ecd8; /* Light beige for vintage look */
            padding: 15px; 
            border: none; /* Removed outer border */
            border-radius: 8px; 
            box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3); /* Subtle shadow for depth */
            background-image: url('https://www.transparenttextures.com/patterns/aged-paper.png'); /* Adds a textured, vintage paper look */
            background-size: cover; /* Ensure background covers the entire div */
        ">
            <h3 style="
                margin: 0; 
                padding-bottom: 10px; 
                text-align: center; 
                font-weight: bold; 
                color: #4b3925; /* Darker brown for the heading */
            ">
                Info
            </h3>
            <p style="
                margin-top: 10px;
                text-indent: 20px; /* Slight indentation for vintage feel */
            ">
                This is your customized vintage-style information window.
            </p>
        </div>
    `;
}


let currentlyOpenInfoBubble = null; // Keep track of the open InfoBubble

function fetchBusinessData() {

  fetch(mapData.jsonUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to load JSON");
      }
      return response.json();
    })
    .then(data=>{
      data.forEach((position) => {
        console.log(position);
        let coords = position.coords;
        let locName = position.locationName;
        let street = position.streetAddress;
        let city = position.City;
        let state = position.State;
        let zipCode = position.zipCode;
        let phone = position.Phone;
    
        let marker = new google.maps.Marker({
            position: coords,
            map: map,
            icon: {
                url: "http://localhost/hatman/wp-content/uploads/2024/12/Component-1-1.png", // Replace with your image or icon URL
                scaledSize: new google.maps.Size(30, 30) // Default size
            }
        });
    
        const infoBubble = new InfoBubble({
            map: map,
            content: `
                <div style="
                    font-family: 'Georgia', serif;
                    font-size: 14px;
                    color: #5c4033; 
                    background-color: #f5e7c5; 
                    padding: 10px; 
                    max-width: 200px; 
                    text-align: left;
                ">
                    <strong style="font-size: 16px;">${locName}</strong><br>
                    <div style="margin-top: 5px; display: flex; align-items: flex-start;">
                        <img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" alt="Address Icon" style="width: 14px; height: 14px; margin-right: 8px;">
                        <span>${street}, ${city}, ${state} ${zipCode}</span>
                    </div>
                    <div style="margin-top: 5px; display: flex; align-items: flex-start;">
                        <img src="https://cdn-icons-png.flaticon.com/512/724/724664.png" alt="Phone Icon" style="width: 14px; height: 14px; margin-right: 8px;">
                        <span>${phone}</span>
                    </div>
                </div>
            `,
            position: marker.getPosition(),
            shadowStyle: 1,
            padding: 0,
            backgroundColor: '#f5e7c5',
            borderRadius: 8,
            arrowSize: 10,
            borderWidth: 2,
            borderColor: '#5c4033',
            maxWidth: 200,
            disableAutoPan: false,
            hideCloseButton: false,
            arrowPosition: 50,
            arrowStyle: 2
        });
    
        // Open the InfoBubble when the marker is clicked
        marker.addListener("click", () => {
            // Close the currently open InfoBubble, if any
            if (currentlyOpenInfoBubble && currentlyOpenInfoBubble !== infoBubble) {
                currentlyOpenInfoBubble.close();
            }
    
            // Open the new InfoBubble and set it as the currently open one
            if (!infoBubble.isOpen()) {
                infoBubble.open(map, marker);
                currentlyOpenInfoBubble = infoBubble;
            } else {
                infoBubble.close();
                currentlyOpenInfoBubble = null;
            }
        });
    
        // Enlarge marker on hover
        marker.addListener("mouseover", () => {
            marker.setIcon({
                url: "http://localhost/hatman/wp-content/uploads/2024/12/Component-1-1.png", // Same icon
                scaledSize: new google.maps.Size(35, 35), // Enlarged size
            });
            marker.setZIndex(google.maps.Marker.MAX_ZINDEX + 1); // Bring to front
        });
    
        // Restore marker size on mouseout
        marker.addListener("mouseout", () => {
            marker.setIcon({
                url: "http://localhost/hatman/wp-content/uploads/2024/12/Component-1-1.png", // Original icon
                scaledSize: new google.maps.Size(30, 30), // Original size
            });
            marker.setZIndex(google.maps.Marker.MAX_ZINDEX - 1); // Reset z-index
        });
    
        // Close InfoBubble when clicking on the map (optional)
        map.addListener("click", () => {
            if (infoBubble.isOpen()) {
                infoBubble.close();
                currentlyOpenInfoBubble = null;
            }
        });
    });
    
    })
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

  
}


{
  /* <div>
            <h3>${business.name}</h3>
            <p>Email: ${business.email}</p>
            <p>Phone: ${business.phone}</p>
            <a href="${business.business_url}" target="_blank" style="display: inline-block; margin-top: 10px; padding: 5px 10px; background-color: #4285f4; color: white; text-decoration: none; font-size: 14px; text-align: center; border: none; cursor: pointer;">Visit Website</a>
        </div> */
}

// Initialize the map on window load
window.onload = initMap;
