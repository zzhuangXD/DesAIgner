---
name: 纸间 ZHIJIAN
colors:
  background: '#f6f1e7'
  surface: '#fffcf6'
  on-surface: '#282b27'
  on-surface-variant: '#756b61'
  outline: '#d6cdbf'
  primary: '#9d452f'
  on-primary: '#fffaf2'
  secondary-container: '#dce2d4'
  success: '#3f6047'
  error: '#a12d2b'
typography:
  display:
    fontFamily: Georgia, Songti SC, STSong, serif
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.25'
  headline:
    fontSize: 28px
    fontWeight: '400'
    lineHeight: '1.4'
  subheading:
    fontSize: 20px
    fontWeight: '400'
    lineHeight: '1.4'
  body:
    fontFamily: -apple-system, BlinkMacSystemFont, PingFang SC, sans-serif
    fontSize: 16px
    lineHeight: '1.7'
  caption:
    fontFamily: ui-monospace, SFMono-Regular, monospace
    fontSize: 12px
    lineHeight: '1.5'
rounded:
  button: 4px
  card: 8px
spacing:
  unit: 4px
  scale: 4 / 8 / 12 / 16 / 24 / 32 / 48px
---

# Design System: 纸间 ZHIJIAN

提取对象是本案例预先制作的虚构书店 fixture，不是互联网品牌或 Skill 生成的原站。未使用 Stitch MCP、上传 API 或云端页面生成。具体源码和色值位置见 ../design-data.json；设计文档由本地 Agent 按 extract-design-md 工作流编写。

## 1. Visual Theme & Atmosphere

纸间的页面像一张展开的暖色纸页：纸白底、墨色正文和低饱和苔绿书封形成安静的阅读环境。标题使用细而舒展的衬线字体，正文回到系统无衬线；这种对比让展示区像书籍扉页，而信息区保持日常阅读的清晰度。砖红只落在行动入口和封脊，承担视觉锚点，不铺满整个页面。

首页以不等宽的文字与书封双栏建立主次；正文长度受控，分区靠留白与细线而非浓重阴影区隔。小圆角属于容器与按钮，书封一侧保持直角并加厚色脊。整体是编辑式、温暖克制的书店表达；这是从源码推断的视觉意图，不是品牌方或用户研究结论。字体随设备回退，不能保证各设备字形完全相同。

证据：fixture/tokens.css:3–15；fixture/bookshop.css:3–18、20、23–24；fixture/bookshop.html:3–4。

## 2. Color Palette & Roles

### Primary Foundation

- **暖纸白 / Warm Paper — #f6f1e7**：页面基础背景。tokens.css:3。
- **淡奶白 / Pale Cream — #fffcf6**：卡片和输入框表面。tokens.css:4；bookshop.css:24、27。
- **细砂线 / Sand Line — #d6cdbf**：边框、分区线和书封边缘。tokens.css:7。

### Accent & Interactive

- **砖红 / Terracotta — #9d452f**：主要按钮、当前导航、可见焦点及书脊。tokens.css:8；bookshop.css:13、17、20、22。
- **奶纸按钮文字 / Cream on Accent — #fffaf2**：主按钮文字。tokens.css:9。
- **干苔绿 / Dry Sage — #dce2d4**：书封色块，不代表成功或可点击。tokens.css:10；bookshop.css:17。

### Typography & Text Hierarchy

- **印刷墨 / Print Ink — #282b27**：主文字和按钮悬停底色。tokens.css:5；bookshop.css:21。
- **灰褐 / Warm Muted — #756b61**：说明、标签和辅助文字。tokens.css:6。
- **发现的近似值 #776d63**：仅在 bookshop.css:30 的页脚覆盖。文档将它记为与灰褐同一语义角色的漂移；未偷偷修改输入源码，复用示例采用正式 muted token。不能因此宣称整个代码库完全一致。

### Functional States

- **叶绿 / Leaf Green — #3f6047**：源码定义的成功文字，tokens.css:11、bookshop.css:29。
- **告警红 / Error Red — #a12d2b**：源码定义的无效输入边框，tokens.css:12、bookshop.css:28。
- 上述状态有 CSS 定义，但原始首页未包含对应交互，不可推断原站已经实现表单校验。

## 3. Typography Rules

### Hierarchy & Weights

