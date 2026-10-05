# 济南大学城实验高中背景图像生成器

一个基于纯前端（HTML+CSS+JavaScript）的校园背景图像生成工具，用于快速生成符合学校视觉规范的背景图（海报、PPT背景、横幅、提示语等）。

---

### 项目简介

本项目通过Canvas动态绘制背景图像，用户可以在页面上调整尺寸、配色、遮罩、缩进、标识、背景图形等参数，实时预览并导出PNG图片。所有资源均在本地加载，无需后端服务，适合离线使用。

主要特性：

· 自定义画布宽高

· 主色/辅色/遮罩色/标识色可选（睿雅红、修律蓝、帝王黄、象牙白等标准色）

· 顶部/底部遮罩及装饰

· 背景图形纵横缩进控制

· 顶部标识、底部标识、小飞天（轮廓/填充）可选

· 顶部/底部背景图形及方向控制

· 支持圆角

· 内置多套预设模板（一键应用）

· 可预览并导出PNG

---

### 运行方式

##### 方式一：使用任意静态服务器

为防止Canvas跨域污染，建议通过HTTP服务访问，不建议直接打开index.html。

例如：

```bash
# Python 3
python -m http.server 5801
```

```bash
# Node.js（需安装 http-server）
npx http-server -p 5801
```

然后访问 http://localhost:5801/index.html。

##### 方式二：使用start.bat

对于无Python环境和Node.js环境的Windows7 SP1及以上系统，可使用start.bat打开。双击运行start.bat后，会自动启动一个本地HTTP服务（端口 5801），并打开浏览器访问：

```
http://localhost:5801/index.html
```

按Ctrl + C可终止服务。

##### 方案三：直接打开index.html

若以上方案均无法使用，也可直接双击打开index.html，但其中导出等功能可能无法使用。

---

### 使用说明

1. 打开页面后，在左侧表单中设置：
   
   * 高度/宽度（像素）——可展开“参考宽高”查看常用尺寸
   
   * 背景主色——支持纯色与渐变
   
   * 背景辅色——背景图形颜色
   
   * 圆角
   
   * 遮罩——顶部/底部遮罩高度、遮罩装饰、遮罩颜色
   
   * 缩进——纵缩进/横缩进
   
   * 标识——学校Logo标识、校园精神标识、形象大使小飞天、标识颜色、是否受遮罩影响
   
   * 背景图形——顶部/底部图形及方向

2. 可展开“预设模板”选择内置方案，点击“应用预设”一键填充参数。

3. 点击“仅预览”在页面下方查看效果。

4. 点击“预览和导出”预览并自动下载PNG图片。

---

### 预设模板

| 预设名称   | 说明                  |
| ------ | ------------------- |
| 象牙白海报  | A4 竖版，象牙白主色，顶部/底部遮罩 |
| PPT背景  | 1920×1080，睿雅红       |
| 修律蓝提示语 | 2200×800，修律蓝，圆角     |
| 象牙白A4  | A4竖版，象牙白            |
| 横幅     | 4000×500，睿雅红        |
| 睿雅红A4  | A4竖版，睿雅红            |
| 睿雅红提示语 | 2200×800，睿雅红，圆角     |

---

### 技术实现

- Canvas 2D——图像绘制核心

- roundRect实现圆角裁剪

- Promise.all——预加载所有图片资源后再允许绘制

- 核心绘制逻辑位于col/col7001/todraw.js

---

### 注意事项

- 请依设备环境选择合适的打开方式，详见上方“运行方式”。

- 输入框仅接受正整数，除此之外，也请保证内容区域尺寸及比例合理。

- 导出的图片格式为PNG，文件名以当前时间戳命名。

---

### 适用场景

- 学校宣传海报底图

- PPT 背景

- 横幅 / 展板背景

- 通知 / 提示语底图

---

### 版权与免责声明

本项目为个人开发的开源工具。

- 核心代码部分采用MIT许可证。

- 项目内涉及的校徽、校名、视觉识别元素等，版权归济南大学城实验高级中学所有，仅用于学习、交流与非商业用途。本项目与学校官方无关，不代表学校立场。

- 项目内使用的 jQuery、Layui、等第三方库，均依其各自许可证分发（主要为 MIT），版权归各自作者所有，详见各库自带声明。

如版权方认为内容不妥，请联系我删除。邮箱：1360838964@qq.com

### Copyright & Disclaimer

This is a personal open-source project, not affiliated with Jinan University City Experimental High School.

- Code (except school visual assets): MIT License.

- School visual assets (logos, emblems, VI elements):
  © Jinan University City Experimental High School. All rights reserved. For learning and non-commercial use only.

- Third-party libraries (jQuery, Layui, etc.): distributed under their respective licenses (mostly MIT).

If you are the copyright holder and object to any content, please contact me and I will remove it promptly.