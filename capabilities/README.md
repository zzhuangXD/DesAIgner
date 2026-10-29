# L013–L015 · 独立能力案例

本轮按每个 Skill 的适用场景分别制作，不沿用赛博朋克同题对照。三个案例均由当前本地 Agent 直接读取固定提交的 Skill 并执行，没有调用其他生成 Agent 或独立无历史上下文模型请求。它们是教学案例，不是盲评、量化评测或三个仓库的效果排名。

## 页面与实际能力

| 页面 | 实际使用的 Skill | 输入与可核查产物 |
| --- | --- | --- |
| [L013：报名页审查与修复](L013/) | [web-design-guidelines](https://github.com/vercel-labs/agent-skills/blob/1a2c79d4e6c4a2283dc2c614b6538cbe1ed5ca62/skills/web-design-guidelines/SKILL.md) | 人为构造的缺陷 HTML → 8 条有行号的发现 → 可填写、校验和键盘提交的修复版。 |
| [L014：素材审核工作台](L014/) | [baseline-ui](https://github.com/ibelick/ui-skills/blob/59193a75432e5f41c6980f53b9e6a7bd56919947/skills/baseline-ui/SKILL.md) | 虚构业务及粗糙概念示意 → 一致的层级、间距、数字与真实筛选/详情/审核/撤回流程。 |
| [L015：设计系统提取与复用](L015/) | [stitch::extract-design-md](https://github.com/google-labs-code/stitch-skills/blob/0337446dadde6f8c94210444e2aa9d546126480f/plugins/stitch-design/skills/extract-design-md/SKILL.md) | 冻结的虚构书店 HTML/CSS → 10 色、28 变量、设计规则、漂移记录与 DESIGN.md → 本地复用组件。 |

完整提示词保存在 [L013.txt](prompts/L013.txt)、[L014.txt](prompts/L014.txt)、[L015.txt](prompts/L015.txt)，各页有摘要及下载入口。

## 实际执行与归因

- L013 按 Skill 要求重新取得 [Web Interface Guidelines](https://github.com/vercel-labs/web-interface-guidelines/blob/main/command.md)，在 [review.md](L013/review.md) 输出 `file:line` 发现；本地 Agent 按发现修复。未把规范文件称为自动化扫描器或视觉生成器。
- L014 采用 React、Tailwind 默认尺度、cn（clsx + tailwind-merge）与一致的 Radix 原语。无新增动画或渐变。整理前仅为人为构造的静态示意，未声称实测用户效率。
- L015 按提取工作流识别 plain HTML/CSS，读取上游 plain-css 参考及设计文档范例；对真实源码做颜色、排版、组件、布局和近似值提取。完整文档位于 `.stitch/DESIGN.md`，公开下载副本为 [DESIGN.md](L015/DESIGN.md)。[design-data.json](L015/design-data.json) 附行号和输入哈希。
- **L015 无需 Stitch MCP，未调用 Stitch 云端。** 原始品牌视觉来自本地 Agent 预制输入，Skill 的成果是提取文档与复用依据。成功/错误样式在原源码有定义但首页未使用，提取不能替代功能验证。
- 三页的展示布局、说明、缺陷样例及数据均由本地 Agent 制作；Skill 提供相应规则/流程。不能把各页一切结果都归因于 Skill，不能据此证明效果提升的因果关系。

## 验证与运行

使用实际 Google Chrome 检查 1440、390、320px，包括总览共 12 组；覆盖字段校验、键盘提交、Radix 标签页/弹窗、审批撤回、空状态、token 关联高亮、源变量一致性及复用组件的实际计算样式。记录见 [browser-checks.json](evidence/browser-checks.json)。没有做真人读屏或完整 WCAG 认证。

页面不调用第三方字体、图片、业务 API，无实际报名、素材上传、预约或邮件发送；数据不持久保存。下载仓库后可直接打开各页面，建议用任意静态 HTTP 服务浏览以完整体验同源 iframe 的关联高亮。

L014 的编译产物已随页提供，不要求访问者安装依赖。开发源码为 workbench.jsx / input.css，构建环境不随仓库发布。React、Radix、Tailwind 与相应依赖许可证沿用 [原 L014 的完整许可目录](../samples/L014/licenses/)；编译器追加的许可摘要见 [workbench.js.LEGAL.txt](L014/workbench.js.LEGAL.txt)。其他 Skill 名称与作者仅表示来源，非官方认可。
