

## WordPress 里的 AJAX 基础结构

WordPress 提供了一个专门的入口文件：

/wp-admin/admin-ajax.php


所有 AJAX 请求都通过它处理。

主要步骤：

前端用 jQuery.ajax() 发请求。

请求会带上 action 参数，告诉 WordPress 调用哪个函数。

后端用 add_action('wp_ajax_xxx', 'function_name') 注册处理函数。

登录用户用 wp_ajax_

游客用户用 wp_ajax_nopriv_

## hook definition
wp_ajax_load_more_posts 不是 WordPress 自带的，而是由 你前端 AJAX 请求里的 action 参数决定的。

```yaml
[前端页面 / JS]
    |
    | 1. jQuery AJAX 请求
    |    POST/GET → admin-ajax.php
    |    携带参数: action=load_more_posts
    |
    v
[WordPress admin-ajax.php]
    |
    | 2. 检查 action 参数
    |    action = "load_more_posts"
    |
    v
[Hook 系统]
    |
    | 3. 匹配对应钩子
    |    已登录用户  → wp_ajax_load_more_posts
    |    未登录用户  → wp_ajax_nopriv_load_more_posts
    |
    v
[自定义 PHP 回调函数]
    |
    | 4. 执行回调
    |    - 查询数据库
    |    - 获取文章
    |    - 处理数据
    |    - echo 输出结果
    |
    v
[WordPress 输出 response]
    |
    | 5. AJAX 返回 JSON/HTML 数据
    |
    v
[前端 jQuery success 回调]
    |
    | 6. 更新 DOM
    |    $("#post-container").append(response);
    |
    v
[用户看到新内容，无需刷新页面]

```