## Project Show case
大家好，我是小熊。欢迎来到我的视频教程。
在这套视频教程里面，我们将会基于Underscores启动模版，开发自己的WordPress经典主题。

使用这个主题，我们可以搭建定制自己的网站，并且网站也集成了WooCommerce电商的功能。

如果你有一些最基本的html，css，javascript 和php的基础知识最好。
如果没有的话，也是可以的。因为我们会逐行手敲代码的并每一步实现的功能和呈现出来的效果。对于关键的原理，会深入的讲解。
下面我们展示主题的最终效果。包括桌面端和移动端。


WordPress 经典主题开发

本课程主要介绍WordPress的经典主题开发。
基于Underscores主题，一步一步开发自己定义的主题。
包含的内容主要有
1. WordPress 主题开发环境的准备
2. Vscode及使用的插件介绍
3. 理解模版文件结构及其功能。
4. 安装字体
5. 安装图标
6. 导航栏菜单折叠的原理
7. 菜单样式的定制
8. 页眉添加背景图片。
9. 移动设备菜单显示问题的分析及解决
10. 主页hero section的开发
11. 主页services section的开发
12. 接入WooCommerce插件
13. 主页产品展示部分的开发
14. 产品展示部分样式调整-基于WooCommerce默认样式
15. 自定义WooCommerce样式
16. 修改WooCommerce默认的模版文件-hook方式
17. WooCommerce mini cart的添加
18. WooCommerce mini cart的动态更新功能
19. WooCommerce mini cart样式的自定义
20. 深入理解WooCommerce mini cart动态更新功能的实现原理
21. Page模版文件的修改-Store页面的制作
22. 结合古腾堡(Gutenberg)编辑器制作Services页面
23. 制作Contact页面-Contact Form 7的使用及样式调整


希望你能够在这套视频教程里有所收获。对应任何的问题或者疑惑也欢迎给我留言或者联系我。
感谢你的观看，再见。


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
https://woocommerce.com/document/woocommerce-customize-your-store/
https://developer.woocommerce.com/docs/theming/theme-development/template-structure/

#### 如何查询woocommerce的hook和作用
https://www.hostinger.com/tutorials/woocommerce-hooks

https://woocommerce.github.io/code-reference/hooks/hooks.html

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

```js
AddToCartHandler.prototype.onAddToCart


/**
 * Callbacks after added to cart event.
 */
AddToCartHandler.prototype.onAddedToCart = function( e, fragments, cart_hash, $button ) {
    e.data.addToCartHandler.updateButton( e, fragments, cart_hash, $button );
    e.data.addToCartHandler.updateFragments( e, fragments );
    e.data.addToCartHandler.alertCartUpdated( e, fragments, cart_hash, $button );
};

/**
 * Update fragments after add to cart events.
 */
AddToCartHandler.prototype.updateFragments = function( e, fragments ) {
    if ( fragments ) {
        $.each( fragments, function( key ) {
            $( key )
                .addClass( 'updating' )
                .fadeTo( '400', '0.6' )
                .block({
                    message: null,
                    overlayCSS: {
                        opacity: 0.6
                    }
                });
        });

        $.each( fragments, function( key, value ) {
            $( key ).replaceWith( value );
            $( key ).stop( true ).css( 'opacity', '1' ).unblock();
        });

        $( document.body ).trigger( 'wc_fragments_loaded' );
    }
};

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


## contact form 7 customize
https://contactform7.com/faq/can-i-add-id-and-class-attributes-to-a-form-element/#:~:text=Can%20I%20add%20id%20and%20class%20attributes%20to,%C2%A9%20Rock%20Lobster%2C%20LLC.%20Proudly%20powered%20by%20WordPress

[contact-form-7 id="af6fb1c" title="Contact form 1" html_id="aboutus-contact-form" html_class="form contact-form"]


```css

.contact-form {
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

#aboutus-contact-form.form p {
	width: 100%;
}

#aboutus-contact-form.form input,
#aboutus-contact-form.form textarea {
	width: 100%;
	color: #666;
	border: 1px solid #ccc;
	border-radius: 3px;
	padding: 10px 6px;
	margin-bottom: 10px;
}

#aboutus-contact-form.form input:focus {
	outline: none;	
	border: 2px solid var(--sophone-bg-divider-color);
}

#aboutus-contact-form.form textarea {
	resize: none; 
}

#aboutus-contact-form.form textarea:focus {
	outline: none;
	border: 2px solid var(--sophone-bg-divider-color);
}

#aboutus-contact-form.form input[type=submit] {
    display: inline-flex;
    background-color: var(--sophone-button-primary-color);
  
	font-weight: normal;
    font-size: 18px;
    color: white;
    text-align: center;
    text-decoration: none;

	border: 1px solid;
	border-color: #ccc #ccc #bbb;
    border-radius: 8px;
    padding: 10px 30px;
}

#aboutus-contact-form.form input[type=submit]:hover {
    background-color: var(--sophone-button-secondary-color);
    color: var(--sophone-highlight-primary-color);
}
```