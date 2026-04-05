# 刘毅杰的山水日志

这是一个适合直接发布到 `GitHub Pages` 的纯静态网站。

站点入口：
- `index.html`

当前日志：
- `journals/wuyuan/index.html`

## 目录结构

```text
journal-site/
├─ index.html
├─ .nojekyll
├─ README.md
├─ assets/
│  ├─ css/styles.css
│  └─ js/site.js
└─ journals/
   └─ wuyuan/
      ├─ index.html
      └─ images/
```

## 为什么这套结构适合 GitHub Pages

- 整站是 `HTML + CSS + JavaScript + 图片`，没有后端依赖。
- 页面全部使用相对路径，上传到仓库根目录后不会因为仓库名变化而失效。
- 每个地区单独放在 `journals/地区名/` 下，图片各自归档，后续继续扩展不会混乱。
- 根目录放了 `.nojekyll`，GitHub Pages 会按纯静态文件直接发布。

## 发布步骤

1. 在 GitHub 新建一个公开仓库。
2. 把这个文件夹里的内容全部上传到仓库根目录。
   - 注意：上传的是 `journal-site` 里面的内容，不是把 `journal-site` 这个外层文件夹再套一层。
3. 打开仓库页面，进入 `Settings`。
4. 左侧找到 `Pages`。
5. 在 `Build and deployment` 里把 `Source` 设为 `Deploy from a branch`。
6. `Branch` 选择 `main`，文件夹选择 `/(root)`，然后保存。
7. 等几分钟，GitHub 会生成访问地址。

## 发布后网址会是什么

通常是：

```text
https://你的用户名.github.io/仓库名/
```

如果你以后专门建一个名为 `你的用户名.github.io` 的仓库，那么首页地址可以直接是：

```text
https://你的用户名.github.io/
```

## 后续新增地区怎么加

例如以后新增扬州：

1. 新建 `journals/yangzhou/index.html`
2. 新建 `journals/yangzhou/images/`
3. 把图片放进去
4. 在首页 `index.html` 增加一个新的日志入口
5. 提交到 GitHub，Pages 会自动更新

## 官方文档

- GitHub Pages 是静态网站托管服务：
  https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
- GitHub Pages Quickstart：
  https://docs.github.com/en/pages/quickstart
- 配置发布源：
  https://docs.github.com/zh/enterprise-cloud@latest/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
