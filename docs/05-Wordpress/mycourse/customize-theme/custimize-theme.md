## Project Show case

### 1. Website show

### 2. env prepare - Underscores (done)

### 3. template file hierarchy (done)
    show file functions first, then show document
    ex. show front-page.php first, then show template hierarchy document

### 4. install fonts
1. use cdn
https://gstatic.aby.pub/

2. install in local

### WooCommerce

#### 如何查询woocommerce的hook和作用
https://woocommerce.github.io/code-reference/hooks/hooks.html

https://www.hostinger.com/tutorials/woocommerce-hooks

https://www.businessbloomer.com/woocommerce-visual-hook-guide-single-product-page/

#### Remove sidebar

##### Sidebar 是如何实现的
plugins/woocommerce/includes/wc-template-functions.php
定义 woocommerce_get_sidebar 的实现，最终是在安装的theme中，找到sidebar.php。
最终获取的是 Appearance -> Widgets -> Sidebar

在 plugins/woocommerce/templates/single-product.php
do_action( 'woocommerce_sidebar' ); 执行

plugins/woocommerce/includes/wc-template-hooks.php
add_action( 'woocommerce_sidebar', 'woocommerce_get_sidebar', 10 );

##### 如何去除
在自己主题的functions.php里面加入下面的代码，
在这里 5 的优先级高于 10，因此即使插件的执行时间在主题之前，也是会优先执行优先级高的函数。
因此sidebar会被去除。

```php
function remove_woocommerce_sidebar() {
    if ( is_product() || is_cart() || is_checkout() ) {
        remove_action( 'woocommerce_sidebar', 'woocommerce_get_sidebar', 10 );
    }
}
add_action( 'woocommerce_before_main_content', 'remove_woocommerce_sidebar', 5 );

```


#### Add customize style




## how to add mini cart
```php
function sophone_cart_link() {
    if ( ! sophone_woo_cart_available() ) {
        return;
    }
    ?>
        <a class="cart-contents" href="<?php echo esc_url( wc_get_cart_url() ); ?>" title="<?php esc_attr_e( 'View your shopping cart', 'sophone' ); ?>">
            <?php echo wp_kses_post( WC()->cart->get_cart_subtotal() ); ?> 
            <span class="count">
                <?php echo wp_kses_data( sprintf( _n( '%d item', '%d items', WC()->cart->get_cart_contents_count(), 'sophone' ), WC()->cart->get_cart_contents_count() ) ); ?>
            </span>
        </a>
    <?php
}

function sophone_cart_link_fragment( $fragments ) {
	ob_start();
	sophone_cart_link();
	$fragments['a.cart-contents'] = ob_get_clean();
	return $fragments;
}


add_filter( 'woocommerce_add_to_cart_fragments', 'sophone_cart_link_fragment' );


function sophone_header_cart() {
    if ( sophone_is_woocommerce_activated() ) {
        ?>
        <ul id="site-header-cart" class="site-header-cart menu">
            <li>
                <?php sophone_cart_link(); ?>
            </li>
            <li>
                <?php the_widget( 'WC_Widget_Cart', 'title=' ); ?>
            </li>
        </ul>
        <?php
    }
}
```

## How to search filename in vscode
command + p



## How is wc_cart_fragments_params defined


```php
// in /wp-content/plugins/woocommerce/includes/class-wc-frontend-scripts.php
private static function localize_script( $handle ) {
    if ( ... ) {
        ...
        // wp_enqueue_script( 'wc-cart-fragments' ) when the_widget( 'WC_Widget_Cart', )
        $name                        = str_replace( '-', '_', $handle ) . '_params';
        self::$wp_localize_scripts[] = $handle;
        wp_localize_script( $handle, $name, apply_filters( $name, $data ) );
    }
}
```

## add/remove to cart triggered ajax & mini cart update.

### in the same tab, mini cart updated after ajax response received and cart hash was saved in storage
http://sophone.local/?wc-ajax=remove_from_cart

/woocommerce/assets/js/frontend/add-to-cart.js

```php
AddToCartHandler.prototype.onAddToCart

// add-to-cart.js update mini cart
AddToCartHandler.prototype.updateFragments = function( e, fragments ) {
}

// add-to-cart.js update mini cart
AddToCartHandler.prototype.updateFragments = function( e, fragments ) {
}

```
### in different tabs and page init, mini cart updated by cart-fragments.js
localstorage cart-fragments.js

```php
// php backend support ajax refresh action which was triggered in cart-fragments.js

public static function get_refreshed_fragments() {
    ob_start();

    woocommerce_mini_cart();

    $mini_cart = ob_get_clean();

    $data = array(
        'fragments' => apply_filters(
            'woocommerce_add_to_cart_fragments',
            array(
                'div.widget_shopping_cart_content' => '<div class="widget_shopping_cart_content">' . $mini_cart . '</div>',
            )
        ),
        'cart_hash' => WC()->cart->get_cart_hash(),
    );

    wp_send_json( $data );
}
```
## How debug js scripts and verify it?

```php
$suffix = ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ) ? '' : '.min';
define('SCRIPT_DEBUG', true);
//then use console.log to verify
```

## how to debug php code

```php
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true); // Log to wp-content/debug.log
define('WP_DEBUG_DISPLAY', false); // Do not display errors on the site

function wp_localize_script( $handle, $object_name, $l10n ) {
	$wp_scripts = wp_scripts();

    // debug parames
    // logs are in public/wp-content/debug.log
    if ($object_name === 'wc_cart_fragments_params') {
        error_log('Object Name: ' . $object_name . ', L10n: ' . print_r($l10n, true));
    }
	return $wp_scripts->localize( $handle, $object_name, $l10n );
}


```