## Loop
main loop is used to disassemble url to query params and fetch content from database, then display the result.
It is the main logic in theme template files.

The basic loop is for url parsing and retrieving related contents.
But you also could define custom loops using low level functions, which you can construct your own query parmes.
After you use custom loops, you need to reset query params for url.

### template tags
functions used to fetch specific part of the content. For example, the_title();