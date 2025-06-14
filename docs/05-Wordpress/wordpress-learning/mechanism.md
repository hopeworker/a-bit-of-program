## WordPress 请求主流程图（包含模板加载和 HTML 渲染）

用户访问 URL（如 /hello-world/）
        │
        ▼
index.php                           ← WordPress 入口
        │
        ▼
wp-blog-header.php                  ← 加载 WordPress
        ├── wp-load.php
        │    └── wp-config.php      ← 配置数据库和常量
        │    └── wp-settings.php    ← 初始化核心功能、加载插件等
        │
        └── wp()                    ← 执行 WordPress 主逻辑
              │
              ▼
         $wp->main()                ← 路由解析 + 查询数据库
              ├── parse_request()     ← 解析 URL
              ├── query_posts()       ← 生成 WP_Query 对象
              ├── handle_404()        ← 判断是否是 404
              └── template-loader.php ← 🔥 加载并渲染模板
                        │
                        ├── get_*_template()       ← 根据页面类型查找模板文件（如 single.php）
                        ├── include($template)     ← 加载模板 PHP 文件
                        └── 执行 the_content() 等 ← 渲染页面内容为 HTML
        ▼
HTML 输出到浏览器



## wordpress php 和 nodejs 运行模型的根本不同
| 特性   | PHP                          | Node.js                  |
| ---- | ---------------------------- | ------------------------ |
| 执行方式 | **每次请求执行一次脚本，处理完即销毁**        | **常驻内存的单进程服务，处理多个请求**    |
| 生命周期 | 短暂：每个请求一个独立进程/线程             | 持久：一个 Node.js 应用可长时间运行   |
| 状态管理 | 每次重新初始化（无状态）                 | 内存可持久保留变量、状态、连接          |
| 并发方式 | 多进程或线程由 Web 服务器（如 PHP-FPM）控制 | 事件驱动 + 异步非阻塞（单线程 + 事件循环） |

## What's PHP-FPM
PHP-FPM 是PHP 的 FastCGI 实现, 它是一个独立的后台服务程序（daemon），它在操作系统中作为一个进程运行，通常叫做php-fpm

它是 开源软件，作为 PHP 项目的一部分，由全球开源社区维护和发展。
PHP-FPM（FastCGI Process Manager）最初是由Nicolas C. S. Duchene开发的，目的是替代传统的FastCGI管理器，提供更高效、更灵活的PHP进程管理。

## FastCGI 是什么
FastCGI 是什么	一种 Web 服务器和应用进程之间的通信协议

## Nginx <---> PHP-FPM
通过 socket 通信，Nginx 和 PHP-FPM 可以用 FastCGI 协议格式互相传输数据。这种通信依赖操作系统提供的 socket（Unix 或 TCP）通道，是高效、安全、稳定的服务间通信方式。

## 为什么使用socket通信
使用 Socket（操作系统提供的进程间通信机制中的一种）作为通信方式的核心原因之一，就是为了实现：
Web 服务器（如 Nginx） 和 应用服务器（如 WordPress + PHP-FPM） 分布在不同的机器上部署。


