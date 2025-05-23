## After install woocommerce all website pages lost css style
用start template，选择带woocommerce的模版，选择woocommerce插件，重新安装一遍就解决了。
finally use storefront theme for the website, no need start template and elementor.


## Stripe checkout
行业：其他个人服务
产品描述：
我通过我的网站向客户提供包括 网站/软件开发及咨询，英文学习/咨询等，我个人能提供的服务。

### How to Connect Stripe to WooCommerce (Stripe Payment Tutorial)
https://www.youtube.com/watch?v=MNfxCPcQe_s
use test mode, then real payment

### Integrate Alipay and WeChat
https://dashboard.stripe.com/settings/payments
申请访问 alipay和wechat

### add cart&checkout page
https://www.youtube.com/watch?v=668Tya-AuiQ&t=2s

## menus
add "Cart" page in menu

## You must be logged in to checkout. Click here to log in.
https://wordpress.org/support/topic/you-must-be-logged-in-to-checkout-2/

It is not possible for your site visitors to purchase a course without a user account. So they will need to sign in or create an account.

WooCommerce -> Settings -> Accounts & Privary -> Account Creation -> During Checkout



## Add user login/logout
Ultimate Member
https://www.youtube.com/watch?v=7ayRmFw9fbs&t=158s


## woocommerce checkout lost focus bug fix
https://wordpress.org/support/topic/bug-report-focus-loss-in-woocommerce-checkout-with-stripe-payment-gateway/
link to github post: https://github.com/woocommerce/woocommerce-gateway-stripe/issues/4142
https://github.com/woocommerce/woocommerce-gateway-stripe/pull/4178


## Disable auto updates
plugin: Easy Updates Manager


## mobile version menu has all the items - not the same as desktop version
make Primary Menu(for desktop) & Off-Canvas Menu(for mobile) the same



## ai engine
https://meowapps.com/ai-engine/tutorial



## paid membership pro
https://www.paidmembershipspro.com/adjust-application-fee-stripe-connect/

## pmpro support alipay
https://www.paidmembershipspro.com/gateway/stripe/stripe-checkout/

https://www.paidmembershipspro.com/stripe-additional-payment-methods/

https://docs.stripe.com/payments/checkout


## create membership through woocommerce product
https://www.paidmembershipspro.com/add-ons/pmpro-woocommerce/?utm_source=plugin&utm_medium=pmpro-addons&utm_campaign=add-ons&utm_content=pmpro-woocommerce#video



## debug checkout page error
https://wordpress.org/support/topic/error-page-checkout-woocommerce/



## plugin: Checkout Field Editor
### unable to modify checkout field
https://www.reddit.com/r/Wordpress/comments/1agnjgl/unable_to_modify_checkout_fields/

## use PMPR login form to hidden menu in welcome menu
edit PMPR login page, remove  [pmpr_login] with login form block

## fix mobile zoom in cause by input field in AI Engine
使用 Theme file editor 添加 header meta tag
<meta name="viewport" content="initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,width=device-width, user-scalable=no" />
use snippets plugin in functions.php instead.

## AI engine generate image
can generate image in backend, 'editor' role can use tools in wp admin.
the dall

## change url after user logout
To change the WordPress logout page, you'll want to redirect users to a different URL after they log out. This can be achieved by adding a custom redirect using a plugin like "WP Login and Logout Redirect"


## customize content restriction message
user snippets plugin
https://www.paidmembershipspro.com/documentation/content-controls/protected-content-messages/


## how to remove sidebar
https://www.youtube.com/watch?app=desktop&v=3tl6iSG-9kI&t=162s

change page settings: Template use Full width

## storefront not show title in pages

Storefront Title Toggle Plugin

Storefront Title Toggle Plugin: The Storefront Title Toggle plugin allows you to hide page titles. If activated, you might have accidentally checked the "Hide Title" box on the page edit screen


## change font size and color of AI Engine
.mwai-messages-theme {
    --mwai-fontSize: 18px !important;
    --mwai-conversationsBackgroundColor: #f7f4e8 !important;
}
Paste this into Appearance > Customize > Additional CSS:

## change menu font size
https://www.youtube.com/watch?v=-mu8SOA06RQ&t=2s

.main-navigation ul li a {
	font-size: 20px;
}
Paste this into Appearance > Customize > Additional CSS:

#f7f5f4


## polylang 

change snipet to add chinese for PMPro message:
Join The membership For Access
You must have one of the following membership levels to access this content:
Join Now

sometimes 404 error show in front page when switch language, need deactivate/active plugin.

## remove storefront woocommerce footer message

```php
function remove_storefront_credit() {
    remove_action( 'storefront_footer', 'storefront_credit', 20 );
    add_action( 'storefront_footer', function() {
        ?>
        <div class="site-info">
            © little little code 2025
        </div>
        <?php
    }, 20 );
}
add_action( 'init', 'remove_storefront_credit' );
```


### 使用TranslatPress
1. 设置不force custome link，解决中文网站url不正确问题。
2. 修改PMPPro restrict content 代码片段支持中文
3. 使用Gettext string翻译修改woocommerce和PMPro内置字符翻译

Your cart is currently empty!
New in store


Already a member? Log in here



xiaoxue@test.com

GrdXzLQ959MTVE7


Sure! Here's an introduction to Hangzhou:

---

Nestled in the southeastern part of China, Hangzhou is a city that effortlessly blends ancient charm with modern vibrancy. As the capital of Zhejiang Province, it has long been celebrated for its picturesque landscapes, rich history, and thriving economy.

One of Hangzhou's most famous landmarks is the stunning West Lake, a UNESCO World Heritage site. This scenic area is a harmonious blend of tranquil waters, lush greenery, and historical pagodas and temples. West Lake has inspired poets and artists for centuries and continues to enchant visitors with its serene beauty.

Hangzhou is also known for its rich cultural heritage. The city's history dates back over 2,200 years, and it served as the capital of the Southern Song Dynasty. This historical depth can be explored through its ancient streets, traditional tea houses, and the revered Lingyin Temple, one of China's largest and most significant Buddhist temples.

In recent years, Hangzhou has emerged as a technological and economic powerhouse. It is home to Alibaba, one of the world's largest e-commerce companies, and hosts a burgeoning tech scene that draws talent from around the globe. The city seamlessly integrates cutting-edge innovation with its time-honored traditions.

Hangzhou is also renowned for its culinary delights. From the iconic Dongpo Pork to the delicate flavors of Longjing Shrimp, the local cuisine offers a delectable journey for the taste buds. And of course, no visit is complete without sampling the famous Dragon Well tea, grown in the nearby hills.

Whether you're exploring the serene beauty of West Lake, delving into its storied past, or embracing its modern dynamism, Hangzhou offers a unique and captivating experience that leaves a lasting impression on all who visit.

--- 

I hope this captures the essence of Hangzhou for you! Let me know if there's anything else you'd like to learn or include.