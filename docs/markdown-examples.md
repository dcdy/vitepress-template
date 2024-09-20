# Markdown 扩展示例

本页演示了 VitePress 提供的内置 markdown 扩展。

## 语法高亮

VitePress 提供了由 [Shiki](https://github.com/shikijs/shiki) 驱动的语法高亮，还具有行高亮等附加功能：

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## 自定义容器

::: info 信息
这是一个信息框。
:::

::: tip 注意
这是一个提示框。
:::

::: warning 警告
这是一个警告框。
:::

::: danger 危险提示
这是一个危险提示框。
:::

::: details 点击查看详情
这是一个详情块。
:::

## 更多

请查看文档 [完整的 markdown 扩展列表](https://vitepress.dev/guide/markdown).
