## learn from storefront theme customize


```php
// in /public/wp-content/themes/storefront/inc/customizer/class-storefront-customizer.php

class Storefront_Customizer {

    public function __construct() {
        add_action( 'customize_register', array( $this, 'customize_register' ), 10 );
        add_action( 'wp_enqueue_scripts', array( $this, 'add_customizer_css' ), 130 );
        add_action( 'customize_controls_print_styles', array( $this, 'customizer_custom_control_css' ) );
        add_action( 'customize_register', array( $this, 'edit_default_customizer_settings' ), 99 );
        add_action( 'init', array( $this, 'default_theme_mod_values' ), 10 );
    }

    public function add_customizer_css() {
        wp_add_inline_style( 'storefront-style', $this->get_css() );
    }

    public function get_css() {
        $storefront_theme_mods = $this->get_storefront_theme_mods();
        ...
    }
}
```