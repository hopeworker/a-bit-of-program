# Markdown 常用语法

## block
> This is block message
  >> hi

```md
> This is block message
  >> hi
```

## md block
```md
This is md block
```

````md
```md
This is md block
```
````

## 提示
:::tip[提示]
这是提示内容
:::

:::danger[告警]
警告内容
:::

```md
:::tip[提示]
这是提示内容
:::

:::danger[告警]
警告内容
:::
```

## 图片

```md
![引用static文件夹里的图片](/img/icon.png)

![引用当前文件夹下的图片](./a.ico)
```
![引用static文件夹里的图片](/img/icon.png)

![引用当前文件夹下的图片](./a.ico)

## 代码块
```jsx title="src/components/example.jsx"
function hello() {
    return <h1>Hello Markdown</hi>
}
```

````md
```jsx title="src/components/example.jsx"
function hello() {
    return <h1>Hello Markdown</hi>
}
```
````