- 展示标题：Georgia / Songti SC / STSong / serif，48px、400、1.25 行高；640px 以下变为 36px。tokens.css:13、16；bookshop.css:6、31。
- 分区标题：同一衬线族，28px、400、1.4。tokens.css:17；bookshop.css:7。
- 卡片标题：同一衬线族，20px、400、1.4。tokens.css:18；bookshop.css:8。
- 正文：系统无衬线，16px、1.7；卡片说明局部使用 14px。tokens.css:14、19；bookshop.css:3、9、25。
- 档案标签：系统等宽，12px、1.5。tokens.css:15、20；bookshop.css:15。
- 按钮：系统无衬线，14px、600、1.4。bookshop.css:20。

### Spacing Principles

标题 text-wrap:balance，正文 text-wrap:pretty；未定义自定义字距，不添加臆测的 tracking。段落以自然语句长度和 1.7 行高保证阅读舒适度。主体四像素基础节奏，字号不完全属于四像素网格，不能混为一套尺度。

## 4. Component Stylings

### Buttons

砖红实底与奶纸文字、4px 小圆角、12px/24px 纵横内距、最小 44px 高度；悬停转墨色，键盘聚焦增加砖红外轮廓和 4px 偏移。源码没有声明过渡动画，因此复用不增加动画。bookshop.css:20–22。

### Cards & Book Covers

卡片为淡奶白、1px 砂色边框、8px 圆角、24px 内距、无阴影；书封为 3:4，左侧 8px 砖红书脊，苔绿底，只有右侧圆角。bookshop.css:17、24。

### Navigation

两端分布的水平导航、12px 文字、16px 间隔和底部细线；当前项以砖红及加粗下划线表达。此输入只有一个导航链接，没有移动端抽屉，不推断隐藏菜单。bookshop.css:11–13；bookshop.html:2。

### Inputs & Forms

源码有最小 44px、奶白底、细边框、4px 圆角、12px 内距的输入框及错误边框样式。首页没有实际表单，不把样式提取当作功能验证。bookshop.css:27–28。

### Reading Event Card（本地复用示例）

展示页新增的读书活动卡直接引用 fixture/tokens.css 的颜色、字体、间距与圆角，属于提取后由本地 Agent 实现的延展，不是原始源码或 Stitch 生成内容。点击按钮仅切换选中状态，无真实预约。

## 5. Layout Principles

### Grid & Structure

最大内容宽度 1120px；首页主区为 1.3:1 双栏，书架为等宽双栏。640px 以下都折为单栏，书封设 200px 宽。bookshop.css:10、14、23、31。

### Whitespace Strategy

源间距尺度：4、8、12、16、24、32、48px。桌面页边距 32px，上下 24px/48px；手机边距 16px、上下 24px。主区间距 32px，分区间距 48px，卡片内距 24px。tokens.css:21–27；bookshop.css:10、14、23–24、31。

### Alignment & Visual Balance

文字左对齐，书封在自己的列中居中，标题重量较轻，按钮是主要高对比焦点。段落最大宽度 30em，避免正文占满宽屏。bookshop.css:16–17。

### Responsive Behavior & Touch

原站只有 640px 一个断点；触控入口至少 44px 高。演示系统说明页自己的双栏和导航不属于原站设计系统。没有源码证据的深色模式、加载骨架、模态框或动效不在本次提取范围。

## 6. Design System Notes for Stitch Generation

### Language to Use

“暖纸张、印刷墨色、轻衬线、安静留白、细分隔线、小圆角、砖红行动锚点，像独立书店里的一页编辑手记。”这些词对应输入源码而非另造视觉方向。

### Color References

暖纸白 #f6f1e7，淡奶白 #fffcf6，墨色 #282b27，灰褐 #756b61，砖红 #9d452f，干苔绿 #dce2d4，砂色分隔线 #d6cdbf。

### Component Prompts

1. 新增一张读书活动卡：保留奶白表面、细砂色边框、小圆角和舒展留白，标题用轻衬线，砖红仅用于主要行动。
2. 新增图书详情页：保持暖纸白背景和左对齐正文，书封延续干苔绿和砖红书脊，辅助信息使用灰褐，不新增渐变或浓重阴影。
3. 新增书讯订阅区域：输入框采用同一奶白表面与小圆角，错误给出明确文字，不只改变颜色。

### Incremental Iteration

先延续颜色和排版，再添加一个组件，最后验证不同宽度和交互状态；不要仅因新增功能引入全新色系。本文件可以作为后续 Stitch 输入，但本次没有上传、运行或验证任何 Stitch 云端生成。
