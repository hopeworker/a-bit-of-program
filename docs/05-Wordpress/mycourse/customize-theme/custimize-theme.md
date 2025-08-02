## Project Show case

### Website show

### Underscores


### WooCommerce

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