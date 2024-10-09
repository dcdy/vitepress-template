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

# GitHub 风格的警报（和自定义容器的渲染方式相同）

> [!NOTE]
> 强调用户在快速浏览文档时也不应忽略的重要信息。

> [!TIP]
> 有助于用户更顺利达成目标的建议性信息。

> [!IMPORTANT]
> 对用户达成目标至关重要的信息。

> [!WARNING]
> 因为可能存在风险，所以需要用户立即关注的关键内容。

> [!CAUTION]
> 行为可能带来的负面影响。

## 代码块组

::: code-group

```sh [npm]
$ npm add -D vitepress
```

```sh [pnpm]
$ pnpm add -D vitepress
```

```sh [yarn]
$ yarn add -D vitepress
```

```sh [yarn (pnp)]
$ yarn add -D vitepress vue
```

```sh [bun]
$ bun add -D vitepress
```

:::

## 更多

请查看文档 [完整的 markdown 扩展列表](https://vitepress.dev/guide/markdown).
