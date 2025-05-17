## 
forminator - user register/login
Members - content restriction

WPCode - insert php code into pages






<?php if ( is_user_logged_in() ): ?>
    <h2>Welcome, <?php echo wp_get_current_user()->display_name; ?>!</h2>
    <p>You are logged in.</p>
    <p><a href="<?php echo wp_logout_url( home_url('/account') ); ?>">Logout</a></p>
<?php else: ?>
    <h2>Welcome to Your Account</h2>
    <p><a href="<?php echo home_url('/login-2'); ?>">Login to your account</a></p>
    <p><a href="<?php echo home_url('/registration'); ?>">Create a new account</a></p>
<?php endif; ?>


## Ultimate Member
https://www.youtube.com/watch?v=7ayRmFw9fbs&t=99s
最终还是采用这个插件。


