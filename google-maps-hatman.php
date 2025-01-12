<?php
/**
 * Plugin Name: Google Maps Hatman
 * Plugin URI: https://example.com
 * Description: A goolge maps plugin by Syal khan
 * Version: 1.0
 * Auther: Syal khan
 * Auther URI: https://areacalculator.online
 * License: GPL2
 */

 function my_plugin_enqueue_scripts()
 {
     // Enqueue CSS
     wp_enqueue_style(
         'style-name',
         plugin_dir_url(__FILE__) . 'css/style.css',
         array(),
         '1.0' // Add a version number
     );
 
     // Enqueue Google Maps script
     wp_enqueue_script(
         'google-maps',
         'https://maps.googleapis.com/maps/api/js?key=AIzaSyCuAF3H2yNyUerttUNx1OyoT9XBrVS_O9s&v=weekly',
         array(),
         null,
         true
     );
 
     // Enqueue InfoBubble library
     wp_enqueue_script(
         'infobubble',
         'https://cdn.jsdelivr.net/gh/googlemaps/v3-utility-library/infobubble/src/infobubble.js',
         array('google-maps'),
         null,
         true
     );
 
     // Enqueue your custom JS script and set dependencies
     wp_enqueue_script(
         'my-js',
         plugin_dir_url(__FILE__) . 'js/map.js',
         array('google-maps', 'infobubble'),
         '1.0', // Add a version number
         true
     );
 
     // Pass the JSON file URL to the script
     wp_localize_script(
         'my-js', // Match the handle of your script
         'mapData',
         array(
             'jsonUrl' => plugin_dir_url(__FILE__) . 'assets/data/markers.json'
         )
     );
 }
 add_action('wp_enqueue_scripts', 'my_plugin_enqueue_scripts');
 


// Function to display the map container
function my_plugin_map_shortcode()
{
    // Enqueue scripts and styles
    my_plugin_enqueue_scripts();

    // Output the map container
    return '<div id="map-container" style="width: 100%; height: 710px;"></div>';
}

function enqueueStyle()
{
    wp_enqueue_style('style-name', plugin_dir_url(__FILE__) . 'css/style.css');
}


add_action('wp_enqueue_scripts', 'enqueueStyle');
// Register the shortcode
add_shortcode('google_map', 'my_plugin_map_shortcode');
