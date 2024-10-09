# 部署到 GitHub Pages

::: info 参考链接
https://vitepress.dev/zh/guide/deploy#github-pages
https://vitepress.dev/zh/guide/deploy#setting-a-public-base-path
:::

## 1.新建.github/workflows/deploy.yml 文件

```yml
name: Deploy Pages

# 触发条件，push到main分支或者pull request到main分支
on:
    push:
        branches: [main]
    pull_request:
        branches: [main]

    # 支持手动在工作流上触发
    workflow_dispatch:

# 设置时区
env:
    TZ: Asia/Shanghai

# 权限设置
permissions:
    # 允许读取仓库内容的权限。
    contents: read
    # 允许写入 GitHub Pages 的权限。
    pages: write
    # 允许写入 id-token 的权限。
    id-token: write

# 并发控制配置
concurrency:
    group: pages
    cancel-in-progress: false

# 定义执行任务
jobs:
    # 构建任务
    build:
        runs-on: ubuntu-latest

        # node v20 运行
        strategy:
            matrix:
                node-version: [20]

        steps:
            # 拉取代码
            - name: Checkout
              uses: actions/checkout@v3
              with:
                  # 保留 Git 信息
                  fetch-depth: 0

            # 设置使用 Node.js 版本
            - name: Use Node.js ${{ matrix.node-version }}
              uses: actions/setup-node@v3
              with:
                  node-version: ${{ matrix.node-version }}

            # 使用 最新的 PNPM
            # 你也可以指定为具体的版本
            - uses: pnpm/action-setup@v2
              name: Install pnpm
              with:
                  version: latest
                  # version: 9
                  run_install: false

              # 安装依赖
            - name: Install dependencies
              run: pnpm install --frozen-lockfile

              # 构建项目
            - name: Build blog project
              run: |
                  echo ${{ github.workspace }}
                  pnpm build

              # 资源拷贝
            - name: Build with Jekyll
              uses: actions/jekyll-build-pages@v1
              with:
                  source: ./docs/.vitepress/dist
                  destination: ./_site

              # 上传 _site 的资源，用于后续部署
            - name: Upload artifact
              uses: actions/upload-pages-artifact@v3

    # 部署任务
    deploy:
        environment:
            name: github-pages
            url: ${{ steps.deployment.outputs.page_url }}
        runs-on: ubuntu-latest
        needs: build
        steps:
            - name: Deploy to GitHub Pages
              id: deployment
              uses: actions/deploy-pages@v4
```

## 2.config.mts 文件内添加 base 指定项目名

::: warning 注意
如果打包部署后的站点没有样式，就是 base 配置的不对
:::

```js{2}
export default defineConfig({
	base: '/vitepress-template/',
});
```

## 3.配置 github

![image-20240924112324556](https://cdn.jsdelivr.net/gh/dcdy/image/img/image-20240924112324556.png)

## 4.pnpm build 打包，打包后将更改推送到 main 分支并等待 GitHub Action 工作流完成。

## 5.部署完成后，有代码更新时 push 推送到 main 分支，会自动触发 GitHub Action 工作流更新线上样式。
