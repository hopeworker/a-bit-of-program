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


## 模板查找流程

[template-loader.php]
        ↓
is_singular()  → get_single_template()
                     ↓
     尝试加载模板顺序：
     ├── single-post.php
     ├── single.php
     ├── singular.php
     └── index.php


## wordpress php 和 nodejs 运行模型的根本不同
| 特性   | PHP                          | Node.js                  |
| ---- | ---------------------------- | ------------------------ |
| 执行方式 | **每次请求执行一次脚本，处理完即销毁**        | **常驻内存的单进程服务，处理多个请求**    |
| 生命周期 | 短暂：每个请求一个独立进程/线程             | 持久：一个 Node.js 应用可长时间运行   |
| 状态管理 | 每次重新初始化（无状态）                 | 内存可持久保留变量、状态、连接          |
| 并发方式 | 多进程或线程由 Web 服务器（如 PHP-FPM）控制 | 事件驱动 + 异步非阻塞（单线程 + 事件循环） |
