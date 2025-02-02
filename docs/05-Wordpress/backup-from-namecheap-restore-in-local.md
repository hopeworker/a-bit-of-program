## backup from namecheap easywp, then restore in local
### in remote
sftp connect, then delete wp-contentt/mu-plugins folder
install 'All-in-One WP Migration' plugin, backup
sftp download backup file in local

### in local
change local file php/php.ini.hbs upload_max_filesize = 800M

install 'All-in-One WP Migration' plugin
import downloaded backup file

## Restore from backup files
hostinger dashboard -> Files -> File manager
install All-In-One-WP-Migration-With-Import plugin: https://github.com/d0n601/All-In-One-WP-Migration-With-Import
upload backup file in folder: wp-content -> ai1wm-backups
restore from uploaded backup file


## Setup gmail for wordpress
https://wpmailsmtp.com/docs/how-to-set-up-the-gmail-mailer-in-wp-mail-smtp/?utm_source=WordPress&utm_medium=setup-wizard&utm_campaign=liteplugin&utm_content=Read%20how%20to%20set%20up%20the%20Gmail%20mailer#create-app