

## Admin Color Scheme
Dashboard -> Users -> Profile

https://www.wpbeginner.com/beginners-guide/how-to-customize-wordpress-admin-area-dashboard-for-beginners/#whycustomizeadminarea



Customize The Block Editor Screen


change visual editor background color

## Create a child theme to add customize styles
Use plugin "WP Child Theme Generator" to create a child theme.


### styles.css
```css
/**
 * Theme Name:     Twenty Twelve Child 1
 * Author:         the WordPress team
 * Template:       twentytwelve
 * Text Domain:	   twenty-twelve-child-1
 * Description:    child theme of twentytwelve
 */
.site {
    background-color: #f5f5f3;
}

body {
    background-color: #eaeae8;
}

```

### admin-style.css
```css
.editor-styles-wrapper {
    background-color: #C7EDCC; 
}
```

### functions.php

```php
<?php
/**
 * Recommended way to include parent theme styles.
 * (Please see http://codex.wordpress.org/Child_Themes#How_to_Create_a_Child_Theme)
 *
 */  

add_action( 'wp_enqueue_scripts', 'twenty_twelve_child_1_style' );
function twenty_twelve_child_1_style() {
	wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
	wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/style.css', array('parent-style') );
}

/**
 * Your code goes below.
 */

function custom_admin_styles() {
   wp_enqueue_style('custom-admin-style', get_stylesheet_directory_uri() . '/admin-style.css');
}
add_action('admin_enqueue_scripts', 'custom_admin_styles');
```