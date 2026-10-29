# L014 · baseline-ui 应用记录

所选 Skill：skills/baseline-ui/SKILL.md，ibelick/ui-skills@59193a75432e5f41c6980f53b9e6a7bd56919947。

- Stack：React + Tailwind 默认色板/间距；cn 使用 clsx 与 tailwind-merge。
- Components：标签页与详情对话框来自同一套 Radix；无自制键盘游标或焦点陷阱。详情为信息 Dialog，不进行删除等不可逆操作；审核允许撤回。
- Interaction：错误场景为无检索结果，提供清除筛选与全部素材入口。不是上传或支付界面，无真实网络请求。
- Animation：未新增任何动画；无需 motion/react。
- Typography：标题 text-balance；正文 text-pretty；数字 tabular-nums；长素材名称 truncate，详情显示全文。没有自定义 letter-spacing。
- Layout：固定 z-40/z-50；方形图标与头像用 size-*；全页 min-h-dvh；无固定页脚遮挡焦点。
- Design：单一 teal 强调色，其余 slate 中性色；无渐变、发光、自定义缓动或额外阴影尺度。
- Performance：无 useEffect、无 will-change、无大面积 blur；6 项演示无需虚拟列表。

“整理前”是预先构造的静态示意，不能用来推断实际生产性能或人类用户效率。整理版展示的结果是本地 Agent 按 Skill 约束实现的案例，没有额外设计 Skill 参与此工作台。控制页文案属于展示层，不是 baseline-ui 自动生成的报告。

依赖沿用本地已安装构建工具；公开页只提供编译后 JS/CSS 及开发源码，不包含 node_modules。
