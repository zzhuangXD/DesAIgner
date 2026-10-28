## samples/L013/index.html

以下行号对应收到的原始源码；所列问题已在随附 HTML 中修复。

samples/L013/index.html:13 - viewport-fit=cover，但缺少顶部及左右安全区留白 → body 添加对应 env(safe-area-inset-*)。
samples/L013/index.html:14 - color/background-color 过渡不符合仅动画 transform/opacity 的规则 → 移除过渡，保留即时 hover 反馈。
samples/L013/index.html:62 - border-color 过渡不符合 compositor-only 动画规则 → 移除过渡。
samples/L013/index.html:65 - 直接缩放 SVG 根元素，缺少规则要求的 g 变换容器和原点设置 → 移除非必要缩放效果。
samples/L013/index.html:71 - padding 过渡触发布局；同时过渡颜色 → 移除过渡，保留 hover 样式。
samples/L013/index.html:105 - 中文展览品牌未禁止自动翻译 → 品牌链接及展名添加 translate="no"。
samples/L013/index.html:113 - 主视觉展期独立硬编码，未使用现有 Intl 日期格式化 → 与展讯共用格式化结果。
samples/L013/index.html:156 - 三个按钮用 aria-expanded 表示作品选择，但共享详情始终展开，按钮也不执行折叠 → 改用 aria-pressed，同步 CSS 和脚本。
samples/L013/index.html:157 - 虚构创作者名称未保护自动翻译 → 三张作品卡及详情作者添加 translate="no"。
samples/L013/index.html:170 - 同步完成的选择持续显示“正在读取”，误示加载状态 → 改为“读取作品 · 已选”。

## 复核

✓ 保留原生按钮键盘操作、锚点导航、可见焦点、跳过链接及 polite 详情播报。
✓ 保留作品 URL 参数、前进/后退恢复、响应式布局与 reduced-motion 支持。
✓ 保留全部展览内容、内联原创 SVG 和虚构项目声明；未引入外部依赖或其他 Skill。

仅依据本次提供的新鲜指南与实际源码进行静态审查；未执行浏览器测试。web-design-guidelines 用作审查约束，不是完整设计生成器。
