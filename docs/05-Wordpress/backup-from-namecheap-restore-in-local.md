## backup from namecheap easywp, then restore in local
### in remote
sftp connect, then delete wp-contentt/mu-plugins folder
install 'All-in-One WP Migration' plugin, backup
sftp download backup file in local

### in local
change local file php/php.ini.hbs upload_max_filesize = 800M

install 'All-in-One WP Migration' plugin
import downloaded backup file