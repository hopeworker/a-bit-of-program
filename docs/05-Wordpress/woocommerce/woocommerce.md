## After install woocommerce all website pages lost css style
用start template，选择带woocommerce的模版，选择woocommerce插件，重新安装一遍就解决了。

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

## AI engine generate image
can generate image in backend, 'editor' role can use tools in wp admin.
the dall

## change url after user logout
To change the WordPress logout page, you'll want to redirect users to a different URL after they log out. This can be achieved by adding a custom redirect using a plugin like "WP Login and Logout Redirect"
