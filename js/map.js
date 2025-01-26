let map;

// initMap is now async
async function initMap() {
  // Request libraries when needed, not in the script tag.
  const { Map } = await google.maps.importLibrary("maps");
  // Short namespaces can be used.
  map = new Map(document.getElementById("map-container"), {
    center: { lat: 28.382937720915596, lng: -96.75996229365255 },
    zoom: 7,
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
        let coords = position.coords;
        let locName = position.locationName;
        let street = position.streetAddress;
        let city = position.City;
        let state = position.State;
        let zipCode = position.zipCode;
        let phone = position.Phone || null;
        let markerIcon = position.markerIcon;
        let markerType = position.markerType;
        let shortDescrip = position.tooltip || null;
    
        let marker = new google.maps.Marker({
            position: coords,
            map: map,
            optimized: false,
            icon: {
                url: markerIcon, // Replace with your image or icon URL
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
        ${phone ? `
        <div style="margin-top: 5px; display: flex; align-items: flex-start;">
            <img src="https://cdn-icons-png.flaticon.com/512/724/724664.png" alt="Phone Icon" style="width: 14px; height: 14px; margin-right: 8px;">
            <span>${phone}</span>
        </div>` : ''}
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


        //Tooltip
        const tooltip = new google.maps.OverlayView();
        tooltip.onAdd = function(){
          const div = document.createElement("div");
          div.className = "custom-tooltip";
          div.style.position = "absolute";
          div.style.display = "none";
          if (markerType === "historic") {
            div.innerHTML = `<b>${locName}</b> <br> ${shortDescrip}`;
          }else{
            div.innerText = `${locName}`;
          }
          
          this.div = div;

          const panes = this.getPanes();
          panes.floatPane.appendChild(div);
        }
        tooltip.draw = function () {
          if (!this.div) return;

          const position = this.getProjection().fromLatLngToDivPixel(
            marker.getPosition()
          );
          const div = this.div;

          div.style.left = position.x - 5 + "px";
          div.style.top = position.y - 35 + "px";
          
          //different colors for each tooltip
          if (markerType==="green") {
            div.style.backgroundColor = "rgba(106, 214, 133, 0.8)";
            div.style.borderColor = "rgba(106, 214, 133, 0.8)";
          }else if(markerType === "yellow"){
            div.style.backgroundColor = "rgba(214, 212, 106, 0.8)";
            div.style.borderColor = "rgba(214, 212, 106, 0.8)";
          }else{
            div.style.backgroundColor = "rgba(210, 180, 140, 0.8)";
            div.style.borderColor = "rgba(210, 180, 140, 0.8)";
          }
        };

        tooltip.onRemove = function () {
          if (this.div) {
            this.div.parentNode.removeChild(this.div);
            this.div = null;
          }
        };

        tooltip.setMap(map);
    
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
                url: markerIcon, // Same icon
                scaledSize: new google.maps.Size(35, 35), // Enlarged size
            });
            marker.setZIndex(google.maps.Marker.MAX_ZINDEX + 1); // Bring to front

            tooltip.div.style.display = "block";
        });
    
        // Restore marker size on mouseout
        marker.addListener("mouseout", () => {
            marker.setIcon({
                url: markerIcon, // Original icon
                scaledSize: new google.maps.Size(30, 30), // Original size
            });
            marker.setZIndex(google.maps.Marker.MAX_ZINDEX - 1); // Reset z-index
            tooltip.div.style.display = "none";
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
  

  
}

// Initialize the map on window load
window.onload = initMap;
