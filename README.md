# DesAIgner

设计类 AI Agent Skills 的网页实验室，按两组并列合集组织。

**[打开项目总览](https://zzhuangxd.github.io/DesAIgner/)**

| 并列合集 | 入口 | 内容 |
| --- | --- | --- |
| 赛博朋克单 Skill 对照 | [cyberpunk/](https://zzhuangxd.github.io/DesAIgner/cyberpunk/) | 同一简报下的 9 个独立网页 |
| 独立能力场景案例 | [capabilities/](https://zzhuangxd.github.io/DesAIgner/capabilities/) | 报名页审查修复、素材审核工作台、源码设计系统提取 |

根目录 `index.html` 只承担父级总览。两组合集分别提供返回总览和访问另一合集的导航。样例及证据文件保持原地址，旧入口 `cyberpunk-skill-gallery.html` 跳转到 `cyberpunk/`。

独立能力案例按各自适用场景制作，页面内附说明、提示词及证据；不作同题排名，详见 [案例方法](capabilities/README.md)。

## 赛博朋克同题对照

[实验方法与限制](experiment-report.md) · [统一内容简报](cyberpunk-brief.md)

同一虚构赛博朋克艺术展 **霓虹残响 / NEON AFTERIMAGE**，9 个候选仓库各选 1 个具体 Skill，分别生成可操作的网页。所有样例使用 `gpt-6.1-sol / high`；各次初始生成请求独立，不读取其他样例。

| 编号 | 网页 / 实际 Skill | 上游仓库 | 角色 |
| --- | --- | --- | --- |
| L007 | [ui-ux-pro-max](samples/L007/index.html) | [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 设计检索与生成指导 |
| L008 | [design-taste-frontend](samples/L008/index.html) | [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 方向抽取与视觉生成 |
| L009 | [better-layout](samples/L009/index.html) | [jakubkrehel/skills](https://github.com/jakubkrehel/skills) | 布局与响应式规则 |
| L010 | [emil-design-eng](samples/L010/index.html) | [emilkowalski/skills](https://github.com/emilkowalski/skills) | 设计工程与交互 |
| L011 | [interface-design](samples/L011/index.html) | [Dammyjay93/interface-design](https://github.com/Dammyjay93/interface-design) | 展品浏览产品界面 |
| L012 | [frontend-design](samples/L012/index.html) | [anthropics/skills](https://github.com/anthropics/skills) | 视觉与前端生成 |
| L013 | [web-design-guidelines](samples/L013/index.html) | [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) | 规范约束与审查 |
| L014 | [baseline-ui](samples/L014/index.html) | [ibelick/ui-skills](https://github.com/ibelick/ui-skills) | UI 基线与组件规范 |
| L015 | [taste-design](samples/L015/index.html) | [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) | 语义规范，模型本地实现 |

## 如何浏览

在线打开项目总览，选择任一合集。赛博朋克对照支持按编号或 Skill 名称搜索；每张卡片提供真实桌面/手机截图、浏览器检查、运行摘要和固定提交的上游 Skill 链接。独立能力合集提供三个各有提示词与说明的场景案例。

也可下载仓库后直接打开 `index.html`；没有服务器端、在线字体或远程图片依赖。L011 声景需要点击播放以满足浏览器音频策略。

## 如何理解结果

- 原始本地成品共通过 27 组浏览器检查：1440、390、320 像素宽度，检查交互、键盘操作、资源与文档宽度；记录在 `evidence/`。这不是完整无障碍认证。
- L008 执行了自身方向抽取、素材获取及多轮截图修改，最终自带检查为 0 FAIL / 3 WARN；它并非一次生成样本。
- L013 的 `web-design-guidelines` 承担规范约束和审查，基础视觉由模型生成。
- L015 使用 `taste-design` 产生语义规范后由模型本地实现，**没有调用 Google Stitch 服务**。
- 统一简报固定作品与世界观，执行提示主要引导本地 CSS/SVG/Canvas 艺术，因此题材与视觉存在收敛。没有无 Skill 对照、多主题重复实验或盲评，不能将这些结果当成绝对排名。
- 项目、展览、地点、日期与创作者为虚构设定，不提供现实售票或预约。

## 发布

GitHub Pages 从 `main` 分支根目录发布；`.nojekyll` 保留原始静态文件。提交网页更新到 `main` 后，GitHub 自动重新部署。父级首页及两个子级入口分别为 `/DesAIgner/`、`/DesAIgner/cyberpunk/` 与 `/DesAIgner/capabilities/`。

公开仓库只保留交付网页及必要的证据摘要，不包含本机认证、账号配置、执行日志、原始请求响应、上游完整仓库、构建环境或本地离线整包。

## 素材及许可

见 [第三方素材与授权说明](THIRD_PARTY_NOTICES.md)。各上游 Skill 的名称与作者仅用于说明来源，不表示官方认证或背书。
