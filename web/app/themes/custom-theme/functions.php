<?php

// Declare variables

global $publicDir;
global $includesDir;

$publicDir = get_stylesheet_directory_uri() . '/public/';
$includesDir = get_stylesheet_directory_uri() . '/includes/';


// Inherit parent styles

add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );
function my_theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );

}

// Deregister WP JQuery and add latest JQuery

function jquery_script() {
   
    global $publicDir;
    
    wp_deregister_script('jquery');
    wp_enqueue_script('jquery', $publicDir . 'js/jquery.js', array(), null, true);
    
}
add_action('wp_enqueue_scripts', 'jquery_script');

// Register Bootstrap JS

function bootstrapjs_script() {
   
    global $publicDir;
    
    wp_enqueue_script('bootstrap-js', $publicDir . 'js/bootstrap.js', array('jquery'), null, true);
    
}
add_action('wp_enqueue_scripts', 'bootstrapjs_script');

// Register Bootstrap CSS

function bootstrapcss_style(){

	global $publicDir;

	wp_enqueue_style( 'bootstrap-css', $publicDir . 'css/bootstrap.css', array(), false, 'all' );
}
add_action('wp_enqueue_scripts', 'bootstrapcss_style');


?>