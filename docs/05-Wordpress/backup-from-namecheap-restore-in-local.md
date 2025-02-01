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
