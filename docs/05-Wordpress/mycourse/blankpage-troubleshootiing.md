## contact namecheap support via email
they response quickly on sunday canberra morning about 7am
And the issue was fixed in 2 hours.

They request my account details first, then 
They debug process:

In order to investigate the issue, we may need to perform the following actions:
- clearing cache;
- enabling debug mode;
- disabling plugins;
- switching the theme to a default one;
- editing the wp-config.php file;
- replacing the default for all WordPress installation files;
- updating versions of WordPress installation, plugins, and themes.
Please confirm that we are allowed to make the aforementioned changes.


It was finally fixed by restoring the wp-config.php file and WordPress default files.

But they couldn't provide details about the problem and suggest I can restore the previously created backup, then contact a web developer.

They suggest checking this guide with options and instructions: https://www.wpbeginner.com/showcase/best-places-to-hire-wordpress-developers/ .


## My investigation
By comparing different backup files, I found the index.php file was changed. That caused the problem.
I checked plugins, seems it was not caused by malicious plugins. 

## My action
1. I will change my admin password to strong one 
2. install anti-spam plugins, namecheap install "Akismet Anti-spam: Spam Protection" for me
3. limit registration attempts
4. install captcha from login screen (option)