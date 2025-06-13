## what's PHP-FPM
PHP-FPM 是PHP 的 FastCGI 实现, 它是一个独立的后台服务程序（daemon），它在操作系统中作为一个进程运行，通常叫做php-fpm

它是 开源软件，作为 PHP 项目的一部分，由全球开源社区维护和发展。
PHP-FPM（FastCGI Process Manager）最初是由Nicolas C. S. Duchene开发的，目的是替代传统的FastCGI管理器，提供更高效、更灵活的PHP进程管理。

## FastCGI 是什么
FastCGI 是什么	一种 Web 服务器和应用进程之间的通信协议

## Nginx <---> PHP-FPM
通过 socket 通信，Nginx 和 PHP-FPM 可以用 FastCGI 协议格式互相传输数据。这种通信依赖操作系统提供的 socket（Unix 或 TCP）通道，是高效、安全、稳定的服务间通信方式。

## 为什么使用socket通信
使用 Socket（特别是 TCP socket）作为通信方式的核心原因之一，就是为了实现：
Web 服务器（如 Nginx） 和 应用服务器（如 WordPress + PHP-FPM） 分布在不同的机器上部署。
