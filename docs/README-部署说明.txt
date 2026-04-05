打开方式
1. 直接双击本目录下的 index.html
2. 婺源页面入口在 journals\wuyuan\index.html

目录结构
1. index.html 是首页
2. assets\css\styles.css 是全站样式
3. assets\js\site.js 是全站交互
4. journals\wuyuan\index.html 是婺源日志页
5. journals\wuyuan\images\ 是婺源这一页专属图片目录

以后新增地区的方法
1. 在 journals 下新建一个地区文件夹，例如 journals\yangzhou
2. 在该文件夹下新建 index.html
3. 再新建 images 文件夹，放该地区专属图片
4. 首页增加一个新的日志入口链接到对应地区页面

发布时怎么做
1. 不要只上传单个 html
2. 要把整个 journal-site 文件夹里的内容一起上传
3. 上传后首页仍然是 index.html
4. 因为图片和页面都在同一套目录结构里，所以别人访问时也能正常看到图片
